<template>
  <div
    class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
  >
    <nav
      class="flex items-center flex-column flex-wrap md:flex-row justify-between"
      aria-label="Table navigation"
    >
      <div
        class="flex flex-column md:flex-row justify-between align-middle items-center gap-4"
      >
        <span
          class="text-xs font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
        >
          Showing
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ rangeStart }}-{{ rangeEnd }}
          </span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ count }}
          </span>
        </span>
        <span
          class="text-xs font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
        >
          Rows per Page
          <select
            :value="perPage"
            class="mx-1 text-xs px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @change="handleRowsPerPageChange"
          >
            <option
              v-for="row in rowsPerPage"
              :key="typeof row === 'number' ? row : row.value"
              :value="typeof row === 'number' ? row : row.value"
            >
              {{ typeof row === "number" ? row : row.label }}
            </option>
          </select>
        </span>
      </div>
      <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a
            href="#"
            @click.prevent="handleFirstPage"
            :class="[
              'flex text-xs items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              currentPage === 1
                ? 'cursor-not-allowed pointer-events-none opacity-50'
                : '',
            ]"
          >
            <!-- Double left arrow SVG -->
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="handlePrevPage"
            :class="[
              'flex text-xs items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              currentPage === 1
                ? 'cursor-not-allowed pointer-events-none opacity-50'
                : '',
            ]"
          >
            <!-- Left arrow SVG -->
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li v-for="item in items" :key="item.number">
          <a
            href="#"
            @click.prevent="() => handlePageChange(item.number)"
            :class="[
              'flex text-xs items-center justify-center px-3 h-8 leading-tight border border-gray-300 dark:border-gray-700',
              item.isCurrent
                ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
            ]"
          >
            {{ item.number }}
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="handleNextPage"
            :class="[
              'flex text-xs items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              currentPage === totalPages || totalPages <= 0
                ? 'cursor-not-allowed pointer-events-none opacity-50'
                : '',
            ]"
          >
            <!-- Right arrow SVG -->
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="handleLastPage"
            :class="[
              'flex text-xs items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              currentPage === totalPages || totalPages <= 0
                ? 'cursor-not-allowed pointer-events-none opacity-50'
                : '',
            ]"
          >
            <!-- Double right arrow SVG -->
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0zm-6 0a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface RowsPerPageOptionsInterface {
  value: string | number;
  label: string | number;
}

export interface PaginationInterface {
  count: number;
  page: number;
  perPage: number;
  rowsPerPageOptions?: RowsPerPageOptionsInterface[];
  serverSide?: boolean;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
}

const DefaultPerPage = [3, 5, 10];

const props = defineProps<PaginationInterface>();

const totalPages = computed(() => Math.ceil(props.count / props.perPage));
const currentPage = computed(() => props.page);

const items = computed(() => {
  let startPage = Math.max(currentPage.value - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages.value);

  if (endPage === totalPages.value) {
    startPage = Math.max(endPage - 2, 1);
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => ({
    number: startPage + index,
    isCurrent: startPage + index === currentPage.value,
  }));
});

const rowsPerPage = computed(() => props.rowsPerPageOptions ?? DefaultPerPage);
const rangeStart = computed(() =>
  Math.min((currentPage.value - 1) * props.perPage + 1, props.count),
);
const rangeEnd = computed(() =>
  Math.min(currentPage.value * props.perPage, props.count),
);

const handleFirstPage = () => {
  if (currentPage.value > 1 && props.onPageChange) {
    props.onPageChange(1);
  }
};

const handlePrevPage = () => {
  if (currentPage.value > 1 && props.onPageChange) {
    props.onPageChange(currentPage.value - 1);
  }
};

const handleNextPage = () => {
  if (currentPage.value < totalPages.value && props.onPageChange) {
    props.onPageChange(currentPage.value + 1);
  }
};

const handleLastPage = () => {
  if (currentPage.value < totalPages.value && props.onPageChange) {
    props.onPageChange(totalPages.value);
  }
};

const handlePageChange = (page: number) => {
  if (props.onPageChange) {
    props.onPageChange(page);
  }
};

const handleRowsPerPageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  if (props.onRowsPerPageChange) {
    props.onRowsPerPageChange(parseInt(target.value));
  }
};
</script>
