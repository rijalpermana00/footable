<template>
	<component
		:is="Tag"
		:scope="variant === 'head' ? 'col' : undefined"
		:colspan="colSpan"
		:rowspan="rowSpan"
		:class="[getAlignmentClass, getCellClass, className]"
		:role="variant === 'head' ? 'columnheader' : 'cell'"
		:aria-sort="getSortAriaAttribute"
		:tabindex="sort ? 0 : undefined"
		@click="handleClick"
		@keydown="handleKeydown"
	>
		<div :class="getContentClass">
			<slot />
		</div>
	</component>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useTableStyleClasses } from "./useTableStyles"
import type { AlignmentType } from "./FooTable.vue"

interface TableColumnsInterface {
	variant?: "head" | "body" | "footer"
	id?: string
	align?: AlignmentType
	className?: string
	colSpan?: number
	rowSpan?: number
	sort?: (id: string) => void
	sortDirection?: "asc" | "desc" | null
}

const props = withDefaults(defineProps<TableColumnsInterface>(), {
	variant: "body",
	className: "",
	id: "",
	sortDirection: null,
})

const tableStyleClasses = useTableStyleClasses()

const Tag = computed(() => (props.variant === "head" ? "th" : "td"))

const getAlignmentClass = computed(() => {
	return props.align ? tableStyleClasses.getAlignmentClass(props.align) : ""
})

const getCellClass = computed(() => {
	if (props.variant === "head") {
		return tableStyleClasses.getHeadCellClass()
	}
	return tableStyleClasses.getCellClass("body")
})

const getContentClass = computed(() => {
	if (Tag.value === "th" && props.sort) {
		return tableStyleClasses.getSortContainerClass()
	}
	return ""
})

const getSortAriaAttribute = computed(() => {
	if (!props.sort || props.variant !== "head") return undefined

	if (props.sortDirection === "asc") return "ascending"
	if (props.sortDirection === "desc") return "descending"
	return "none"
})

const handleClick = () => {
	if (props.sort) {
		props.sort(props.id || "")
	}
}

const handleKeydown = (event: KeyboardEvent) => {
	if (props.sort && (event.key === "Enter" || event.key === " ")) {
		event.preventDefault()
		props.sort(props.id || "")
	}
}
</script>
