<script lang="ts">
	import { CookieManager } from '@boxfish-studio/sveltekit-cookie-manager';
	import type { SKCMConfiguration } from '@boxfish-studio/sveltekit-cookie-manager';

	const configuration: SKCMConfiguration = {
		disclaimer: {
			title: 'This website uses cookies',
			body: 'By using this site, you agree with our use of cookies',
			policyText: 'Read our Cookie Policy',
			policyUrl: '/privacy-policy',
			acceptButtonText: 'Accept Additional Cookies',
			rejectButtonText: 'Reject Additional Cookies'
		},
		services: {
			googleAnalyticsUniversalId: 'UA-XXXXXXXX', // Replace with your GA Universal ID
			googleAnalytics4Id: 'G-XXXXXXXX', // Replace with your GA4 ID
			adCookiesEnabled: true, // Enable or disable ad cookies
			customNecessaryCookies: [
				{
					name: 'example_cookie',
					provider: 'Example Provider',
					providerUrl: 'https://example.com',
					purpose: 'To enhance user experience',
					expiry: '30 days',
					type: 'HTTP'
				}
			]
		},
		theme: {
			primary: '#14cabf',
			dark: '#131f37',
			medium: '#b0bfd9',
			light: '#fff'
		}
	};
</script>

<CookieManager {configuration} />
