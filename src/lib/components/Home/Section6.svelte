<!-- Benefits of Following Our YouTube Channel -->
<script lang="ts">
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import Youtube from 'svelte-youtube-embed';
	let youtubeVisible = false;
	// Defer rendering the Youtube component until the page is mounted
	onMount(() => {
		youtubeVisible = true;
	});
</script>

<section
	class="w-full max-sm:p-2 text-balance py-10 background-img4"
	data-sveltekit-preload-data="viewport"
>
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<div class="p-1 flex max-md:flex-col">
			<div class="md:w-[40%] m-auto border-black align-middle lg:m-10 md:m-5">
				<h2 class="Inter-Bold text-3xl md:text-4xl my-6 text-center">{$t('home.S6_T')}</h2>
				<p class="Lora text-lg max-sm:text-md my-6 text-center">
					{$t('home.S5_D')}
				</p>
			</div>
			<!-- <div class="md:max-w-[50%] max-sm:mt-6 h-full">
				<img
					class="w-full"
					src="https://static-media.hotmart.com/OUwI4MVN3pxQE1sZcPInPF3Mr4Y=/filters:quality(100)/klickart-prod/uploads/media/file/8270597/bonus_(3).png"
					alt=""
				/>
			</div> -->

			{#if youtubeVisible}
				<div class="md:w-1/2 aspect-video px-2 my-auto">
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
			{/if}
		</div>
	</div>
</section>

<style>
	/* * {
		border: black 1px solid;
	} */

	.background-img4 {
		background-image: url('$lib/assets/svg/patterns/brushed-alum-dark.png');
	}

	/* button:hover {
		background-color: #ffffff;
	} */
</style>
