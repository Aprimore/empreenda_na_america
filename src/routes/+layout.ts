import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
// import type { LayoutLoad } from './$types';

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
