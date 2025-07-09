// Vue Table Components
export { default as FooTable } from "./FooTable.vue";
export { default as TableHead } from "./TableHead.vue";
export { default as TableBody } from "./TableBody.vue";
export { default as TableColumn } from "./TableColumn.vue";
export { default as TableRow } from "./TableRow.vue";
export { default as TablePagination } from "./TablePagination.vue";
export { default as TableSorter } from "./TableSorter.vue";
export { default as TableDataRow } from "./TableDataRow.vue";
export { default as CompactTable } from "./CompactTable.vue";
export { default as useTable } from "./useTable";

// Styling System
export {
  defaultTableStyles,
  modernTableStyles,
  compactTableStyles,
  beautifulTableStyles,
  elegantGlassTableStyles,
  vibrantTableStyles,
  createTableStyles,
  type TableStyleConfig,
} from "./tableStyles";
export {
  provideTableStyles,
  useTableStyles,
  useTableStyleClasses,
  TABLE_STYLES_KEY,
} from "./useTableStyles";

// Types
export type { AlignmentType } from "./FooTable.vue";
export type { PaginationInterface } from "./TablePagination.vue";
