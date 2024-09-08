<!-- HERO SECTION -->
<script lang="ts">
	import headerhero_webp from '$lib/assets/images/headerhero.webp?enhanced';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full
 text-balance -z-10 text-emerald-100 section-bg2 pt-32"
>
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-0">
		<div class=" sm:p-5 flex max-md:flex-col items-center md:gap-10">
			<div class="md:max-w-[45%] border-black align-middle lg:m-10 md:m-5 max-md:p-5 max-md:mt-7">
				<h1 class="Inter-Bold text-2xl md:text-3xl xl:text-5xl uppercase p-1">
					{$t('home.HERO_T')}
				</h1>
				<h2 class="Lora text-xl lg:text-2xl lg:mt-8 md:mt-5 mt-3 p-1">
					{$t('home.HERO_D')}
				</h2>
			</div>
			<div class="relative w-full max-md:p-20 max-sm:p-10">
				<enhanced:img
					class="max-w-[400px] h-auto"
					style="object-fit:cover"
					src={headerhero_webp}
					alt="landing page header"
					loading="eager"
					sizes="(min-width:1080px) 744px, (min-width:768px) 640px, 400px"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	/* * {
		border: black 1px solid;
	} */
	.section-bg2 {
		background-image: url('$lib/assets/svg/patterns/sun-tornado.svg');
		background-size: cover;
		background-repeat: repeat;
		background-position: center;
	}
</style>
