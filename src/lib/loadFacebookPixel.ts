// export function loadFacebookConversion(eventData: { event_name: string; user_data: object }) {
// 	return new Promise((resolve, reject) => {
// 		fetch('https://empreendanaamerica.com/v2/facebook-conversion.php', {
// 			method: 'POST',
// 			body: JSON.stringify({
// 				// event_name: eventData.event_name,
// 				event_time: Math.floor(new Date().getTime() / 1000),
// 				user_data: eventData.user_data
// 			}),
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 			.then((response) => {
// 				if (response.ok) {
// 					resolve('Evento enviado com sucesso!');
// 				} else {
// 					reject('Falha ao enviar evento');
// 				}
// 			})
// 			.catch((error) => {
// 				reject('Erro na requisição: ' + error);
// 			});
// 	});
// }
