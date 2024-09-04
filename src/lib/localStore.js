//@ts-nocheck

// localStore.js
import { writable } from 'svelte/store';
export const localStore = (key, initial) => {
	// Helper function to convert value to a string
	const toString = (value) => JSON.stringify(value, null, 2);

	// Helper function to parse JSON string
	const toObj = JSON.parse;

	if (typeof window !== 'undefined' && window.localStorage) {
		// Check if we are in the browser environment and localStorage is available
		if (localStorage.getItem(key) === null) {
			// Item not present in local storage
			localStorage.setItem(key, toString(initial)); // Initialize local storage with initial value
		}

		const saved = toObj(localStorage.getItem(key)); // Convert to object

		const { subscribe, set, update } = writable(saved); // Create the underlying writable store

		return {
			subscribe,
			set: (value) => {
				localStorage.setItem(key, toString(value)); // Save also to local storage as a string
				return set(value);
			},
			update
		};
	} else {
		// If we are not in the browser or localStorage is unavailable, use a fallback
		const { subscribe, set, update } = writable(initial);

		return {
			subscribe,
			set,
			update
		};
	}
};

// localStore.js
// import { writable } from 'svelte/store';

// export const localStore = (key, initial) => {
// 	// receives the key of the local storage and an initial value

// 	const toString = (value) => JSON.stringify(value, null, 2); // Helper function
// 	const toObj = JSON.parse; // Helper function

// 	if (localStorage.getItem(key) === null) {
// 		console.log('LOCAO ST', localStorage);
// 		// item not present in local storage
// 		localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
// 	}

// 	const saved = toObj(localStorage.getItem(key)); // convert to object
// 	console.log(saved);
// 	const { subscribe, set, update } = writable(saved); // create the underlying writable store

// 	return {
// 		subscribe,
// 		set: (value) => {
// 			localStorage.setItem(key, toString(value)); // save also to local storage as a string
// 			return set(value);
// 		},
// 		update
// 	};
// };
