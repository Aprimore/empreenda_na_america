import { writable } from 'svelte/store';

// Create a global store for the current language
export const currentLocale = writable('pt'); // Default language is English
