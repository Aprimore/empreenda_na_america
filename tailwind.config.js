/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// extend: {
		//   fontFamily: {
		//     Lora: ['Lora', 'serif'],
		//     Inter: ['Inter', 'sans-serif'],
		//   },
		// },
	},
	plugins: [require('@tailwindcss/typography')]
};
