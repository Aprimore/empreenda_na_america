import { localStore } from '$lib/localStore.js';
// import { writable } from 'svelte/store';

export const currentLocale = localStore('locale', 'en');
