// //@ts-nocheck
// import { writable } from 'svelte/store';

// // Create a writable store for locale
// export const localeStore = writable('en'); // Default to 'en'

// // Create a wrapper object for the locale store to include persistence logic
// export const currentLocale = {
// 	subscribe: localeStore.subscribe,
// 	set: (locale) => {
// 		localeStore.set(locale);
// 		localStorage.setItem('locale', locale); // Persist in local storage
// 	},
// 	update: (updater) => {
// 		localeStore.update(updater);
// 		// Optionally, you could handle persistence here if needed
// 	}
// };

// // import { localStore } from '$lib/localStore.js';
// // // import { writable } from 'svelte/store';

// // export const currentLocale = localStore('locale', 'en');
