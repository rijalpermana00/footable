<template>
  <TableRow :class="tableStyleClasses.getStateClass('dataRow')">
    <TableColumn
      :col-span="colSpan"
      :class="tableStyleClasses.getStateClass('empty')"
    >
      {{ text }}
    </TableColumn>
  </TableRow>
</template>

<script setup lang="ts">
import { useTableStyleClasses } from "./useTableStyles";
import TableRow from "./TableRow.vue";
import TableColumn from "./TableColumn.vue";

interface DataRowInterface {
  colSpan: number;
  text: string;
}

defineProps<DataRowInterface>();
const tableStyleClasses = useTableStyleClasses();
</script>
