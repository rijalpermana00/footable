# FooTable Components

This is a Vue 3 conversion of the React table components with enhanced accessibility, centralized styling system, and full support for `colspan` and `rowspan` attributes. **SonarQube compliant** - resolves Web:S5256 warning about missing table headers.

## 🚀 Key Features

- ✅ **SonarQube Compliant**: Resolves Web:S5256 warning with proper `<th>` headers
- ✅ **Accessibility First**: Full ARIA support, keyboard navigation, screen reader friendly
- ✅ **Centralized Styling**: Configurable theme system with TypeScript support
- ✅ **Colspan/Rowspan**: Full support for complex table layouts
- ✅ **Vue 3 + TypeScript**: Modern composition API with type safety
- ✅ **Responsive Design**: Mobile-friendly with Tailwind CSS

## Components

### Basic Components

- `FooTable.vue` - Main table wrapper with accessibility features
- `TableHead.vue` - Semantic table header with proper roles
- `TableBody.vue` - Table body wrapper
- `TableRow.vue` - Table row with variant support
- `TableColumn.vue` - Table cell (th/td) with colspan/rowspan and accessibility
- `TableSorter.vue` - Sort indicator with ARIA labels
- `TableDataRow.vue` - Special row for loading/empty states

### Advanced Components

- `CompactTable.vue` - Complete table with sorting and pagination
- `TablePagination.vue` - Accessible pagination component
- `useTable.ts` - Composition API hook for table state management

### Styling System

- `tableStyles.ts` - Centralized styling configuration
- `useTableStyles.ts` - Composable for reactive styling

## 🎨 Styling System

### Quick Start with Default Styling

```vue
<template>
	<FooTable>
		<TableHead>
			<TableRow>
				<TableColumn variant="head">Name</TableColumn>
				<TableColumn variant="head">Email</TableColumn>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow v-for="user in users" :key="user.id" variant="hover">
				<TableColumn>{{ user.name }}</TableColumn>
				<TableColumn>{{ user.email }}</TableColumn>
			</TableRow>
		</TableBody>
	</FooTable>
</template>

<script setup>
import {
	FooTable,
	TableHead,
	TableBody,
	TableRow,
	TableColumn,
} from "./FooTable"
</script>
```

### Custom Styling Configuration

```vue
<template>
	<div>
		<!-- Your tables will use the custom theme -->
		<FooTable>
			<!-- table content -->
		</FooTable>
	</div>
</template>

<script setup>
import { provideTableStyles } from "./VueTable/useTableStyles"
import { modernTableStyles } from "./VueTable/tableStyles"

// Provide custom styling for all child table components
provideTableStyles(modernTableStyles)
</script>
```

### Available Themes

```typescript
import {
	defaultTableStyles, // Standard gray theme
	modernTableStyles, // Slate-based modern theme
	compactTableStyles, // Compact spacing theme
} from "./VueTable/tableStyles"
```

### Creating Custom Themes

```typescript
import { createTableStyles } from "./VueTable/tableStyles"

const myCustomTheme = createTableStyles({
	table: {
		base: "w-full text-sm border-2 border-blue-500",
	},
	head: {
		base: "bg-blue-100 text-blue-900 font-bold",
	},
	row: {
		hover: "hover:bg-blue-50 transition-colors",
	},
})
```

## 🔧 SonarQube Compliance

### Problem Resolved

The SonarQube warning **"Add `<th>` headers to this `<Footable>`"** (Web:S5256) is now resolved.

### What We Fixed

- ✅ All tables have proper `<thead>` sections with `<th>` elements
- ✅ Header cells use `role="columnheader"` and `scope="col"`
- ✅ Tables have `role="table"` and descriptive `aria-label`
- ✅ Sortable headers include `aria-sort` and `tabindex` attributes
- ✅ All table sections have appropriate ARIA roles

### Before (SonarQube Warning)

```html
<Footable>
	<tbody>
		<tr>
			<td>Name</td>
			<!-- ❌ Should be <th> -->
			<td>Email</td>
		</tr>
	</tbody>
</Footable>
```

### After (SonarQube Compliant)

```html
<table role="table" aria-label="Data table">
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" scope="col">Name</th>
      <!-- ✅ Proper header -->
      <th role="columnheader" scope="col">Email</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <!-- data rows -->
  </tbody>
</Footable>
```

## 📋 Usage Examples

### Basic Table with Accessibility

```vue
<template>
  <Table aria-label="Employee information">
    <TableHead>
      <TableRow>
        <TableColumn variant="head" id="name">Name</TableColumn>
        <TableColumn variant="head" id="email">Email</TableColumn>
        <TableColumn variant="head" id="dept">Department</TableColumn>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow v-for="emp in employees" :key="emp.id" variant="hover">
        <TableColumn>{{ emp.name }}</TableColumn>
        <TableColumn>{{ emp.email }}</TableColumn>
        <TableColumn>{{ emp.department }}</TableColumn>
      </TableRow>
    </TableBody>
  </FooTable>
</template>
```

### Table with Colspan

