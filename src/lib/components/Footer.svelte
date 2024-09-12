<script lang="ts">
	import { toptier_webp } from '$lib';
	import { t } from '$lib/translations';
</script>

<!-- 1111111111111111111111111111111111111111111111111111111111 -->
<footer
	class="footer relative bg-gradient-to-tr from-emerald-500 to-emerald-800 section-bg3 font-normal"
>
	<div class=" max-sm:flex justify-center">
		<div class=" lg:p-12 max-md:flex justify-center p-5">
			<!-- <div class="flex justify-center items-center"> -->
			<!-- <div class="footer1 xl:col-span-2 md:col-span-2 col-span-2 max-md:flex justify-center">
				</div> -->
			<div class="sm:flex justify-around items-center space-x-10">
				<div class=" ">
					<a href="#" class="mb-6 inline-block max-w-[150px]">
						<img
							loading="lazy"
							src={toptier_webp}
							alt="logo"
							class="aspect-square transition-transform transform hover:-translate-y-1 w-36 h-36"
						/>
					</a>
				</div>
				<div class=" mb-10">
					<ul class="space-y-3">
						<li>
							<a
								href="#"
								title="Learn more about our company"
								class="text-emerald-100 text-base hover:text-emerald-950"
								>{$t('home.FOOT_contact')}</a
							>
						</li>
						<li>
							<a
								href="#"
								title="Learn more about our company"
								class="text-emerald-100 text-base hover:text-emerald-950"
							>
								{$t('home.FOOT_help')}
							</a>
						</li>
						<li>
							<a
								href="#"
								title="Learn more about our company"
								class="text-emerald-100 text-base hover:text-emerald-950">{$t('home.FOOT_terms')}</a
							>
						</li>
						<li>
							<a
								href="#"
								title="Learn more about our company"
								class="text-emerald-100 text-base hover:text-emerald-950"
							>
								{$t('home.FOOT_privacy')}
							</a>
						</li>
						<li>
							<a
								href="#"
								title="Learn more about our company"
								class="text-emerald-100 text-base hover:text-emerald-950"
								>{$t('home.FOOT_aboutus')}</a
							>
						</li>
					</ul>
				</div>
				<div class="footer2 col-span-2 row-span-2">
					<div class=" mb-10">
						<ul class="space-y-3">
							<li>
								<a
									href="#"
									title="Learn more about our company"
									class="text-emerald-100 text-base hover:text-emerald-950"
								>
									{$t('home.FOOT_community')}
								</a>
							</li>
							<li>
								<a
									href="#"
									title="Learn more about our company"
									class="text-emerald-100 text-base hover:text-emerald-950"
									>{$t('home.FOOT_shop')}</a
								>
							</li>
							<li>
								<a
									href="#"
									title="Learn more about our company"
									class="text-emerald-100 text-base hover:text-emerald-950"
								>
									{$t('home.FOOT_company')}
								</a>
							</li>
							<li>
								<a
									href="#"
									title="Learn more about our company"
									class="text-emerald-100 text-base hover:text-emerald-950"
								>
									{$t('home.FOOT_support')}
								</a>
							</li>
							<li>
								<a
									href="#"
									title="Learn more about our company"
									class="text-emerald-100 text-base hover:text-emerald-950"
								>
									{$t('home.FOOT_documentation')}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
</footer>

<!-- <style>
	@media only screen and (max-width: 1400px) {
		.footer-component {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.footer-component {
			zoom: 100%;
		}
	}
	.btn-agendar::after {
		content: url('$lib/assets/svg/arrow_right.svg');
		display: inline-block;
		/* margin-right: 10px;  */
		margin-left: 10px;
		margin-bottom: 2px;
		vertical-align: middle;
	}
</style> -->

<style>
	.section-bg3 {
		background-image: url('$lib/assets/svg/patterns/subtle-prism.svg');
		/* background-image: url('$lib/assets/svg/patterns/dragon-scales.svg'); */
		background-size: contain;
		background-repeat: repeat;
		background-position: center;
	}
</style>
