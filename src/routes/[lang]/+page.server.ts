// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = (async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age-0, s-maxage=${60 * 60}`
	});

	return {};
}) satisfies PageServerLoad;

export const prerender = true;
