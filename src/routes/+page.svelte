<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import headerhero_webp from '$lib/assets/images/headerhero.webp?enhanced';
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section class="w-full max-sm:p-2 bg-[#dfdad6] text-balance">
	<div class="lg:max-w-screen-2xl mx-auto max-sm:p-0">
		<div class="lg:p-10 sm:p-5 flex max-md:flex-col items-center">
			<div class="md:max-w-[45%] m-auto border-black align-middle">
				<h1 class="font-extrabold text-4xl md:text-5xl xl:text-7xl uppercase">
					Entrepreneur in America: Your Complete Map to Success in the USA
				</h1>
				<h2 class="font-bold text-xl lg:text-2xl lg:mt-10 md:mt-5 mt-3">
					Discover exclusive strategies for business, investment, and financial education to grow in
					the United States.
				</h2>
			</div>
			<div class="relative w-full">
				<enhanced:img
					style="width:100%; height:100%; object-fit:cover"
					src={headerhero_webp}
					alt="landing page header"
					loading="eager"
					sizes="(min-width:1080px) 744px, (min-width:768px) 640px, 400px"
				/>
			</div>
			<!-- Placeholder for the image to prevent layout shift -->
			<!-- The aspect ratio is maintained using padding-bottom (100% for a square) -->
			<!-- <div class="relative w-full" style="padding-bottom: 100%;">
				<enhanced:img
					class="absolute top-0 left-0 w-full h-full object-cover"
					src={headerhero_webp}
					alt="landing page header"
					loading="eager"
					sizes="(min-width:1080px) 744px, (min-width:768px) 640px, 400px"
				/>
			</div> -->
		</div>
	</div>
</section>

<style>
	* {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}
</style>
