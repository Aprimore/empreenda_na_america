// import { setLocale, setRoute } from '$lib/translations';

// export const prerender = true;
// export const trailingSlash = 'always';
// export const ssr = true;

// /** @type { import('@sveltejs/kit').Load } */
// export const load = async ({ url }) => {
// 	const { pathname } = url;

// 	let lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;

// 	if (lang === 'pt-br' || lang.startsWith('pt')) {
// 		lang = 'pt-br';
// 	} else if (lang === 'es') {
// 		lang = 'es';
// 	} else {
// 		lang = 'en'; // Default to English if no specific match
// 	}
// 	const route = pathname.replace(new RegExp(`^/${lang}`), '');

// 	await setLocale(lang);
// 	await setRoute(route);

// 	return { route, lang };
// };

import { setLocale, setRoute } from '$lib/translations';

/** @type { import('@sveltejs/kit').Load } */
export const load = async ({ url }) => {
	const { pathname } = url;

	// Extract the first part of the URL path for language
	// let lang = pathname.match(/\w+?(?=\/|$)/)?.[0] || 'en';
	let lang = pathname.match(/\w+?(?=\/|$)/)?.[0] || '';

	// Simplified language detection with default to 'en'
	// if (lang.startsWith('pt')) {
	// 	lang = 'pt';
	// } else if (lang !== 'es') {
	// 	lang = 'en'; // Default to English
	// }

	if (lang.startsWith('es')) {
		lang = 'es';
	} else {
		lang = 'pt'; // Default to PT
	}

	const route = pathname.replace(new RegExp(`^/${lang}`), '');

	// Set locale and route
	await setLocale(lang);
	await setRoute(route);

	return { route, lang, pathname };
};

export const prerender = true;
export const trailingSlash = 'always';
export const ssr = true;
