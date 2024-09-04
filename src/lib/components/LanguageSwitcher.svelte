<script>
	import { goto } from '$app/navigation';
	import { brazil_svg, spain_svg, usa_svg } from '$lib';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { currentLocale } from '$lib/store';
	import { locale } from '$lib/translations';
	import { onMount } from 'svelte';

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

	// Initialize selected with a default value
	let selected = '';

	// Function to update the selected value
	function updateValue() {
		currentLocale.subscribe((value) => {
			selected = value;
		});
	}

	// Call updateValue once the component is mounted
	onMount(() => {
		updateValue();
	});

	const handleOnChange = (newLocale) => {
		currentLocale.set(newLocale);
		locale.set(newLocale);
		updateValue();
		goto(`/${newLocale}`);
	};
</script>

<Dropdown {languages} {flagsMap} {selected} onChange={handleOnChange} />
<!-- <Dropdown2 {languages} {flagsMap} {selected} onChange={handleOnChange} /> -->
