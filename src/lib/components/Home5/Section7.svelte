<script lang="ts">
	import { business_webp } from '$lib';

	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full max-sm:p-2 bg-gradient-to-r from-teal-500 to-orange-100
 text-balance py-10"
>
	<div class="lg:max-w-screen-2xl mx-auto max-sm:p-2">
		<div class="lg:p-10 sm:p-5 flex max-md:flex-col">
			<div class="md:w-1/2 align-middle flex items-center max-md:order-2">
				<img
					class="rounded-xl aspect-[4/3] w-full h-auto"
					src={business_webp}
					alt="business image"
					loading="lazy"
				/>
			</div>
			<div class="md:w-1/2 m-auto border-black align-middle">
				<h2 class="text-3xl md:text-4xl lg:text-5xl my-6 text-center">{$t('S4_T')}</h2>
				<p class="text-2xl max-sm:text-xl my-6 text-center">
					{$t('S4_D')}
				</p>
			</div>
			<!-- <div class="md:max-w-[50%] max-sm:mt-6 h-full">
				<img
					class="w-full"
					src="https://static-media.hotmart.com/OUwI4MVN3pxQE1sZcPInPF3Mr4Y=/filters:quality(100)/klickart-prod/uploads/media/file/8270597/bonus_(3).png"
					alt=""
				/>
			</div> -->
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
