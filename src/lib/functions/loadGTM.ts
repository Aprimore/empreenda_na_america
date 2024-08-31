//@ts-nocheck
export function loadGTM() {
	return new Promise((resolve, reject) => {
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s) as HTMLScriptElement,
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			j.onload = resolve;
			j.onerror = reject;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-XXXXXXXXXXXXXX');
	});
}
