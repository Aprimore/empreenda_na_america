<!-- HERO SECTION -->
<script lang="ts">
	import EBOOK_IADVOCATICIA_webp from '$lib/assets/images/ebooks/EBOOK_IADVOCATICIA.webp?enhanced';
	// import headerhero_webp from '$lib/assets/images/headerhero.webp?enhanced';
	import { t } from '$lib/translations';
</script>

<section
	class=" 
 text-balance text-emerald-100 section-bg2 pt-32"
>
	<div class="lg:max-w-screen-lg mx-auto">
		<div class=" sm:p-5 flex max-md:flex-col md:gap-10 max-sm:py-14">
			<div
				class="md:max-w-[45%] border-black align-middle lg:m-10 md:m-5 max-md:px-3 my-16 max-md:text-center"
			>
				<h1 class="Inter-Bold text-4xl xl:text-5xl uppercase">
					{$t('home.HERO_T')}
				</h1>
				<h2 class="Lora text-xl lg:text-2xl lg:mt-8 md:mt-5 mt-3">
					{$t('home.HERO_D')}
				</h2>
			</div>
			<div class="max-sm:p-10 max-md:p-20">
				<enhanced:img
					src={EBOOK_IADVOCATICIA_webp}
					alt="landing page header"
					loading="eager"
					sizes="(min-width:1080px) 744px, (min-width:768px) 640px, 300px"
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
