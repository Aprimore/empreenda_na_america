// module.exports = {
// 	content: ['./src/**/*.{html,js,ts,svelte,postcss,css}'],
// 	theme: {
// 		// extend: {}
// 		extend: {
// 			fontFamily: {
// 				inter: ['Inter Variable', 'sans-serif'],
// 				lora: ['Lora Variable', 'serif']
// 			},
// 			fontWeight: {
// 				regular: 400,
// 				semibold: 600,
// 				bold: 700
// 			}
// 		}
// 	},
// 	plugins: [require('@tailwindcss/typography')]
// };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
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
	plugins: [require('@tailwindcss/typography')]
};
