import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

// export const trailingSlash = 'always';
// export const prerender = true;
// export const ssr = true;

export const load: LayoutLoad = async ({ params, url }) => {
	const { lang } = params;
	const { pathname } = url;

	await loadTranslations(lang, pathname);

	return { locale: lang, route: pathname };
};
