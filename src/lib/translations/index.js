//@ts-nocheck
import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';
import en from './en';
import es from './es';
import pt from './pt-br';
import lang from './lang';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		en: {
			...en,
			lang
		},
		es: {
			...es,
			lang
		},
		pt: {
			...pt,
			lang
		}
	}
};

// Locale normalization function
const normalizeLocale = (locale) => {
	if (locale === 'pt-BR') return 'pt'; // Convert 'pt-BR' to 'pt'
	return locale;
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);

// Override the setLocale function to use the normalized locale
const originalSetLocale = setLocale;
export const setNormalizedLocale = (newLocale) => {
	originalSetLocale(normalizeLocale(newLocale));
};
