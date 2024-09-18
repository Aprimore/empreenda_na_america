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
		})(window, document, 'script', 'dataLayer', 'GTM-MNVT3N22');
	});
}
// Google Analytics script (to be added after GTM loads)
export function loadGA() {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S0SCVCHGRE';
		script.async = true;
		script.onload = () => {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-S0SCVCHGRE');
			resolve();
		};
		script.onerror = reject;
		document.head.appendChild(script);
	});
}
