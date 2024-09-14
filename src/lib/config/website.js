import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_TELEGRAM_USERNAME,
	PUBLIC_TIKTOK_USERNAME,
	PUBLIC_TWITTER_USERNAME,
	PUBLIC_TWITTER_USER_ID,
	PUBLIC_WIRE_USERNAME
} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'Leila Duarte',
	ogLanguage: 'en',
	siteLanguage: 'en',
	siteTitle: 'My Menthor',
	siteShortTitle: 'My Menthor - Your company on another management level',
	description:
		'Use My Menthor as your management compass and navigate towards success, from structuring your business model to executing the strategy.',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#fff',
	themeColor: '#fff',
	contactEmail: PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
	telegramUsername: PUBLIC_TELEGRAM_USERNAME,
	tiktokUsername: PUBLIC_TIKTOK_USERNAME,
	twitterUsername: PUBLIC_TWITTER_USERNAME,
	twitterUserId: PUBLIC_TWITTER_USER_ID,
	wireUsername: PUBLIC_WIRE_USERNAME
};

export { website as default };
