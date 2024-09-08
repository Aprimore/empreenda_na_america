<!-- TESTIMONIALS -->
<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { cassia_a_webp, dr_sten_webp, maria_d_webp } from '$lib';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full max-sm:p-2 background-img4 text-balance py-10"
	data-sveltekit-preload-data="viewport"
>
	<!-- <section
	class="w-full max-sm:p-2 bg-[#fff] text-balance py-10"
	data-sveltekit-preload-data="viewport"
> -->

	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<h2 class="Inter-Bold text-3xl md:text-4xl text-center my-6">
			{$t('home.S7_T')}
		</h2>
		<p class="Inter text-md sm:text-xl my-6 text-center px-3">
			{$t('home.S7_D')}
		</p>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-5 px-1 max-sm:px-2">
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src={dr_sten_webp}
					loading="lazy"
					alt="testimonial"
					class="size-32 rounded-full object-cover aspect-[4/3]"
				/>

				<p class="Lora text-xl md:text-2xl text-center font-semibold mb-1">
					{$t('home.TEST_DrSten_name')}
				</p>
				<p class="Lora text-md md:text-lg text-center w-full">
					{$t('home.TEST_DrSten')}
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src={cassia_a_webp}
					loading="lazy"
					alt="testimonial"
					class="size-32 rounded-full object-cover aspect-[4/3]"
				/>

				<p class="Lora text-xl md:text-2xl text-center font-semibold mb-1">
					{$t('home.TEST_Cassia_name')}
				</p>
				<p class="Lora text-md md:text-lg text-center w-full">
					{$t('home.TEST_Cassia')}
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src={maria_d_webp}
					loading="lazy"
					alt="testimonial"
					class="size-32 rounded-full object-cover aspect-[4/3]"
				/>

				<p class="Lora text-xl md:text-2xl text-center font-semibold mb-1">
					{$t('home.TEST_Maria_name')}
				</p>
				<p class="Lora text-md md:text-lg text-center w-full">
					{$t('home.TEST_Maria')}
					<!-- {$t('home.S2_T')} -->
				</p>
			</div>
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
</style>
