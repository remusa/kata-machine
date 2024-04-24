import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			// "@": "/src",
			// "@code": "/src/day1",
			alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
		},
	},
});
