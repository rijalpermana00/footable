// Vue Table Components - Styling Composable
// This composable provides reactive styling configuration for table components

import { inject, provide, ref, type Ref } from "vue"
import { defaultTableStyles, type TableStyleConfig } from "./tableStyles"

// Injection key for table styles
export const TABLE_STYLES_KEY = Symbol("tableStyles")

// Composable for providing table styles
export function provideTableStyles(styles?: Partial<TableStyleConfig>) {
	const tableStyles = ref({
		...defaultTableStyles,
		...styles,
	})

	provide(TABLE_STYLES_KEY, tableStyles)

	return {
		tableStyles,
		updateStyles: (newStyles: Partial<TableStyleConfig>) => {
			tableStyles.value = {
				...tableStyles.value,
				...newStyles,
			}
		},
	}
}

// Composable for consuming table styles
export function useTableStyles(): Ref<TableStyleConfig> {
	const injectedStyles = inject<Ref<TableStyleConfig>>(TABLE_STYLES_KEY)

	if (!injectedStyles) {
		// Return default styles if no provider found
		return ref(defaultTableStyles)
	}

	return injectedStyles
}

// Helper function to get specific style classes
export function useTableStyleClasses() {
	const styles = useTableStyles()

	return {
		getTableClass: () => styles.value.table.base,
		getTableResponsiveClass: () => styles.value.table.responsive,
		getHeadClass: () => styles.value.head.base,
		getHeadCellClass: () => styles.value.head.cell,
		getBodyClass: () => styles.value.body.base,
		getRowClass: (variant: "base" | "hover" | "striped" = "base") =>
			styles.value.row[variant],
		getCellClass: (
			variant: "base" | "head" | "body" | "padding" = "base"
		) => styles.value.cell[variant],
		getAlignmentClass: (align: "left" | "center" | "right") =>
			styles.value.cell.alignment[align],
		getSortIconClass: () => styles.value.sort.icon,
		getSortContainerClass: () => styles.value.sort.container,
		getPaginationClass: (variant: keyof TableStyleConfig["pagination"]) => {
			const paginationStyles = styles.value.pagination
			if (variant === "button") {
				return paginationStyles.button
			}
			return paginationStyles[variant]
		},
		getStateClass: (state: "loading" | "empty" | "dataRow") =>
			styles.value.states[state],
	}
}
