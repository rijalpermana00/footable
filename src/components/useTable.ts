import { ref, readonly } from "vue"

export type Props = {
	defaultOrder?: "asc" | "desc"
	defaultOrderBy?: string
	defaultRowsPerPage?: number
	defaultCurrentPage?: number
}

export default function useTable(props?: Props) {
	const orderBy = ref(props?.defaultOrderBy ?? "")
	const order = ref<"asc" | "desc">(props?.defaultOrder ?? "asc")
	const page = ref(props?.defaultCurrentPage ?? 1)
	const rowsPerPage = ref(props?.defaultRowsPerPage ?? 5)

	const onSort = (id: string | undefined) => {
		const isAsc = orderBy.value === id && order.value === "asc"
		if (id !== "") {
			order.value = isAsc ? "desc" : "asc"
			orderBy.value = id ?? ""
		}
	}

	const onChangePage = (newPage: number) => {
		page.value = newPage
	}

	const onChangeRowsPerPage = (value: number) => {
		const firstRowIndex = (page.value - 1) * rowsPerPage.value + 1
		const newPage = Math.ceil(firstRowIndex / value)
		page.value = newPage
		rowsPerPage.value = value
	}

	const changeRowsPerPage = (newRowsPerPage: number) => {
		rowsPerPage.value = newRowsPerPage
	}

	const setPage = (newPage: number) => {
		page.value = newPage
	}

	const sortedData = (data: any[]) => {
		return [...data].sort((a, b) => {
			const valueA = a[orderBy.value]
			const valueB = b[orderBy.value]

			if (order.value === "asc") {
				if (valueA < valueB) {
					return -1
				} else if (valueA > valueB) {
					return 1
				} else {
					return 0
				}
			} else if (order.value === "desc") {
				if (valueB < valueA) {
					return -1
				} else if (valueB > valueA) {
					return 1
				} else {
					return 0
				}
			} else {
				return 0
			}
		})
	}

	return {
		order: readonly(order),
		page: readonly(page),
		setPage,
		orderBy: readonly(orderBy),
		rowsPerPage: readonly(rowsPerPage),
		onSort,
		onChangePage,
		changeRowsPerPage,
		onChangeRowsPerPage,
		sortedData,
	}
}
