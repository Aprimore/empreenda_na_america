<script>
	import { goto } from '$app/navigation'; // Import goto for client-side navigation
	import { page } from '$app/stores';
	import { brazil_svg, spain_svg, usa_svg } from '$lib';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { currentLocale } from '$lib/store';
	import { locale } from '$lib/translations';
	import { onDestroy, onMount } from 'svelte';

	// Initialize the page path from $page store
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'pt-br', name: 'Português' }
	];

	const flagsMap = {
		en: usa_svg,
		'pt-br': brazil_svg,
		es: spain_svg
	};

	// Subscribe to the currentLocale store to get the selected locale
	let selected = '';

	// Synchronize selected value with the store
	const unsubscribe = currentLocale.subscribe((value) => {
		selected = value;
		locale.set(value); // Set the locale in i18n
	});

	// Cleanup subscription when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});

	// Handle the change in language selection
	const handleOnChange = (newLocale) => {
		if (newLocale !== selected) {
			currentLocale.set(newLocale);
			locale.set(newLocale);
			const newPath = pagePath.replace(/^\/[a-z]{2}(?:-[a-z]{2})?/, `/${newLocale}`);
			// Manually update the <html lang="..."> tag
			document.documentElement.lang = newLocale;
			goto(newPath);
		}
	};
</script>

<Dropdown {languages} {flagsMap} {selected} onChange={handleOnChange} />
