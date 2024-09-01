export const ssr = false;
export const prerender = true;
// import type { LayoutLoad } from './$types';

// export const load = (async () => {
// 	return {};
// }) satisfies LayoutLoad;
import { browser } from '$app/environment';
import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const initLocale = getInitialLocale();
	// console.log(initLocale);
	await loadTranslations(initLocale, pathname);

	return { locale: initLocale, route: pathname };
};

function getInitialLocale(): string {
	if (browser) {
		console.log(window.navigator.language);
		try {
			return window.navigator.language;
			// .split('-')[0];
		} catch (e) {
			return 'en';
		}
	}

	return 'en';
}
