//@ts-nocheck
export const prerender = true;
import type { LayoutLoad } from './$types';

export const load = (async (url) => {
	return { url };
}) satisfies LayoutLoad;
