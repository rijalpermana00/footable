// Vue Table Components - Centralized Styling Configuration
// This file contains all styling classes used by the table components
// Modify these values to customize the appearance of your tables

export interface TableStyleConfig {
	// Base table styles
	table: {
		base: string
		responsive: string
	}

	// Table head styles
	head: {
		base: string
		cell: string
	}

	// Table body styles
	body: {
		base: string
	}

	// Table row styles
	row: {
		base: string
		hover: string
		striped: string
	}

	// Table cell/column styles
	cell: {
		base: string
		head: string
		body: string
		padding: string
		alignment: {
			left: string
			center: string
			right: string
		}
	}

	// Sorting styles
	sort: {
		icon: string
		container: string
	}

	// Pagination styles
	pagination: {
		container: string
		nav: string
		info: string
		select: string
		list: string
		button: {
			base: string
			active: string
			disabled: string
			first: string
			last: string
		}
	}

	// Loading and empty states
	states: {
		loading: string
		empty: string
		dataRow: string
	}
}

// Default styling configuration using Tailwind CSS
export const defaultTableStyles: TableStyleConfig = {
	table: {
		base: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
		responsive: "relative overflow-x-auto sm:rounded-lg",
	},

	head: {
		base: "px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800",
		cell: "px-6 py-3",
	},

	body: {
		base: "",
	},

	row: {
		base: "p-4",
		hover: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600",
		striped:
			"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800",
	},

	cell: {
		base: "",
		head: "flex items-center justify-between",
		body: "px-6 py-3",
		padding: "px-6 py-3",
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
	},

	sort: {
		icon: "w-3 h-3",
		container: "flex items-center justify-between",
	},

	pagination: {
		container:
			"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800",
		nav: "flex items-center flex-column flex-wrap md:flex-row justify-between",
		info: "text-xs font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto",
		select: "mx-1 text-xs px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
		list: "inline-flex -space-x-px rtl:space-x-reverse text-sm h-8",
		button: {
			base: "flex text-xs items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
			active: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white",
			disabled: "cursor-not-allowed pointer-events-none opacity-50",
			first: "ms-0 rounded-s-lg",
			last: "rounded-e-lg",
		},
	},

	states: {
		loading: "px-6 py-3 text-center align-middle",
		empty: "px-6 py-3 text-center align-middle",
		dataRow:
			"p-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600",
	},
}

// Beautiful Modern Theme - Inspired by contemporary design systems
export const beautifulTableStyles: TableStyleConfig = {
	table: {
		base: "w-full text-sm text-slate-700 dark:text-slate-200 font-medium",
		responsive:
			"relative overflow-hidden rounded-xl shadow-lg border border-slate-200/60 dark:border-slate-700/60 bg-white dark:bg-slate-900",
	},

	head: {
		base: "bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-b border-slate-200/80 dark:border-slate-600/80",
		cell: "px-6 py-4 text-xs font-bold tracking-wider text-slate-600 dark:text-slate-300 uppercase",
	},

	body: {
		base: "divide-y divide-slate-100 dark:divide-slate-700/50",
	},

	row: {
		base: "",
		hover: "bg-white dark:bg-slate-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 dark:hover:from-slate-800/50 dark:hover:to-slate-700/30 transition-all duration-200 ease-in-out",
		striped:
			"odd:bg-white even:bg-slate-50/50 odd:dark:bg-slate-900 even:dark:bg-slate-800/30",
	},

	cell: {
		base: "",
		head: "flex items-center justify-between group",
		body: "px-6 py-4 whitespace-nowrap",
		padding: "px-6 py-4",
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
	},

	sort: {
		icon: "w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-150",
		container:
			"flex items-center justify-between cursor-pointer select-none group hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-150",
	},

	pagination: {
		container:
			"px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-t border-slate-200/80 dark:border-slate-600/80",
		nav: "flex items-center justify-between",
		info: "text-sm font-medium text-slate-600 dark:text-slate-300",
		select: "mx-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-all duration-150",
		list: "inline-flex items-center space-x-1",
		button: {
			base: "flex items-center justify-center px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-200 transition-all duration-150",
			active: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-md",
			disabled: "cursor-not-allowed opacity-50 pointer-events-none",
			first: "rounded-l-lg",
			last: "rounded-r-lg",
		},
	},

	states: {
		loading: "px-6 py-8 text-center text-slate-500 dark:text-slate-400",
		empty: "px-6 py-8 text-center text-slate-500 dark:text-slate-400",
		dataRow:
			"bg-white dark:bg-slate-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 dark:hover:from-slate-800/50 dark:hover:to-slate-700/30 transition-all duration-200",
	},
}

