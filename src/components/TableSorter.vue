<template>
	<span style="position: relative; display: inline-block">
		<svg
			v-if="order === 'asc'"
			:class="tableStyleClasses.getSortIconClass()"
			fill="currentColor"
			viewBox="0 0 20 20"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
				clip-rule="evenodd"
			/>
		</svg>
		<svg
			v-else
			:class="tableStyleClasses.getSortIconClass()"
			fill="currentColor"
			viewBox="0 0 20 20"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>
</template>

<script setup lang="ts">
import { useTableStyleClasses } from "./useTableStyles"

interface SorterInterface {
	order: "asc" | "desc"
}

defineProps<SorterInterface>()
const tableStyleClasses = useTableStyleClasses()
</script>
