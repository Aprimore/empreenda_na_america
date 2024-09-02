<script lang="ts">
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';

    if (browser) {
        const userLang = window.navigator.language.toLowerCase();
        let redirectLang = 'en'; // default to English if language is not supported

        // Set the redirect language based on the browser language
        if (userLang.startsWith('pt-br')) {
            redirectLang = 'pt-br';
        } else if (userLang.startsWith('es')) {
            redirectLang = 'es';
        }

        // Redirect to the appropriate language route
        goto(`/${redirectLang}`);
    }
</script>

<h1>Redirecting...</h1>


<!-- <script>
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section5 from '$lib/components/Home/Section5.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import Section7 from '$lib/components/Home/Section7.svelte';
	import { t } from '$lib/translations';
</script> -->

<!-- <Language /> -->

<!-- <Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 /> -->