// Elegant Glass Theme - Modern glassmorphism design
export const elegantGlassTableStyles: TableStyleConfig = {
	table: {
		base: "w-full text-sm text-slate-800 dark:text-slate-100 font-medium backdrop-blur-sm",
		responsive:
			"relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl",
	},

	head: {
		base: "bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-600/50",
		cell: "px-6 py-5 text-xs font-bold tracking-widest text-slate-700 dark:text-slate-200 uppercase",
	},

	body: {
		base: "divide-y divide-slate-200/30 dark:divide-slate-700/30",
	},

	row: {
		base: "",
		hover: "bg-white/40 dark:bg-slate-900/40 hover:bg-gradient-to-r hover:from-violet-50/60 hover:to-purple-50/40 dark:hover:from-slate-800/60 dark:hover:to-slate-700/40 transition-all duration-300 ease-out backdrop-blur-sm",
		striped:
			"odd:bg-white/30 even:bg-slate-50/30 odd:dark:bg-slate-900/30 even:dark:bg-slate-800/20",
	},

	cell: {
		base: "",
		head: "flex items-center justify-between group",
		body: "px-6 py-5 whitespace-nowrap",
		padding: "px-6 py-5",
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
	},

	sort: {
		icon: "w-4 h-4 text-slate-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-all duration-200",
		container:
			"flex items-center justify-between cursor-pointer select-none group hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200",
	},

	pagination: {
		container:
			"px-6 py-5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-600/50",
		nav: "flex items-center justify-between",
		info: "text-sm font-semibold text-slate-700 dark:text-slate-200",
		select: "mx-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white/70 border border-slate-300/50 rounded-xl shadow-lg hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-slate-800/70 dark:border-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-700/90 transition-all duration-200 backdrop-blur-sm",
		list: "inline-flex items-center space-x-2",
		button: {
			base: "flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white/70 border border-slate-300/50 hover:bg-white/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-slate-800/70 dark:border-slate-600/50 dark:text-slate-200 dark:hover:bg-slate-700/90 transition-all duration-200 backdrop-blur-sm",
			active: "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 hover:from-violet-700 hover:to-purple-700 shadow-lg dark:from-violet-500 dark:to-purple-500 dark:hover:from-violet-600 dark:hover:to-purple-600",
			disabled: "cursor-not-allowed opacity-40 pointer-events-none",
			first: "rounded-l-xl",
			last: "rounded-r-xl",
		},
	},

	states: {
		loading: "px-6 py-10 text-center text-slate-600 dark:text-slate-300",
		empty: "px-6 py-10 text-center text-slate-600 dark:text-slate-300",
		dataRow:
			"bg-white/40 dark:bg-slate-900/40 hover:bg-gradient-to-r hover:from-violet-50/60 hover:to-purple-50/40 dark:hover:from-slate-800/60 dark:hover:to-slate-700/40 transition-all duration-300 backdrop-blur-sm",
	},
}

