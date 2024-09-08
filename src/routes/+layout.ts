import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
	// This block should only run on the client side
	if (browser) {
		const lang = params.lang || 'en'; // Fallback to 'en' if lang is not provided

		// Supported locales
		const validLocales = ['en', 'pt-br', 'es'];

		// Split the URL path into segments and filter out empty ones
		const urlPathSegments = url.pathname.split('/').filter(Boolean);

		// If no language is detected in the first URL segment, and we're not at the root,
		// redirect to the default language path.
		// if (!urlPathSegments[0] && url.pathname === '/') {
		// 	// At the root path, redirect to default language
		// 	throw redirect(307, `/${lang}`);
		// }

		// // If the first segment is not a valid locale, redirect
		// if (!validLocales.includes(urlPathSegments[0])) {
		// 	throw redirect(307, `/${lang}${url.pathname}`);
		// }

		// Return the language in the response
		return {
			lang
		};
	}
}

export const prerender = true;
export const trailingSlash = 'always';
export const ssr = true;
