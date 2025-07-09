import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/components/index.ts"), // or .js
			name: "Footable",
			fileName: (format) => `footable.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"], // don’t bundle vue itself
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
})
