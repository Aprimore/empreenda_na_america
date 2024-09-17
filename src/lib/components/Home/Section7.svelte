<!-- About Our Mission -->
<script lang="ts">
	import { business_webp } from '$lib';

	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<!-- 11111111111111111111111111111111111111111111111111111111111111 -->
<section
	class="w-full max-sm:p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 section-bg2
 text-pretty text-emerald-100 py-10"
>
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<div class="max-md:p-5 flex max-md:flex-col">
			<div class="md:w-1/2 align-middle flex items-center max-md:order-2 lg:m-10 md:m-5">
				<img
					class="rounded-xl w-full h-auto"
					src={business_webp}
					alt="business "
					loading="lazy"
					width="452"
					height="254"
				/>
			</div>
			<div class="md:w-1/2 m-auto border-black align-middle">
				<h2 class="Inter-Bold text-3xl md:text-4xl my-6 text-center">{$t('home.S4_T')}</h2>
				<p class="Lora text-lg max-sm:text-md my-6 sm:text-center">
					{$t('home.S4_D')}
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
	/* * {
		border: black 1px solid;
	} */

	.section-bg2 {
		background-image: url('$lib/assets/svg/patterns/sun-tornado2.svg');
		/* background-image: url('$lib/assets/svg/patterns/dragon-scales.svg'); */
		background-size: cover;
		background-repeat: repeat;
		background-position: center;
	}
</style>