```vue
<template>
	<FooTable>
		<TableHead>
			<TableRow>
				<TableColumn variant="head">Name</TableColumn>
				<TableColumn variant="head" :col-span="2"
					>Contact Information</TableColumn
				>
			</TableRow>
			<TableRow>
				<TableColumn variant="head">Full Name</TableColumn>
				<TableColumn variant="head">Email</TableColumn>
				<TableColumn variant="head">Phone</TableColumn>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow variant="hover">
				<TableColumn>John Doe</TableColumn>
				<TableColumn>john@example.com</TableColumn>
				<TableColumn>555-0123</TableColumn>
			</TableRow>
		</TableBody>
	</FooTable>
</template>
```

### Table with Rowspan

```vue
<template>
	<FooTable>
		<TableHead>
			<TableRow>
				<TableColumn variant="head">Department</TableColumn>
				<TableColumn variant="head">Employee</TableColumn>
				<TableColumn variant="head">Position</TableColumn>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow variant="hover">
				<TableColumn :row-span="3">Engineering</TableColumn>
				<TableColumn>John Doe</TableColumn>
				<TableColumn>Senior Developer</TableColumn>
			</TableRow>
			<TableRow variant="hover">
				<TableColumn>Jane Smith</TableColumn>
				<TableColumn>Frontend Developer</TableColumn>
			</TableRow>
			<TableRow variant="hover">
				<TableColumn>Bob Johnson</TableColumn>
				<TableColumn>DevOps Engineer</TableColumn>
			</TableRow>
		</TableBody>
	</FooTable>
</template>
```

### Sortable CompactTable

```vue
<template>
	<CompactTable
		:columns="columns"
		:data="data"
		:pagination="paginationOptions"
		:loading="loading"
		aria-label="User management table"
	/>
</template>

<script setup>
import { CompactTable } from "./VueTable"

const columns = [
	{ id: "name", label: "Name", sortable: true, ordering: 1 },
	{ id: "email", label: "Email", sortable: true, ordering: 2, align: "left" },
	{
		id: "role",
		label: "Role",
		sortable: false,
		ordering: 3,
		align: "center",
	},
]

const data = [
	{ name: "John Doe", email: "john@example.com", role: "Admin" },
	{ name: "Jane Smith", email: "jane@example.com", role: "User" },
]
</script>
```

## 🎛️ Component Props

### TableColumn Props

- `variant?: "head" | "body" | "footer"` - Determines if it renders as `th` or `td`
- `id?: string` - Unique identifier for the column
- `align?: "left" | "right" | "center"` - Text alignment
- `className?: string` - Additional CSS classes
- `colSpan?: number` - Number of columns to span horizontally
- `rowSpan?: number` - Number of rows to span vertically
- `sort?: (id: string) => void` - Sort function for clickable headers
- `sortDirection?: 'asc' | 'desc' | null` - Current sort direction for ARIA

### TableRow Props

- `className?: string` - Additional CSS classes
- `variant?: 'base' | 'hover' | 'striped'` - Row styling variant

### Table Props

- `ariaLabel?: string` - Accessible label for the table
- `ariaDescribedBy?: string` - ID of element describing the table

### CompactTable Column Interface

```typescript
interface ColumnInterface {
	label: string
	id: string
	sortable?: boolean
	ordering?: number
	colSpan?: number
	rowSpan?: number
	align?: AlignmentType
}
```

## 🚀 Installation

1. Copy the VueTable directory to your Vue project
2. Import the components you need
3. Ensure Tailwind CSS is configured in your project
4. Optionally configure custom styling themes

## 📦 What's Included

```
VueTable/
├── Table.vue                 # Main table component
├── TableHead.vue            # Table header
├── TableBody.vue            # Table body
├── TableRow.vue             # Table row
├── TableColumn.vue          # Table cell with accessibility
├── TableSorter.vue          # Sort indicator
├── TableDataRow.vue         # Loading/empty states
├── TablePagination.vue      # Pagination component
├── CompactTable.vue         # Complete table solution
├── useTable.ts              # Table state management
├── tableStyles.ts           # Styling configuration
├── useTableStyles.ts        # Styling composable
├── index.ts                 # Export file
├── README.md                # This file
├── TableExample.vue         # Usage examples
└── StyleTest.vue            # Styling system test
```

## 🔄 Migration from Previous Version

If you're upgrading from the previous version:

1. **Styling**: Replace hardcoded classes with the new styling system
2. **Accessibility**: Add `aria-label` props to your tables
3. **Headers**: Ensure you're using `TableColumn` with `variant="head"` in `TableHead`
4. **Sorting**: Pass `sortDirection` prop for proper ARIA attributes

## 🌟 Key Improvements

1. **SonarQube Compliance**: No more Web:S5256 warnings
2. **Better Accessibility**: Screen reader friendly with proper ARIA
3. **Centralized Styling**: Easy theming and customization
4. **Type Safety**: Full TypeScript support
5. **Performance**: Optimized with Vue 3 Composition API
6. **Maintainability**: Clean, modular architecture

## 🤝 Contributing

The components follow Vue 3 best practices and accessibility guidelines. When contributing:

- Maintain ARIA compliance
- Use the centralized styling system
- Include TypeScript types
- Test with screen readers
- Ensure SonarQube compliance
