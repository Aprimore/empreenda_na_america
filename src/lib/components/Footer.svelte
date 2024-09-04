<script lang="ts">
	import { t } from '$lib/translations';
	const abdc = 1;
	console.log(abdc);
</script>

<footer class="footer relative bg-[#dfdad6] Exo footer-component">
	<div class=" max-sm:flex justify-center">
		<div class=" lg:p-12 max-md:flex justify-center p-5">
			<!-- <div class="flex justify-center items-center"> -->
			<!-- <div class="footer1 xl:col-span-2 md:col-span-2 col-span-2 max-md:flex justify-center">
					<div class=" ">
						<a href="/" class="mb-6 inline-block max-w-[250px]">
							<img
								loading="lazy"
								decoding="sync"
								fetchpriority="low"
								src={logo_footer_webp}
								alt="logo"
								class="aspect-video transition-transform transform hover:-translate-y-1"
							/>
						</a>
						<button class="flex flex-wrap Exo">
							<a
								class="btn-agendar w-full bg-[#8abb3f] text-[#17193B] py-4 px-10 rounded-lg relative transition-transform transform hover:-translate-y-1"
								href="/company#contact"
							>
								{@html m.button_schedule_a_demo()}
							</a>
						</button>
					</div>
				</div> -->
			<div class="flex justify-center items-center space-x-10">
				<div class=" mb-10">
					<ul class="space-y-3">
						<li>
							<a
								href="/products#platform"
								title="Learn more about our company"
								class="text-[#000] text-sm hover:text-blue-950">{$t('FOOT_contact')}</a
							>
						</li>
						<li>
							<a
								href="/products#target-audience"
								title="Learn more about our company"
								class="text-[#000] text-sm hover:text-blue-950"
							>
								{$t('FOOT_help')}
							</a>
						</li>
						<li>
							<a
								href="/products#platform"
								title="Learn more about our company"
								class="text-[#000] text-sm hover:text-blue-950">{$t('FOOT_terms')}</a
							>
						</li>
						<li>
							<a
								href="/products#target-audience"
								title="Learn more about our company"
								class="text-[#000] text-sm hover:text-blue-950"
							>
								{$t('FOOT_privacy')}
							</a>
						</li>
						<li>
							<a
								href="/products#platform"
								title="Learn more about our company"
								class="text-[#000] text-sm hover:text-blue-950">{$t('FOOT_aboutus')}</a
							>
						</li>
					</ul>
				</div>
				<div class="footer2 col-span-2 row-span-2">
					<div class=" mb-10">
						<ul class="space-y-3">
							<li>
								<a
									href="/products#target-audience"
									title="Learn more about our company"
									class="text-[#000] text-sm hover:text-blue-950"
								>
									{$t('FOOT_community')}
								</a>
							</li>
							<li>
								<a
									href="/products#platform"
									title="Learn more about our company"
									class="text-[#000] text-sm hover:text-blue-950">{$t('FOOT_shop')}</a
								>
							</li>
							<li>
								<a
									href="/products#target-audience"
									title="Learn more about our company"
									class="text-[#000] text-sm hover:text-blue-950"
								>
									{$t('FOOT_company')}
								</a>
							</li>
							<li>
								<a
									href="/products#target-audience"
									title="Learn more about our company"
									class="text-[#000] text-sm hover:text-blue-950"
								>
									{$t('FOOT_support')}
								</a>
							</li>
							<li>
								<a
									href="/products#target-audience"
									title="Learn more about our company"
									class="text-[#000] text-sm hover:text-blue-950"
								>
									{$t('FOOT_documentation')}
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
