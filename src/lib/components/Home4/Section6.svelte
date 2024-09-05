<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
	import Youtube from 'svelte-youtube-embed';
</script>

<section
	class="w-full max-sm:p-2 bg-[#fff] text-balance py-10"
	data-sveltekit-preload-data="viewport"
>
	<div class="lg:max-w-screen-2xl mx-auto max-sm:p-2">
		<div class="lg:p-10 p-1 flex max-md:flex-col">
			<div class="md:w-1/2 m-auto border-black align-middle">
				<h2 class="text-3xl md:text-4xl lg:text-5xl my-6 text-center">{$t('S6_T')}</h2>
				<p class="text-2xl max-sm:text-xl my-6 text-center">
					{$t('S5_D')}
				</p>
			</div>
			<!-- <div class="md:max-w-[50%] max-sm:mt-6 h-full">
				<img
					class="w-full"
					src="https://static-media.hotmart.com/OUwI4MVN3pxQE1sZcPInPF3Mr4Y=/filters:quality(100)/klickart-prod/uploads/media/file/8270597/bonus_(3).png"
					alt=""
				/>
			</div> -->

			<div class="md:w-1/2 aspect-video px-2">
				<Youtube id="zuAFIMEaS-o" />
				<!-- <iframe
					data-sveltekit-preload-data="viewport"
					loading="lazy"
					class="aspect-[16/9] w-full h-auto rounded-lg"
					src="https://www.youtube.com/embed/zuAFIMEaS-o"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe> -->
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

	p {
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
