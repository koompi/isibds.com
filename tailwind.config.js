/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["ABC Ginto", "sans-serif"],
				sans: ["ABC Ginto", "sans-serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#1B2D4F",
					light: "#243B63",
					dark: "#0F1B30",
				},
				accent: {
					DEFAULT: "#D4622B",
					light: "#E87840",
					dark: "#B54E1E",
				},
				steel: {
					DEFAULT: "#64748B",
					light: "#94A3B8",
					dark: "#475569",
				},
				surface: {
					DEFAULT: "#F1F5F9",
					light: "#F8FAFC",
				},
			},
		},
	},
	plugins: [],
};
