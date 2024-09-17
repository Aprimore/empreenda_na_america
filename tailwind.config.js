// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./src/**/*.{html,js,svelte,ts}'],
// 	theme: {
// 		// extend: {
// 		//   fontFamily: {
// 		//     Lora: ['Lora', 'serif'],
// 		//     Inter: ['Inter', 'sans-serif'],
// 		//   },
// 		// },
// 	},
// 	plugins: [require('@tailwindcss/typography')]
// };

module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,postcss}'],
	theme: {
		// extend: {}
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif'],
				lora: ['Lora Variable', 'serif']
			},
			fontWeight: {
				regular: 400,
				semibold: 600,
				bold: 700
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	safelist: [
		// Add any classes that are dynamically created and might be missed by the purge process
	]
};
