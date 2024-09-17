export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {}
	}
};

// module.exports = {
// 	plugins: [
// 		require('tailwindcss'),
// 		require('autoprefixer'),
// 		// require('postcss-preset-env')({
// 		// 	stage: 3,
// 		// 	features: {
// 		// 		'nesting-rules': true
// 		// 	}
// 		// }),
// 		process.env.NODE_ENV === 'production' &&
// 			require('cssnano')({
// 				preset: [
// 					'default',
// 					{
// 						discardComments: {
// 							removeAll: true
// 						}
// 					}
// 				]
// 			})
// 	].filter(Boolean)
// };
