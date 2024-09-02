<script>
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import Section7 from '$lib/components/Home/Section7.svelte';
	import { t } from '$lib/translations';
	
	// export let params;
	// let currentLang = params.lang;

	// Load translations or content based on `currentLang`
</script>
<!-- 
<h1>{currentLang.toUpperCase()} Page</h1>
<p>This is the {currentLang} version of the page.</p> -->

<!-- <script>
</script>

<h1>{$t('HERO_T')}</h1>
<p>{@html $t('HERO_D')}</p> -->
<!-- <Language /> -->

<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
