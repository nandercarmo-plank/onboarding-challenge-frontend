import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {

		},
		baseUrl: "http://localhost:4173"
	},
	component: {
		devServer: {
			framework: "react",
			bundler: "vite",
		},
	},
	requestTimeout: 60000,
	responseTimeout: 60000,
	defaultCommandTimeout: 60000,
});
