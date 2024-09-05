import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
// import type { LayoutLoad } from './$types';

export const trailingSlash = 'always';
export const prerender = true;
export const ssr = true;

export async function load({ params, url }) {
	if (browser) {
		const lang = params.lang || 'en'; // Fallback to 'en' if lang is not provided

		if (!params.lang) {
			throw redirect(307, `/${lang}${url.pathname}`);
		}

		return {
			lang
		};
	}
}

// Moved language detection to a helper function
// function getInitialLocale(): string {
// 	if (browser) {
// 		const lang = window.navigator.language.toLowerCase();
// 		if (lang.startsWith('pt')) return 'pt-br';
// 		if (lang.startsWith('es')) return 'es';
// 		return 'en';
// 	}
// 	return 'en';
// }

// import { browser } from '$app/environment';
// import { localeStore } from '$lib/stores/pathnameStore';
// import { loadTranslations } from '$lib/translations';
// import type { LayoutLoad } from './$types';

// export const trailingSlash = 'always';
// // export const ssr = false;
// export const prerender = true;

// export const load: LayoutLoad = async ({ url }) => {
// 	// console.log(`GLOBAL URL`,url)
// 	const { pathname } = url;

// 	// Check if the path is the root (e.g., '/')
// 	if (pathname === '/') {
// 		const initLocale = getInitialLocale() || 'en';
// 		await loadTranslations(initLocale, pathname);
// 		return { locale: initLocale, route: pathname };
// 	}

// 	// For other paths, you might want to handle them differently or do nothing
// 	return { route: pathname };
// };

// function getInitialLocale(): string {
// 	if (browser) {
// 		try {
// 			const lang = window.navigator.language.toLowerCase();
// 			// Map the browser's language codes to your app's locale codes
// 			if (lang.startsWith('pt')) {
// 				localeStore.set('pt-br');
// 				return 'pt-br'; // Map 'pt-BR', 'pt-PT', etc. to 'pt-br'
// 			} else if (lang.startsWith('es')) {
// 				localeStore.set('es');
// 				return 'es'; // Map 'es-ES', 'es-MX', etc. to 'es'
// 			} else if (lang.startsWith('en')) {
// 				localeStore.set('en');
// 				return 'en'; // Map 'en-US', 'en-GB', etc. to 'en'
// 			}
// 			localeStore.set('en');
// 			return 'en'; // Default to English if no match is found
// 		} catch (e) {
// 			localeStore.set('en');
// 			return 'en';
// 		}
// 	}
// 	localeStore.set('en');
// 	return 'en';
// }
