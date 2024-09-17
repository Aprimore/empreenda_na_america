import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		// imagetools(),
		enhancedImages(),
		sveltekit()
	]
	// build: {
	// cssCodeSplit: true
	// },
	// optimizeDeps: {
	// include: ['swiper', 'sveltekit-i18n', '@boxfish-studio/sveltekit-cookie-manager']
	// }
});
