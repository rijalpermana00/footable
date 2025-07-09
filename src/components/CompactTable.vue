<template>
	<FooTable
		:aria-label="ariaLabel || `Table with ${data.length} rows`"
		:aria-describedby="ariaDescribedBy"
	>
		<TableHead>
			<TableRow>
				<TableColumn
					v-for="(head, index) in sortedColumns"
					:key="index"
					variant="head"
					:align="head.align || 'left'"
					:id="head.id"
					:col-span="head.colSpan"
					:row-span="head.rowSpan"
					:sort="head.sortable ? onSort : undefined"
					:sort-direction="orderBy === head.id ? order : null"
				>
					{{ head.label }}
					<TableSorter
						v-if="head.sortable && orderBy === head.id"
						:order="order"
					/>
				</TableColumn>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableDataRow
				v-if="loading"
				:col-span="sortedColumns.length"
				text="Loading..."
			/>
			<template v-else-if="currentPageData && currentPageData.length > 0">
				<TableRow
					v-for="(item, index) in currentPageData"
					:key="`${id}-${index}`"
					variant="hover"
				>
					<TableColumn
						v-for="head in sortedColumns"
						:key="head.id"
						:align="head.align"
						:col-span="head.colSpan"
						:row-span="head.rowSpan"
					>
						{{ item[head.id] }}
					</TableColumn>
				</TableRow>
			</template>
			<TableDataRow
				v-else
				:col-span="sortedColumns.length"
				text="No data available"
			/>
		</TableBody>
	</FooTable>
	<TablePagination
		v-if="pagination"
		:page="page"
		:count="pagination.count"
		:per-page="rowsPerPage"
		:on-page-change="onChangePage"
		:on-rows-per-page-change="onChangeRowsPerPage"
		:server-side="pagination.serverSide"
	/>
</template>

<script setup lang="ts">
import { computed, watch } from "vue"
import FooTable from "./FooTable.vue"
import TableHead from "./TableHead.vue"
import TableRow from "./TableRow.vue"
import TableColumn from "./TableColumn.vue"
import TableBody from "./TableBody.vue"
import TablePagination, {
	type PaginationInterface,
} from "./TablePagination.vue"
import TableSorter from "./TableSorter.vue"
import TableDataRow from "./TableDataRow.vue"
import useTable from "./useTable"

export type AlignmentType = "left" | "right" | "center"

interface ColumnInterface {
	label: string
	id: string
	sortable?: boolean
	ordering?: number
	colSpan?: number
	rowSpan?: number
	align?: AlignmentType
}

interface TableInterface {
	columns: ColumnInterface[]
	data: any[]
	id?: string
	pagination?: PaginationInterface
	loading?: boolean
	ariaLabel?: string
	ariaDescribedBy?: string
}

const props = withDefaults(defineProps<TableInterface>(), {
	id: "",
	loading: false,
})

const {
	page,
	setPage,
	rowsPerPage,
	onChangePage,
	onChangeRowsPerPage,
	onSort,
	order,
	orderBy,
	sortedData,
} = useTable({
	defaultRowsPerPage: props.pagination?.perPage,
	defaultCurrentPage: props.pagination?.currentPage,
})

const sortedColumns = computed(() =>
	[...props.columns].sort((a, b) => (a.ordering ?? 0) - (b.ordering ?? 0))
)

const currentPageData = computed(() => {
	const data = order.value ? sortedData(props.data) : props.data
	return data?.slice(
		(page.value - 1) * (rowsPerPage.value ?? 0),
		page.value * (rowsPerPage.value ?? 0)
	)
})

const currentPage = computed(() =>
	Math.ceil((props.data ? props.data.length : 0) / rowsPerPage.value)
)

watch(currentPage, (newCurrentPage) => {
	if (page.value > newCurrentPage) {
		setPage(newCurrentPage)
	}
})
</script>
