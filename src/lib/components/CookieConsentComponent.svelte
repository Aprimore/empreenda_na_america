<script>
	import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import config from '$lib/cookieconsent-config';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';

	/**
	 * Only run plugin on the client side
	 */
	onMount(() => {
		CookieConsent.run(config);
	});
</script>

<button
	class="Inter text-emerald-100 text-base hover:text-emerald-950 section-bg3 w-full"
	on:click={CookieConsent.showPreferences}>Cookie consent preferences</button
>

<style>
	.section-bg3 {
		background-image: url('$lib/assets/svg/patterns/subtle-prism.svg');
		/* background-image: url('$lib/assets/svg/patterns/dragon-scales.svg'); */
		background-size: contain;
		background-repeat: repeat;
		background-position: center;
	}
</style>
