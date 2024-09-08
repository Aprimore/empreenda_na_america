//@ts-nocheck
import { defaultLocale, locales, setLocale, setRoute } from '$lib/translations';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const { url, request } = event;
	const { pathname } = url;

	// Get defined locales
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	// Try to get locale from `pathname`.
	let locale = supportedLocales.find(
		(l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase()
	);

	// If route locale is not supported
	if (!locale) {
		// Get user preferred locale
		locale = `${`${request.headers.get('accept-language')}`.match(
			/[a-zA-Z]+?(?=-|_|,|;)/
		)}`.toLowerCase();

		// Set default locale if user preferred locale does not match
		if (!supportedLocales.includes(locale)) locale = defaultLocale;

		// 301 redirect
		return new Response(undefined, {
			headers: { location: `/${locale}${pathname}` },
			status: 301
		});
	}

	// Add html `lang` attribute
	return resolve(
		{ ...event, locals: { lang: locale } },
		{
			transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
		}
	);
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
	const { locals } = event;
	const { lang } = locals;

	await setLocale(lang);
	await setRoute('error');

	return locals;
};

// // import { currentLocale } from '$lib/store.js';
// // import { locale } from '$lib/translations';
// // // console.log('HOOKS =-=-=-=-=-=')
// // // console.log(currentLocale);
// // // console.log(locale);
// // // console.log('END HOOKS =-=-=-=-=-=')
// // export const handle = async ({ event, resolve }) => {
// // 	locale.set(currentLocale.get());
// // 	return resolve(event);
// // };
// import { currentLocale } from '$lib/store'; // Import from store.js
// import type { Handle, RequestEvent } from '@sveltejs/kit';
// import { get } from 'svelte/store';

// export const handle: Handle = async ({ event, resolve }) => {
// 	const { url, params } = event;
// 	const { pathname } = url;

// 	// Get the current locale from the store
// 	const locale = get(currentLocale); // Correct way to access the store value

// 	// Extract the language from the URL (e.g., '/en', '/pt-br', etc.)
// 	const lang = params.lang || locale || getInitialLocale(event);

// 	// If the language is missing or invalid, redirect to a valid language route
// 	if (!lang || !isValidLocale(lang)) {
// 		const redirectLang = getInitialLocale(event);
// 		return Response.redirect(`/${redirectLang}${pathname}`, 302);
// 	}

// 	// Continue resolving the response for the request
// 	return resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
// 	});
// };

// // Helper function to check if a locale is valid
// function isValidLocale(locale: string): boolean {
// 	const validLocales = ['en', 'pt-br', 'es'];
// 	return validLocales.includes(locale.toLowerCase());
// }

// // Helper function to detect the initial locale based on request headers or browser language
// function getInitialLocale(event: RequestEvent): string {
// 	// Check 'accept-language' header on the server or navigator on the client
// 	const lang = event.request.headers.get('accept-language')?.toLowerCase();
// 	if (lang?.startsWith('pt')) return 'pt-br';
// 	if (lang?.startsWith('es')) return 'es';
// 	return 'en'; // Default to English
// }
