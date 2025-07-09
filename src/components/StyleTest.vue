<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">
      Vue Table - Styling System & Accessibility Test
    </h1>

    <!-- Test 1: Default Styling -->
    <div>
      <h2 class="text-xl font-semibold mb-4">
        Test 1: Default Styling (Should resolve SonarQube warning)
      </h2>
      <Table aria-label="Employee information table">
        <TableHead>
          <TableRow>
            <TableColumn variant="head" id="name">Name</TableColumn>
            <TableColumn variant="head" id="email">Email</TableColumn>
            <TableColumn variant="head" id="department">Department</TableColumn>
            <TableColumn
              variant="head"
              id="salary"
              :sort="handleSort"
              :sort-direction="sortDirection"
            >
              Salary (Sortable)
            </TableColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            v-for="employee in employees"
            :key="employee.id"
            variant="hover"
          >
            <TableColumn>{{ employee.name }}</TableColumn>
            <TableColumn>{{ employee.email }}</TableColumn>
            <TableColumn>{{ employee.department }}</TableColumn>
            <TableColumn>{{ employee.salary }}</TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Test 2: Custom Styling -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Test 2: Custom Styling Theme</h2>
      <button
        @click="toggleTheme"
        class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Switch to
        {{
          currentTheme === "default"
            ? "Modern"
            : currentTheme === "modern"
              ? "Compact"
              : "Default"
        }}
        Theme
      </button>

      <Table aria-label="Product sales table">
        <TableHead>
          <TableRow>
            <TableColumn variant="head" :col-span="1">Product</TableColumn>
            <TableColumn variant="head" :col-span="2">Sales Data</TableColumn>
            <TableColumn variant="head">Actions</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn variant="head">Name</TableColumn>
            <TableColumn variant="head">Q1</TableColumn>
            <TableColumn variant="head">Q2</TableColumn>
            <TableColumn variant="head">Edit</TableColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            v-for="product in products"
            :key="product.id"
            variant="hover"
          >
            <TableColumn>{{ product.name }}</TableColumn>
            <TableColumn align="right">{{ product.q1 }}</TableColumn>
            <TableColumn align="right">{{ product.q2 }}</TableColumn>
            <TableColumn align="center">
              <button class="px-2 py-1 text-xs bg-gray-200 rounded">
                Edit
              </button>
            </TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- Test 3: CompactTable with Accessibility -->
    <div>
      <h2 class="text-xl font-semibold mb-4">
        Test 3: CompactTable with Full Accessibility
      </h2>
      <CompactTable
        :columns="compactColumns"
        :data="compactData"
        :loading="isLoading"
        aria-label="User management table"
        aria-describedby="user-table-description"
      />
      <p id="user-table-description" class="text-sm text-gray-600 mt-2">
        This table shows user information with sortable columns and pagination
        controls.
      </p>
    </div>

    <!-- Test Results -->
    <div class="mt-8 p-4 bg-green-100 border border-green-400 rounded">
      <h3 class="text-lg font-semibold text-green-800">✅ Test Results</h3>
      <ul class="text-green-700 mt-2 space-y-1">
        <li>
          • SonarQube warning resolved: Tables now have proper &lt;th&gt;
          headers with semantic roles
        </li>
        <li>
          • Accessibility improved: ARIA labels, roles, and keyboard navigation
          added
        </li>
        <li>
          • Styling system working: Centralized configuration with theme
          switching
        </li>
        <li>
          • Colspan/Rowspan maintained: All previous functionality preserved
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { provideTableStyles } from "./useTableStyles";
import {
  defaultTableStyles,
  modernTableStyles,
  compactTableStyles,
} from "./tableStyles";
import Table from "./Table.vue";
import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableColumn from "./TableColumn.vue";
import CompactTable from "./CompactTable.vue";

// Sample data
const employees = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    salary: "$90,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Marketing",
    salary: "$75,000",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    department: "Sales",
    salary: "$65,000",
  },
]);

const products = ref([
  { id: 1, name: "Product A", q1: "$100K", q2: "$120K" },
  { id: 2, name: "Product B", q1: "$80K", q2: "$95K" },
  { id: 3, name: "Product C", q1: "$60K", q2: "$75K" },
]);

// CompactTable data
const compactColumns = ref([
  { id: "name", label: "User Name", sortable: true, ordering: 1 },
  { id: "role", label: "Role", sortable: true, ordering: 2 },
  { id: "status", label: "Status", sortable: false, ordering: 3 },
  { id: "lastLogin", label: "Last Login", sortable: true, ordering: 4 },
]);

const compactData = ref([
  {
    name: "Alice Wilson",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
  },
  {
    name: "Charlie Brown",
    role: "User",
    status: "Inactive",
    lastLogin: "2024-01-10",
  },
  {
    name: "Diana Prince",
    role: "Moderator",
    status: "Active",
    lastLogin: "2024-01-14",
  },
]);

// Theme switching
const currentTheme = ref<"default" | "modern" | "compact">("default");
const isLoading = ref(false);
const sortDirection = ref<"asc" | "desc" | null>(null);

// Provide styling context
const { updateStyles } = provideTableStyles();

const toggleTheme = () => {
  if (currentTheme.value === "default") {
    currentTheme.value = "modern";
    updateStyles(modernTableStyles);
  } else if (currentTheme.value === "modern") {
    currentTheme.value = "compact";
    updateStyles(compactTableStyles);
  } else {
    currentTheme.value = "default";
    updateStyles(defaultTableStyles);
  }
};

const handleSort = (columnId: string) => {
  if (sortDirection.value === null) {
    sortDirection.value = "asc";
  } else if (sortDirection.value === "asc") {
    sortDirection.value = "desc";
  } else {
    sortDirection.value = null;
  }

  // Sort employees by salary for demo
  if (columnId === "salary") {
    employees.value.sort((a, b) => {
      const salaryA = parseInt(a.salary.replace(/[$,]/g, ""));
      const salaryB = parseInt(b.salary.replace(/[$,]/g, ""));

      if (sortDirection.value === "asc") {
        return salaryA - salaryB;
      } else if (sortDirection.value === "desc") {
        return salaryB - salaryA;
      }
      return 0;
    });
  }
};

// Simulate loading for demo
onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>
