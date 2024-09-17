import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		// imagetools(),
		enhancedImages(),
		sveltekit()
	],
	build: {
		cssCodeSplit: true
		// rollupOptions: {
		// 	output: {
		// 		manualChunks: (id) => {
		// 			if (id.includes('node_modules')) {
		// 				if (id.includes('@inlang/paraglide')) {
		// 					return 'vendor-paraglide';
		// 				}
		// 				return 'vendor';
		// 			}
		// 		}
		// 	}
		// }
	},
	optimizeDeps: {
		include: ['swiper', 'sveltekit-i18n', '@boxfish-studio/sveltekit-cookie-manager']
	}
});
