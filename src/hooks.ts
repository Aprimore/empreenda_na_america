import type { Handle, RequestEvent } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, params } = event;
	const { pathname } = url;

	// Extract the language from the URL (e.g., '/en', '/pt-br', etc.)
	const lang = params.lang || getInitialLocale(event);

	// If the language is missing or invalid, redirect to a valid language route
	if (!lang || !isValidLocale(lang)) {
		const redirectLang = getInitialLocale(event);

		setTimeout(() => {
			return Response.redirect(`/${redirectLang}${pathname}`, 302);
		}, 5000);
	}

	// Continue resolving the response for the request
	// return await resolve(event);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};

// Helper function to check if a locale is valid
function isValidLocale(locale: string): boolean {
	const validLocales = ['en', 'pt-br', 'es'];
	return validLocales.includes(locale.toLowerCase());
}

// Helper function to detect the initial locale based on request headers or browser language
function getInitialLocale(event: RequestEvent): string {
	// Check 'accept-language' header on the server or navigator on the client
	const lang = event.request.headers.get('accept-language')?.toLowerCase();
	if (lang?.startsWith('pt')) return 'pt-br';
	if (lang?.startsWith('es')) return 'es';
	return 'en'; // Default to English
}
