<script lang="ts">
	import { arrow_up_svg } from '$lib';
	import * as m from '$lib/paraglide/messages';
	import CookieConsent from './CookieConsent.svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';
</script>

<!-- <div class="div1"></div>
<div class="div2"></div>
<div class="div3"></div> -->

<div class="copyright p-5 text-sm copyright-component">
	<div class="gridFooter max-md:text-center max-md:space-y-5">
		<ul
			class="col-span-1
        "
		>
			<li class=" text-[#D4D4ED]">
				<a href="/" class="">{@html m.footer_Copyright()}</a>
			</li>
		</ul>

		<ul
			class="flex max-md:flex-col gap-5 max-sm:text-center
            "
		>
			<li>
				<a
					href="/terms-of-service"
					target="_blank"
					class="underline text-[#D4D4ED] hover:text-white"
					style="min-width: 48px; min-height: 48px;">{@html m.footer_Terms()}</a
				>
			</li>
			<li>
				<a
					href="/privacy-policy"
					target="_blank"
					class="underline text-[#D4D4ED] hover:text-white"
					style="min-width: 48px; min-height: 48px;">{@html m.footer_Privacy()}</a
				>
			</li>
			<li>
				<a
					href="/cookies"
					target="_blank"
					class=" underline text-[#D4D4ED] hover:text-white"
					style="min-width: 48px; min-height: 48px;">{@html m.footer_Cookies()}</a
				>
			</li>
		</ul>

		<ul class=" max-w-max arrowUp max-md:ml-auto">
			<!-- max-md:absolute right-2 max-sm:bottom-3 flex max-w-min ml-auto mb-auto -->
			<li class=" ">
				<button
					class="bg-[#D4D4ED] size-[36px] flex justify-center items-center rounded-md Exo transition-transform duration-200 transform hover:scale-105"
				>
					<a href="/"
						><img
							src={arrow_up_svg}
							alt="arrow top"
							class="size-[14px]"
							aria-label="top button"
							decoding="sync"
							fetchpriority="low"
						/></a
					>
				</button>
			</li>
		</ul>
	</div>
</div>

<style>
	@media only screen and (max-width: 1400px) {
		.copyright-component {
			zoom: 127%;
		}
	}

	@media only screen and (max-width: 600px) {
		.copyright-component {
			zoom: 100%;
		}
	}

	.copyright {
		background-color: #25285f;
	}

	.gridFooter {
		display: grid;
		grid-template-columns: 45% 45% 10%;
		gap: 5px;
	}
	.arrowUp {
		justify-self: end;
	}

	@media (max-width: 740px) {
		.gridFooter {
			display: block;
		}
	}
</style>
