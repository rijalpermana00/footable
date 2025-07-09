<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-8"
  >
    <div class="max-w-7xl mx-auto space-y-12">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1
          class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          🎨 Vue Table
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Example Usage
        </p>
      </div>

      <!-- Table Demo -->
      <div class="space-y-8">
        <!-- Basic Table Example -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200">
            📊 Employee Management Table
          </h3>
          <FooTable aria-label="Employee management table">
            <TableHead>
              <TableRow>
                <TableColumn variant="head" id="avatar">Avatar</TableColumn>
                <TableColumn
                  variant="head"
                  id="name"
                  :sort="handleSort"
                  :sort-direction="sortDirection"
                >
                  Name
                  <TableSorter v-if="sortDirection" :order="sortDirection" />
                </TableColumn>
                <TableColumn variant="head" id="email">Email</TableColumn>
                <TableColumn variant="head" id="department"
                  >Department</TableColumn
                >
                <TableColumn variant="head" id="status">Status</TableColumn>
                <TableColumn variant="head" id="salary" align="right"
                  >Salary</TableColumn
                >
                <TableColumn variant="head" id="actions" align="center"
                  >Actions</TableColumn
                >
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                v-for="employee in sortedEmployees"
                :key="employee.id"
                variant="hover"
              >
                <TableColumn>
                  <div
                    class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold"
                  >
                    {{ employee.name.charAt(0) }}
                  </div>
                </TableColumn>
                <TableColumn>
                  <div>
                    <div class="font-semibold">{{ employee.name }}</div>
                    <div class="text-sm text-slate-500 dark:text-slate-400">
                      {{ employee.title }}
                    </div>
                  </div>
                </TableColumn>
                <TableColumn>{{ employee.email }}</TableColumn>
                <TableColumn>
                  <span
                    class="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {{ employee.department }}
                  </span>
                </TableColumn>
                <TableColumn>
                  <span
                    :class="[
                      'px-3 py-1 rounded-full text-xs font-medium',
                      employee.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
                    ]"
                  >
                    {{ employee.status }}
                  </span>
                </TableColumn>
                <TableColumn align="right">
                  <span class="font-semibold">{{ employee.salary }}</span>
                </TableColumn>
                <TableColumn align="center">
                  <div class="flex justify-center space-x-2">
                    <button
                      class="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      class="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </TableColumn>
              </TableRow>
            </TableBody>
          </FooTable>
        </div>

        <!-- Complex Table with Colspan/Rowspan -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200">
            📈 Quarterly Sales Report
          </h3>
          <FooTable aria-label="Quarterly sales report">
            <TableHead>
              <TableRow>
                <TableColumn variant="head" :row-span="2" align="left"
                  >Product</TableColumn
                >
                <TableColumn variant="head" :col-span="3" align="center"
                  >Q1 2024</TableColumn
                >
                <TableColumn variant="head" :col-span="3" align="center"
                  >Q2 2024</TableColumn
                >
                <TableColumn variant="head" :row-span="2" align="center"
                  >Total</TableColumn
                >
              </TableRow>
              <TableRow>
                <TableColumn variant="head" align="center">Jan</TableColumn>
                <TableColumn variant="head" align="center">Feb</TableColumn>
                <TableColumn variant="head" align="center">Mar</TableColumn>
                <TableColumn variant="head" align="center">Apr</TableColumn>
                <TableColumn variant="head" align="center">May</TableColumn>
                <TableColumn variant="head" align="center">Jun</TableColumn>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                v-for="product in salesData"
                :key="product.name"
                variant="hover"
              >
                <TableColumn>
                  <span class="font-semibold">{{ product.name }}</span>
                </TableColumn>
                <TableColumn align="center">${{ product.jan }}K</TableColumn>
                <TableColumn align="center">${{ product.feb }}K</TableColumn>
                <TableColumn align="center">${{ product.mar }}K</TableColumn>
                <TableColumn align="center">${{ product.apr }}K</TableColumn>
                <TableColumn align="center">${{ product.may }}K</TableColumn>
                <TableColumn align="center">${{ product.jun }}K</TableColumn>
                <TableColumn align="center">
                  <span class="font-bold text-green-600 dark:text-green-400">
                    ${{ product.total }}K
                  </span>
                </TableColumn>
              </TableRow>
            </TableBody>
          </FooTable>
        </div>

        <!-- CompactTable Example -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200">
            🚀 Advanced Table with Pagination
          </h3>
          <CompactTable
            :columns="compactColumns"
            :data="compactData"
            :pagination="paginationOptions"
            :loading="isLoading"
            aria-label="Advanced user management table"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import FooTable from "./FooTable.vue";
