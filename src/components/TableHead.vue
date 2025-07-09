<template>
	<thead :class="tableStyleClasses.getHeadClass()">
		<slot />
	</thead>
</template>

<script setup lang="ts">
import { useTableStyleClasses } from "./useTableStyles"

const tableStyleClasses = useTableStyleClasses()
</script>
