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

// export function loadFacebookPixel() {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			// Fetch para pegar o Pixel ID do arquivo PHP
// 			fetch('https://empreendanaamerica.com/v2/facebook-conversion.php')
// 				.then((response) => response.json())
// 				.then((data) => {
// 					console.log(data, response);
// 					const pixelId = data.pixel_id; // Atribui o Pixel ID retornado pela API

// 					if (!pixelId) {
// 						throw new Error('Pixel ID não encontrado');
// 					}

// 					// Inicializa o Pixel com o ID obtido
// 					(function (f, b, e, v, n, t, s) {
// 						if (f.fbq) return;
// 						n = f.fbq = function () {
// 							n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
// 						};
// 						if (!f._fbq) f._fbq = n;
// 						n.push = n;
// 						n.loaded = !0;
// 						n.version = '2.0';
// 						n.queue = [];
// 						t = b.createElement(e);
// 						t.async = !0;
// 						t.src = v;
// 						s = b.getElementsByTagName(e)[0];
// 						s.parentNode.insertBefore(t, s);
// 					})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

// 					fbq('init', pixelId); // Usando o Pixel ID obtido dinamicamente
// 					fbq('track', 'PageView'); // Rastreia a visualização da página

// 					console.log('Facebook Pixel carregado com sucesso'); // Verifica se deu certo
// 					resolve();
// 				})
// 				.catch((error) => {
// 					console.error('Erro ao carregar o Pixel ID:', error);
// 					reject(error);
// 				});
// 		} catch (error) {
// 			console.error('Erro ao carregar o Facebook Pixel:', error);
// 			reject(error);
// 		}
// 	});
// }

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

		console.log(response);

		if (response.ok) {
			const data = await response.json();
			console.log('Evento enviado:', data);
		} else {
			console.error('Erro ao fazer o fetch:', response.statusText);
		}
	} catch (error) {
		console.error('Erro no fetch:', error);
	}
}