// Vibrant Theme - Bold and colorful design
export const vibrantTableStyles: TableStyleConfig = {
	table: {
		base: "w-full text-sm text-gray-800 dark:text-gray-100 font-medium",
		responsive:
			"relative overflow-hidden rounded-2xl shadow-xl border-2 border-gradient-to-r from-blue-500 to-purple-600 bg-white dark:bg-gray-900",
	},

	head: {
		base: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white",
		cell: "px-6 py-4 text-xs font-bold tracking-wider uppercase",
	},

	body: {
		base: "divide-y divide-gray-200 dark:divide-gray-700",
	},

	row: {
		base: "",
		hover: "bg-white dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 transform hover:scale-[1.01]",
		striped:
			"odd:bg-white even:bg-gradient-to-r even:from-blue-50/30 even:to-purple-50/30 odd:dark:bg-gray-900 even:dark:from-gray-800/50 even:dark:to-gray-700/50",
	},

	cell: {
		base: "",
		head: "flex items-center justify-between group",
		body: "px-6 py-4 whitespace-nowrap",
		padding: "px-6 py-4",
		alignment: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
	},

	sort: {
		icon: "w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-150",
		container:
			"flex items-center justify-between cursor-pointer select-none group hover:text-white transition-colors duration-150",
	},

	pagination: {
		container:
			"px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-t border-gray-200 dark:border-gray-600",
		nav: "flex items-center justify-between",
		info: "text-sm font-semibold text-gray-700 dark:text-gray-200",
		select: "mx-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-purple-300 rounded-xl shadow-md hover:border-purple-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-purple-600 dark:text-gray-200 transition-all duration-200",
		list: "inline-flex items-center space-x-1",
		button: {
			base: "flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 hover:border-purple-500 hover:text-purple-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:border-purple-400 dark:hover:text-purple-300 transition-all duration-200",
			active: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform scale-105",
			disabled: "cursor-not-allowed opacity-50 pointer-events-none",
			first: "rounded-l-xl",
			last: "rounded-r-xl",
		},
	},

	states: {
		loading: "px-6 py-8 text-center text-gray-600 dark:text-gray-300",
		empty: "px-6 py-8 text-center text-gray-600 dark:text-gray-300",
		dataRow:
			"bg-white dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200",
	},
}

// Alternative styling themes
export const compactTableStyles: TableStyleConfig = {
	...defaultTableStyles,
	table: {
		base: "w-full text-xs text-left rtl:text-right text-gray-600 dark:text-gray-300",
		responsive: "relative overflow-x-auto rounded",
	},
	head: {
		base: "px-2 py-2 text-xs font-medium tracking-wide text-gray-600 uppercase border-b dark:border-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700",
		cell: "px-3 py-2",
	},
	cell: {
		...defaultTableStyles.cell,
		body: "px-3 py-2",
		padding: "px-3 py-2",
	},
}

export const modernTableStyles: TableStyleConfig = {
	...defaultTableStyles,
	table: {
		base: "w-full text-sm text-left text-slate-700 dark:text-slate-300",
		responsive:
			"relative overflow-x-auto shadow-lg rounded-lg border border-slate-200 dark:border-slate-700",
	},
	head: {
		base: "px-6 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400",
		cell: "px-6 py-4",
	},
	row: {
		base: "",
		hover: "bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",
		striped:
			"odd:bg-white even:bg-slate-50 odd:dark:bg-slate-900 even:dark:bg-slate-800",
	},
}

// Utility function to merge custom styles with default styles
export function createTableStyles(
	customStyles?: Partial<TableStyleConfig>
): TableStyleConfig {
	if (!customStyles) return defaultTableStyles

	return {
		table: { ...defaultTableStyles.table, ...customStyles.table },
		head: { ...defaultTableStyles.head, ...customStyles.head },
		body: { ...defaultTableStyles.body, ...customStyles.body },
		row: { ...defaultTableStyles.row, ...customStyles.row },
		cell: {
			...defaultTableStyles.cell,
			...customStyles.cell,
			alignment: {
				...defaultTableStyles.cell.alignment,
				...customStyles.cell?.alignment,
			},
		},
		sort: { ...defaultTableStyles.sort, ...customStyles.sort },
		pagination: {
			...defaultTableStyles.pagination,
			...customStyles.pagination,
			button: {
				...defaultTableStyles.pagination.button,
				...customStyles.pagination?.button,
			},
		},
		states: { ...defaultTableStyles.states, ...customStyles.states },
	}
}

// Export the default styles for easy importing
export default defaultTableStyles
