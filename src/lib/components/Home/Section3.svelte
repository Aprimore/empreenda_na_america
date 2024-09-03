<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section class="w-full max-sm:p-2 bg-[#dfdad6] text-balance py-10">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<h1 class="text-3xl md:text-4xl lg:text-5xl text-center my-6">
			{$t('S2_T')}
			<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
		</h1>
		<div class="grid grid-cols-3 grid-rows-1 gap-3">
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5"
			>
				<!-- Replace with actual SVG -->
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
				<h3 class="text-2xl text-center font-semibold mb-1">
					{$t('S2_T')}
				</h3>
				<p class="text-lg text-center w-full px-14">{$t('S2_D')}</p>
			</div>
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start p-5 space-y-3"
			>
				<!-- Replace with actual SVG -->
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
				<h3 class="text-2xl text-center font-semibold mb-1">
					{$t('S3_T')}
				</h3>
				<p class="text-lg text-center w-full px-14">
					{$t('S3_D')}
				</p>
			</div>
			<div
				class="border border-black rounded-md w-full flex flex-col items-center justify-start p-5 space-y-5"
			>
				<!-- Replace with actual SVG -->
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
				<h3 class="text-2xl text-center font-semibold mb-1">
					<!-- {$t('S2_T')} --> Beatae commodi cumque quod adipisci!
				</h3>
				<p class="text-lg text-center w-full px-14">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed dolore sint odio
					praesentium id saepe eum minus omnis nihil.
					<!-- {$t('S2_T')} -->
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

	h2 {
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
