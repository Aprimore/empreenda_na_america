import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const trailingSlash = 'always';
export const ssr = false;
export const prerender = true;

export const load: LayoutLoad = async ({ url, params }) => {
	const { pathname } = url;
	const currentLocale = params.lang; // Use the current language parameter from the URL
	await loadTranslations(currentLocale, pathname);

	return { locale: currentLocale, route: pathname };
};

// import { browser } from '$app/environment';
// import { loadTranslations } from '$lib/translations';
// import type { LayoutLoad } from './$types';

// export const load: LayoutLoad = async ({ url }) => {
// 	const { pathname } = url;
// 	const initLocale = getInitialLocale();
// 	await loadTranslations(initLocale, pathname);

// 	return { locale: initLocale, route: pathname };
// };

// function getInitialLocale(): string {
// 	if (browser) {
// 		try {
// 			const lang = window.navigator.language.toLowerCase();
// 			// Map the browser's language codes to your app's locale codes
// 			if (lang.startsWith('pt')) {
// 				return 'pt-br'; // Map 'pt-BR', 'pt-PT', etc. to 'pt-br'
// 			} else if (lang.startsWith('es')) {
// 				return 'es'; // Map 'es-ES', 'es-MX', etc. to 'es'
// 			} else if (lang.startsWith('en')) {
// 				return 'en'; // Map 'en-US', 'en-GB', etc. to 'en'
// 			}
// 			return 'en'; // Default to English if no match is found
// 		} catch (e) {
// 			return 'en';
// 		}
// 	}

// 	return 'en';
// }
