<template>
  <tr :class="[getRowClasses, className]" role="row">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTableStyleClasses } from "./useTableStyles";
import type { AlignmentType } from "./FooTable.vue";

interface TableRowsInterface {
  className?: string;
  align?: AlignmentType;
  variant?: "base" | "hover" | "striped";
}

const props = withDefaults(defineProps<TableRowsInterface>(), {
  className: "",
  variant: "base",
});

const tableStyleClasses = useTableStyleClasses();

const getRowClasses = computed(() => {
  return tableStyleClasses.getRowClass(props.variant);
});
</script>
