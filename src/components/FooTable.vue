<template>
  <div :class="tableStyleClasses.getTableResponsiveClass()">
    <table
      :class="tableStyleClasses.getTableClass()"
      role="table"
      :aria-label="ariaLabel || 'Data table'"
      :aria-describedby="ariaDescribedBy"
    >
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.id || header.label">
            {{ header.label }}
          </th>
        </tr>
      </thead>

      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
import { useTableStyleClasses } from "./useTableStyles";

export type AlignmentType = "left" | "right" | "center";
export type SortDirection = "asc" | "desc";

interface HeaderColumn {
  id?: string;
  label: string;
  sortable?: boolean;
  sortDirection?: SortDirection;
  colSpan?: number;
  rowSpan?: number;
  align?: AlignmentType;
}

interface TableInterface {
  headers?: HeaderColumn[];
  pagination?: any;
  paginationOptions?: any;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

defineProps<TableInterface>();

const tableStyleClasses = useTableStyleClasses();
</script>
