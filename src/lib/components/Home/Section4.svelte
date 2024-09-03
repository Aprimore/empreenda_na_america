<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section class="w-full max-sm:p-2 bg-[#fff] text-balance py-10">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<h1 class="text-3xl md:text-4xl lg:text-5xl my-6 text-center">
			{$t('S7_T')}
			<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
		</h1>
		<h2 class="text-2xl max-sm:text-xl my-6 text-center">
			{$t('S7_D')}
		</h2>
		<div class="grid grid-cols-3 grid-rows-1 gap-3 py-5">
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src="https://www.gstatic.com/webp/gallery/1.webp" 
					alt="Profile Picture"
					class="size-32 rounded-full object-cover"
				/>

				<h3 class="text-2xl text-center font-semibold mb-1">Lorem ipsum dolor sit amet</h3>
				<p class="text-lg text-center w-full">
					Quas, omnis. Deserunt culpa distinctio autem iste esse architecto, accusamus at quos
					veritatis, ipsam unde dolore sint tenetur. Iure vitae eos rerum! Lorem ipsum dolor sit
					amet consectetur, adipisicing elit.
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src="https://www.gstatic.com/webp/gallery/1.webp"
					alt="Profile Picture"
					class="size-32 rounded-full object-cover"
				/>

				<h3 class="text-2xl text-center font-semibold mb-1">Lorem ipsum dolor sit amet</h3>
				<p class="text-lg text-center w-full">
					Quas, omnis. Deserunt culpa distinctio autem iste esse architecto, accusamus at quos
					veritatis, ipsam unde dolore sint tenetur. Iure vitae eos rerum! Lorem ipsum dolor sit
					amet consectetur, adipisicing elit.
				</p>
			</div>
			<div class=" rounded-md w-full flex flex-col items-center justify-start py-5 space-y-5">
				<!-- Replace with actual SVG -->
				<img
					src="https://www.gstatic.com/webp/gallery/1.webp"
					alt="Profile Picture"
					class="size-32 rounded-full object-cover"
				/>

				<h3 class="text-2xl text-center font-semibold mb-1">Lorem ipsum dolor sit amet</h3>
				<p class="text-lg text-center w-full">
					Quas, omnis. Deserunt culpa distinctio autem iste esse architecto, accusamus at quos
					veritatis, ipsam unde dolore sint tenetur. Iure vitae eos rerum! Lorem ipsum dolor sit
					amet consectetur, adipisicing elit.
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
