/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				titles: ["'Exo 2'", "sans-serif"],
				info: ["'Baloo 2'", "cursive"],
			},
		},
	},
	plugins: [],
};
