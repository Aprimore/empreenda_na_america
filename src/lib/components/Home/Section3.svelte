<!-- Learn from the Best: Ebooks, Videos, and More. -->
<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<!-- 1111111111111111111111111111111111111111111111111111111111 -->
<section
	class="w-full max-sm:p-2 bg-gradient-to-b from-emerald-500 to-emerald-600 section-bg4
py-10 px-1 max-sm:px-2 text-emerald-100 sm:bg-center text-pretty"
	data-sveltekit-preload-data="viewport"
>
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<h2 class="Inter-Bold text-3xl md:text-4xl text-center my-6">
			{$t('home.S2_T_Main')}
		</h2>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start py-5 px-2"
			>
				<svg
					class="w-12 h-12 mb-2 flex justify-start items-start align-top"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
				<h3 class="Inter text-2xl text-center font-semibold my-5">
					{$t('home.S2_T1')}
				</h3>
				<p class=" Lora text-md sm:text-lg w-full px-4 md:px-4">{$t('home.S2_D1')}</p>
			</div>
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start py-5 px-2"
			>
				<svg
					class="w-12 h-12 mb-2 flex justify-start items-start align-top"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
				<h3 class="Inter text-2xl text-center font-semibold mb-5">
					{$t('home.S2_T2')}
				</h3>
				<p class="Lora text-md sm:text-lg w-full px-4 md:px-2">
					{$t('home.S2_D2')}
				</p>
			</div>
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start py-5 px-2"
			>
				<svg
					class="w-12 h-12 mb-2 flex justify-start items-start align-top"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
				<h3 class="Inter text-2xl text-center font-semibold my-3">
					{$t('home.S2_T3')}
				</h3>
				<p class="Lora text-md sm:text-lg w-full px-4 md:px-2">
					{$t('home.S2_D3')}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* * {
		border: black 1px solid;
	} */
	.section-bg4 {
		background-image: url('$lib/assets/svg/patterns/rose-petals.svg');
		/* background-image: url('$lib/assets/svg/patterns/dragon-scales.svg'); */
		background-size: cover;
		background-repeat: repeat;
	}
</style>
