<template>
	<div class="p-6 space-y-8">
		<h1 class="text-2xl font-bold">
			Vue Table with Colspan and Rowspan Examples
		</h1>

		<!-- Example 1: Basic Table with Colspan -->
		<div>
			<h2 class="text-xl font-semibold mb-4">
				Example 1: Basic Table with Colspan
			</h2>
			<FooTable>
				<TableHead>
					<TableRow>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Name</TableColumn
						>
						<TableColumn
							variant="head"
							class="px-4 py-2 border"
							:col-span="2"
							>Contact Information</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Department</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Full Name</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Email</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Phone</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Dept</TableColumn
						>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>John Doe</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>john@example.com</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>555-0123</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Engineering</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Jane Smith</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>jane@example.com</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>555-0456</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Marketing</TableColumn
						>
					</TableRow>
				</TableBody>
			</FooTable>
		</div>

		<!-- Example 2: Table with Rowspan -->
		<div>
			<h2 class="text-xl font-semibold mb-4">
				Example 2: Table with Rowspan
			</h2>
			<FooTable>
				<TableHead>
					<TableRow>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Department</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Employee</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Position</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Salary</TableColumn
						>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableColumn class="px-4 py-2 border" :row-span="3"
							>Engineering</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>John Doe</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Senior Developer</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>$90,000</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Jane Smith</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Frontend Developer</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>$75,000</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Bob Johnson</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>DevOps Engineer</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>$85,000</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border" :row-span="2"
							>Marketing</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Alice Brown</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Marketing Manager</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>$70,000</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Charlie Wilson</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>Content Creator</TableColumn
						>
						<TableColumn class="px-4 py-2 border"
							>$55,000</TableColumn
						>
					</TableRow>
				</TableBody>
			</FooTable>
		</div>

		<!-- Example 3: Complex Table with Both Colspan and Rowspan -->
		<div>
			<h2 class="text-xl font-semibold mb-4">
				Example 3: Complex Table with Both Colspan and Rowspan
			</h2>
			<FooTable>
				<TableHead>
					<TableRow>
						<TableColumn
							variant="head"
							class="px-4 py-2 border"
							:row-span="2"
							>Product</TableColumn
						>
						<TableColumn
							variant="head"
							class="px-4 py-2 border"
							:col-span="3"
							>Q1 Sales</TableColumn
						>
						<TableColumn
							variant="head"
							class="px-4 py-2 border"
							:col-span="3"
							>Q2 Sales</TableColumn
						>
					</TableRow>
					<TableRow>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Jan</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Feb</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Mar</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Apr</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>May</TableColumn
						>
						<TableColumn variant="head" class="px-4 py-2 border"
							>Jun</TableColumn
						>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Product A</TableColumn
						>
						<TableColumn class="px-4 py-2 border">100</TableColumn>
						<TableColumn class="px-4 py-2 border">120</TableColumn>
						<TableColumn class="px-4 py-2 border">110</TableColumn>
						<TableColumn class="px-4 py-2 border">130</TableColumn>
						<TableColumn class="px-4 py-2 border">140</TableColumn>
						<TableColumn class="px-4 py-2 border">135</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border"
							>Product B</TableColumn
						>
						<TableColumn class="px-4 py-2 border">80</TableColumn>
						<TableColumn class="px-4 py-2 border">90</TableColumn>
						<TableColumn class="px-4 py-2 border">85</TableColumn>
						<TableColumn class="px-4 py-2 border">95</TableColumn>
						<TableColumn class="px-4 py-2 border">100</TableColumn>
						<TableColumn class="px-4 py-2 border">105</TableColumn>
					</TableRow>
					<TableRow>
						<TableColumn class="px-4 py-2 border font-semibold"
							>Total</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>180</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>210</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>195</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>225</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>240</TableColumn
						>
						<TableColumn class="px-4 py-2 border font-semibold"
							>240</TableColumn
						>
					</TableRow>
				</TableBody>
			</FooTable>
		</div>

		<!-- Example 4: CompactTable with Colspan in Column Definition -->
		<div>
			<h2 class="text-xl font-semibold mb-4">
				Example 4: CompactTable with Colspan Support
			</h2>
			<CompactTable
				:columns="compactTableColumns"
				:data="compactTableData"
				id="example-table"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import FooTable from "./FooTable.vue"
import TableHead from "./TableHead.vue"
import TableBody from "./TableBody.vue"
import TableRow from "./TableRow.vue"
import TableColumn from "./TableColumn.vue"
import CompactTable from "./CompactTable.vue"

// Example data for CompactTable
const compactTableColumns = ref([
	{ id: "name", label: "Employee Name", sortable: true, ordering: 1 },
	{ id: "department", label: "Department", sortable: true, ordering: 2 },
	{ id: "position", label: "Position", sortable: false, ordering: 3 },
	{ id: "salary", label: "Salary", sortable: true, ordering: 4 },
])

const compactTableData = ref([
	{
		name: "John Doe",
		department: "Engineering",
		position: "Senior Developer",
		salary: "$90,000",
	},
	{
		name: "Jane Smith",
		department: "Engineering",
		position: "Frontend Developer",
		salary: "$75,000",
	},
	{
		name: "Bob Johnson",
		department: "Engineering",
		position: "DevOps Engineer",
		salary: "$85,000",
	},
	{
		name: "Alice Brown",
		department: "Marketing",
		position: "Marketing Manager",
		salary: "$70,000",
	},
	{
		name: "Charlie Wilson",
		department: "Marketing",
		position: "Content Creator",
		salary: "$55,000",
	},
])
</script>

<style scoped>
/* Additional styling for better table appearance */
.border {
	border: 1px solid #e5e7eb;
}
</style>
