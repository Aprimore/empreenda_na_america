import { currentLocale } from '$lib/store.js';
import { locale } from '$lib/translations';

export const handle = async ({ event, resolve }) => {
	locale.set(currentLocale.get());

	return resolve(event);
};
