//@ts-nocheck
import { currentLocale } from '$lib/store.js';
import { locale } from '$lib/translations';
console.log('HOOKS =-=-=-=-=-=')
console.log(currentLocale);
console.log(locale);
console.log('END HOOKS =-=-=-=-=-=')
export const handle = async ({ event, resolve }) => {
	locale.set(currentLocale.get());

	return resolve(event);
};