import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";
import TableRow from "./TableRow.vue";
import TableColumn from "./TableColumn.vue";
import TableSorter from "./TableSorter.vue";
import CompactTable from "./CompactTable.vue";

// Sample data
const employees = ref([
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Developer",
    email: "sarah.johnson@company.com",
    department: "Engineering",
    status: "Active",
    salary: "$95,000",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Product Manager",
    email: "michael.chen@company.com",
    department: "Product",
    status: "Active",
    salary: "$110,000",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "UX Designer",
    email: "emily.rodriguez@company.com",
    department: "Design",
    status: "Active",
    salary: "$85,000",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Data Scientist",
    email: "david.kim@company.com",
    department: "Analytics",
    status: "Inactive",
    salary: "$120,000",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Marketing Lead",
    email: "lisa.thompson@company.com",
    department: "Marketing",
    status: "Active",
    salary: "$90,000",
  },
]);

const salesData = ref([
  {
    name: "Product Alpha",
    jan: 120,
    feb: 135,
    mar: 150,
    apr: 165,
    may: 180,
    jun: 195,
    total: 945,
  },
  {
    name: "Product Beta",
    jan: 80,
    feb: 95,
    mar: 110,
    apr: 125,
    may: 140,
    jun: 155,
    total: 705,
  },
  {
    name: "Product Gamma",
    jan: 200,
    feb: 220,
    mar: 240,
    apr: 260,
    may: 280,
    jun: 300,
    total: 1500,
  },
  {
    name: "Product Delta",
    jan: 60,
    feb: 75,
    mar: 90,
    apr: 105,
    may: 120,
    jun: 135,
    total: 585,
  },
]);

// CompactTable data
const compactColumns = ref([
  { id: "name", label: "User Name", sortable: true, ordering: 1 },
  { id: "role", label: "Role", sortable: true, ordering: 2 },
  { id: "lastLogin", label: "Last Login", sortable: true, ordering: 3 },
  { id: "status", label: "Status", sortable: false, ordering: 4 },
]);

const compactData = ref([
  {
    name: "Alice Wilson",
    role: "Administrator",
    lastLogin: "2024-01-15",
    status: "Online",
  },
  {
    name: "Bob Smith",
    role: "Editor",
    lastLogin: "2024-01-14",
    status: "Away",
  },
  {
    name: "Carol Davis",
    role: "Viewer",
    lastLogin: "2024-01-13",
    status: "Offline",
  },
  {
    name: "David Brown",
    role: "Moderator",
    lastLogin: "2024-01-12",
    status: "Online",
  },
  {
    name: "Eva Garcia",
    role: "Contributor",
    lastLogin: "2024-01-11",
    status: "Away",
  },
]);

const paginationOptions = ref({
  count: compactData.value.length,
  perPage: 3,
  currentPage: 1,
  page: 1,
  serverSide: false,
});

// Features list
const features = ref([
  {
    icon: "🎨",
    title: "Beautiful Themes",
    description:
      "Multiple professionally designed themes including glassmorphism, vibrant colors, and modern aesthetics.",
  },
  {
    icon: "♿",
    title: "Accessibility First",
    description:
      "Full ARIA support, keyboard navigation, and screen reader compatibility built into every theme.",
  },
  {
    icon: "🔧",
    title: "Easy Customization",
    description:
      "Centralized styling system allows for easy theme switching and custom style creation.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "All themes are fully responsive and work beautifully on desktop, tablet, and mobile devices.",
  },
  {
    icon: "⚡",
    title: "Performance Optimized",
    description:
      "Lightweight CSS with smooth transitions and animations that don't compromise performance.",
  },
  {
    icon: "🌙",
    title: "Dark Mode Support",
    description:
      "Every theme includes comprehensive dark mode support with automatic color adaptation.",
  },
]);

// Sorting functionality
const sortDirection = ref<"asc" | "desc">("asc");
const isLoading = ref(false);

const sortedEmployees = computed(() => {
  if (!sortDirection.value) return employees.value;

  return [...employees.value].sort((a, b) => {
    if (sortDirection.value === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
});

const handleSort = () => {
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};

// Simulate loading for demo
onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
