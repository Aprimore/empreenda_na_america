import { browser } from '$app/environment';
import { localeStore } from '$lib/stores/pathnameStore';
import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const trailingSlash = 'always';
// export const ssr = false;
export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	// Check if the path is the root (e.g., '/')
	if (pathname === '/') {
		const initLocale = getInitialLocale() || 'en';
		await loadTranslations(initLocale, pathname);
		return { locale: initLocale, route: pathname };
	}

	// For other paths, you might want to handle them differently or do nothing
	return { route: pathname };
};

function getInitialLocale(): string {
	if (browser) {
		try {
			const lang = window.navigator.language.toLowerCase();
			// Map the browser's language codes to your app's locale codes
			if (lang.startsWith('pt')) {
				localeStore.set('pt-br');
				return 'pt-br'; // Map 'pt-BR', 'pt-PT', etc. to 'pt-br'
			} else if (lang.startsWith('es')) {
				localeStore.set('es');
				return 'es'; // Map 'es-ES', 'es-MX', etc. to 'es'
			} else if (lang.startsWith('en')) {
				localeStore.set('en');
				return 'en'; // Map 'en-US', 'en-GB', etc. to 'en'
			}
			localeStore.set('en');
			return 'en'; // Default to English if no match is found
		} catch (e) {
			localeStore.set('en');
			return 'en';
		}
	}
	localeStore.set('en');
	return 'en';
}
