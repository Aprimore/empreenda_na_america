<!-- TESTIMONIALS -->
<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { cassia_a_webp, dr_sten_webp, maria_d_webp, quote_png } from '$lib';
	// import quote_svg from './298854_quote_icon.svg';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full max-sm:p-2 background-img4 text-pretty sm:text-balance py-10"
	data-sveltekit-preload-data="viewport"
>
	<!-- <section
	class="w-full max-sm:p-2 bg-[#fff] text-balance py-10"
	data-sveltekit-preload-data="viewport"
> -->

	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<h2 class="Inter-Bold text-3xl md:text-4xl text-center my-6 text-gray-900">
			{$t('home.S7_T')}
		</h2>
		<p class="Inter text-md sm:text-xl my-6 sm:text-center px-3 text-gray-800">
			{$t('home.S7_D')}
		</p>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-5 px-1 max-sm:px-2">
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 relative">
				<!-- Replace with actual SVG -->
				<div class="flex justify-center items-end w-full">
					<img src={quote_png} width="48" height="48" class="absolute left-0" alt="quote" />
					<div class="flex justify-center items-center flex-col">
						<img
							src={dr_sten_webp}
							loading="lazy"
							alt="testimonial"
							class="size-24 rounded-full object-cover aspect-[4/3]"
							width="96"
							height="96"
						/>
						<p class="Lora text-lg md:text-xl text-center font-semibold mb-1 text-gray-800">
							{$t('home.TEST_DrSten_name')}
						</p>
					</div>
				</div>

				<p class="Lora text-base sm:text-center w-full text-gray-600 italic">
					{$t('home.TEST_DrSten')}
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 relative">
				<!-- Replace with actual SVG -->

				<div class="flex justify-center items-end w-full">
					<img src={quote_png} width="48" height="48" class="absolute left-0" alt="quote" />
					<div class="flex justify-center items-center flex-col">
						<img
							src={cassia_a_webp}
							loading="lazy"
							alt="testimonial"
							class="size-24 rounded-full object-cover aspect-[4/3]"
							width="96"
							height="96"
						/>
						<p class="Lora text-lg md:text-xl text-center font-semibold mb-1 text-gray-800">
							{$t('home.TEST_Cassia_name')}
						</p>
					</div>
				</div>
				<p class="Lora text-base sm:text-center w-full text-gray-600 italic">
					{$t('home.TEST_Cassia')}
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 relative">
				<!-- Replace with actual SVG -->

				<div class="flex justify-center items-end w-full">
					<img src={quote_png} width="48" height="48" class="absolute left-0" alt="quote" />
					<div class="flex justify-center items-center flex-col">
						<img
							src={maria_d_webp}
							loading="lazy"
							alt="testimonial"
							class="size-24 rounded-full object-cover aspect-[4/3]"
							width="96"
							height="96"
						/>

						<p class="Lora text-lg md:text-xl text-center font-semibold mb-1 text-gray-800">
							{$t('home.TEST_Maria_name')}
						</p>
					</div>
				</div>
				<p class="Lora text-base sm:text-center w-full text-gray-600 italic">
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
		/* background-image: url('$lib/assets/svg/patterns/brushed-alum-dark.png');
		 */
		background-image: url('$lib/assets/svg/patterns/brushed-alum-dark2.webp');
	}
</style>
