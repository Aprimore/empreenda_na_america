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

export async function sendFacebookPixelEvent() {
	try {
		const response = await fetch('https://empreendanaamerica.com/v2/facebook-conversion.php/', {
			method: 'POST', // Definindo o método POST
			headers: {
				'Content-Type': 'application/json' // Definindo o cabeçalho Content-Type como JSON
			},
			body: JSON.stringify({
				event_name: 'Lead', // Nome do evento
				event_time: Math.floor(new Date().getTime() / 1000), // Timestamp atual
				user_data: {
					// Usando o hash do email genérico (placeholder)
					em: 'd41d8cd98f00b204e9800998ecf8427e' // Este é um hash SHA256 de um email genérico
					// Você pode adicionar outros dados de cliente aqui:
					// ph: 'sha256hashdoTelefone',
					// external_id: 'idUnicoDoCliente'
				}
			})
		});

		// console.log(response);

		if (response.ok) {
			// const data =
			await response.json();
			// console.log('Evento enviado:', data);
		} else {
			console.error('Erro ao fazer o fetch:', response.statusText);
		}
	} catch (error) {
		console.error('Erro no fetch:', error);
	}
}
