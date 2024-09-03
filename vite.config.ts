// import { enhancedImages } from '@sveltejs/enhanced-img';
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
});
