import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
	// This block should only run on the client side
	if (browser) {
		const lang = params.lang || 'en'; // Fallback to 'en' if lang is not provided

		// Check if the URL already has the language prefix to avoid infinite redirect
		const validLocales = ['en', 'pt-br', 'es']; // Your supported languages
		const urlPathSegments = url.pathname.split('/').filter(Boolean); // Remove empty segments

		// If no language is detected in the first URL segment, redirect to the correct one
		if (!validLocales.includes(urlPathSegments[0])) {
			throw redirect(307, `/${lang}${url.pathname}`);
		}

		// Return the language in the response
		return {
			lang
		};
	}
}
