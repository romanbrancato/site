import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"fade-in": 'fade-in .5s ease-in-out',
				"fade-in-down": 'fade-in-down .5s ease-in-out',
			},
			keyframes: {
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"fade-in-down": {
					from: {
						opacity: "0",
						transform: 'translate3d(0, -50px, 0)'
					},
					to: {
						opacity: "1",
						transform: 'translate3d(0, 0, 0)'
					}
				},
			},
			transitionDelay: {
				"400": "400ms"
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				accent: "var(--accent-color)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
