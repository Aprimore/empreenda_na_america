import { defaultLocale, locales, setLocale, setRoute } from '$lib/translations';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    const { url, request } = event;
    const { pathname } = url;
    
    // Get defined locales
    const supportedLocales = locales.get().map((l) => l.toLowerCase());
    
    // Try to get locale from `pathname`.
    const pathLocale = pathname.split('/')[1].toLowerCase();
    let locale = supportedLocales.includes(pathLocale) ? pathLocale : null;

    // If route locale is not supported
    if (!locale) {
        // Get user preferred locale
        const acceptLanguage = request.headers.get('accept-language');
        locale = acceptLanguage
            ? acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
            : defaultLocale;

        // Set default locale if user preferred locale is not supported
        if (!supportedLocales.includes(locale)) {
            locale = defaultLocale;
        }

        // 301 redirect
        return new Response(null, {
            headers: { 'Location': `/${locale}${pathname}` },
            status: 301
        });
    }

    // Set locale for the current request
    event.locals.lang = locale;
    await setLocale(locale);

    // Add html `lang` attribute
    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
    });

    return response;
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
    const { locals } = event;
    const { lang } = locals;
    await setLocale(lang);
    await setRoute('error');
    return locals;
};