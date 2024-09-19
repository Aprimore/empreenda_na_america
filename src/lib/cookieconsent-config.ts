import * as CookieConsent from 'vanilla-cookieconsent';
import { loadGA, loadGTM } from './loadGTM';

const config: CookieConsent.CookieConsentConfig = {
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/ // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid' // string: exact cookie name
					}
				]
			},

			// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
			services: {
				ga: {
					label: 'Google Analytics',
					onAccept: () => {
						Promise.all([loadGTM(), loadGA()]);
					},
					onReject: () => {}
				}
				// another: {
				// 	onAccept: () => {},
				// 	onReject: () => {}
				// }
			}
		}
		// ads: {}
	},

	// onFirstConsent: ({ cookie }) => {
	// 	console.log('onFirstConsent fired', cookie);
	// },

	// onConsent: ({ cookie }) => {
	// 	console.log('onConsent fired!', cookie, CookieConsent.getUserPreferences());
	// },

	// onChange: ({ changedCategories, changedServices }) => {
	// 	console.log('onChange fired!', changedCategories, changedServices);
	// },

	// onModalReady: ({ modalName }) => {
	// 	console.log('ready:', modalName);
	// },

	// onModalShow: ({ modalName }) => {
	// 	console.log('visible:', modalName);
	// },

	// onModalHide: ({ modalName }) => {
	// 	console.log('hidden:', modalName);
	// },

	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom left',
			equalWeightButtons: true,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false
		}
	},

	language: {
		autoDetect: 'document',
		default: 'pt',
		translations: {
			en: {
				consentModal: {
					// title: 'We use cookies',
					description:
						'We use cookies to enhance your browsing experience, remember your preferences, and provide personalized content.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage Individual preferences',
					// closeIconLabel: 'Reject all and close modal',
					footer: `
							<a href="#path-to-impressum.html" target="_blank">Impressum</a>
							<a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
					`
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Accept current selection',
					closeIconLabel: 'Close modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Your Privacy Choices',
							description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
						},
						{
							title: 'Strictly Necessary',
							description:
								'These cookies are essential for the proper functioning of the website and cannot be disabled.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Performance and Analytics',
							description:
								'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									{
										name: '_ga',
										domain: 'google-analytics.com',
										desc: 'Used by Google Analytics to distinguish users. This cookie helps track user interactions on your site for analytics purposes.'
									},
									{
										name: '_gid',
										domain: 'google-analytics.com',
										desc: 'Set by Google Analytics to distinguish users. Used to track user interactions for analytics purposes and expires after 24 hours.'
									}
								]
							}
						},
						{
							title: 'Targeting and Advertising',
							description:
								'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
							linkedCategory: 'ads'
						},
						{
							title: 'More information',
							description:
								'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
						}
					]
				}
			},
			pt: {
				consentModal: {
					// title: 'We use cookies',
					description:
						'Utilizamos cookies para melhorar sua experiência de navegação, lembrar suas preferências e fornecer conteúdo personalizado.',
					acceptAllBtn: 'Aceitar todos',
					acceptNecessaryBtn: 'Rejeitar todos',
					showPreferencesBtn: 'Gerenciar preferências individuais',
					// closeIconLabel: 'Reject all and close modal',
					footer: `
							<a href="#path-to-impressum.html" target="_blank">Impressum</a>
							<a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
					`
				},
				preferencesModal: {
					title: 'Gerenciar preferências de cookie',
					acceptAllBtn: 'Aceitar todos',
					acceptNecessaryBtn: 'Rejeitar todos',
					savePreferencesBtn: 'Aceitar selecionados',
					closeIconLabel: 'Fechar modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Suas Escolhas de Privacidade',
							description: `Neste painel, você pode expressar algumas preferências relacionadas ao tratamento de suas informações pessoais. Você pode revisar e alterar as escolhas feitas a qualquer momento, reabrindo este painel através do link fornecido. Para negar seu consentimento às atividades de processamento específicas descritas abaixo, desligue os botões de alternância ou use o botão "Rejeitar tudo" e confirme que deseja salvar suas escolhas.`
						},
						{
							title: 'Estritamente Necessários',
							description:
								'Esses cookies são essenciais para o funcionamento adequado do site e não podem ser desativados.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Desempenho e Análise',
							description:
								'Esses cookies coletam informações sobre como você usa nosso site. Todos os dados são anonimizados e não podem ser usados para identificá-lo.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Tabela de Cookies',
								headers: {
									name: 'Cookie',
									domain: 'Domínio',
									desc: 'Descrição'
								},
								body: [
									{
										name: '_ga',
										domain: 'google-analytics.com',
										desc: 'Usado pelo Google Analytics para distinguir os usuários. Esse cookie ajuda a rastrear interações dos usuários no seu site para fins de análise.'
									},
									{
										name: '_gid',
										domain: 'google-analytics.com',
										desc: 'Definido pelo Google Analytics para distinguir os usuários. Utilizado para rastrear interações dos usuários para fins de análise e expira após 24 horas.'
									}
								]
							}
						},
						{
							title: 'Segmentação e Publicidade',
							description:
								'Esses cookies são usados para tornar as mensagens publicitárias mais relevantes para você e seus interesses. A intenção é exibir anúncios que sejam relevantes e envolventes para o usuário individual e, assim, mais valiosos para editores e anunciantes terceiros.',
							linkedCategory: 'ads'
						},
						{
							title: 'Mais informações',
							description:
								'Para quaisquer dúvidas em relação à minha política de cookies e suas escolhas, por favor, <a href="#contact-page">entre em contato conosco</a>'
						}
					]
				}
			},
			es: {
				consentModal: {
					// title: 'We use cookies',
					description:
						'Utilizamos cookies para mejorar su experiencia de navegación, recordar sus preferencias y proporcionar contenido personalizado.',
					acceptAllBtn: 'Aceptar todos',
					acceptNecessaryBtn: 'Rechazar todos',
					showPreferencesBtn: 'Manage Individual preferences',
					// closeIconLabel: 'Rechazar todos and close modal',
					footer: `
							<a href="#path-to-impressum.html" target="_blank">Impressum</a>
							<a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
					`
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Aceptar todos',
					acceptNecessaryBtn: 'Rechazar todos',
					savePreferencesBtn: 'Aceptar selección actual',
					closeIconLabel: 'Cerrar modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Sus Opciones de Privacidad',
							description: `En este panel, puede expresar algunas preferencias relacionadas con el procesamiento de su información personal. Puede revisar y cambiar las elecciones expresadas en cualquier momento volviendo a abrir este panel a través del enlace proporcionado. Para negar su consentimiento a las actividades de procesamiento específicas descritas a continuación, apague los interruptores o use el botón "Rechazar todo" y confirme que desea guardar sus elecciones.`
						},
						{
							title: 'Estrictamente Necesarios',
							description:
								'Estas cookies son esenciales para el correcto funcionamiento del sitio web y no pueden ser desactivadas.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Rendimiento y Análisis',
							description:
								'Estas cookies recopilan información sobre cómo utiliza nuestro sitio web. Todos los datos están anonimizados y no pueden usarse para identificarlo.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Dominio',
									desc: 'Descripción'
								},
								body: [
									{
										name: '_ga',
										domain: 'google-analytics.com',
										desc: 'Definido pelo Google Analytics para distinguir os usuários. Utilizado para rastrear interações dos usuários para fins de análise e expira após 24 horas.'
									},
									{
										name: '_gid',
										domain: 'google-analytics.com',
										desc: 'Establecida por Google Analytics para distinguir a los usuarios. Se usa para rastrear interacciones de usuarios con fines de análisis y expira después de 24 horas.'
									}
								]
							}
						},
						{
							title: 'Segmentación y Publicidad',
							description:
								'Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para usted y sus intereses. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual y, por lo tanto, más valiosos para los editores y anunciantes de terceros.',
							linkedCategory: 'ads'
						},
						{
							title: 'Más información',
							description:
								'Para cualquier consulta relacionada con mi política de cookies y sus elecciones, por favor, <a href="#contact-page">contáctenos</a>'
						}
					]
				}
			}
		}
	}
};

export default config;
