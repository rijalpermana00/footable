<template>
  <tbody :class="[tableStyleClasses.getBodyClass(), className]">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import { useTableStyleClasses } from "./useTableStyles";

interface TableBodyInterface {
  className?: string;
}

const props = withDefaults(defineProps<TableBodyInterface>(), {
  className: "",
});

const tableStyleClasses = useTableStyleClasses();
</script>
