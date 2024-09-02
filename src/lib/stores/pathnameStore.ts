import { writable } from 'svelte/store';

export const localeStore = writable<string>('en'); // Default to 'en'
