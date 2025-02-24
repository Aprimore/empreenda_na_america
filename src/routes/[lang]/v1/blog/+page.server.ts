// import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { WPQL_QUERY, sanitizePost } from './utils';

// export const prerender = true;
export const load: PageServerLoad = async ({ fetch, params, url }) => {
	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
	// const language = url.pathname.includes('/pt') ? 'PT' : 'ES';
	const language = params.lang;

	// if (language !== 'pt' && language !== 'es') {
	// 	// Force a redirect to a default path if language is invalid
	// 	throw redirect(302, '/pt/v1/blog'); // Redirect to the default language's blog page
	// }

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY(language.toUpperCase()))
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		const { data } = await response.json();
		if (!data || !data.posts) {
			throw new Error('No posts data returned from API');
		}

		const sanitizedPosts = data.posts.edges.map((post: any) => sanitizePost(post));
		// console.log(`SANITIZED POSTS`, sanitizedPosts);

		return {
			slug: { lang: language.toUpperCase() === 'PT' ? 'pt' : 'es' },
			posts: sanitizedPosts
		};
	} catch (error) {
		// Log the error message for more context
		console.error('Error loading data:', error);

		// Handle the error gracefully, e.g., by returning an empty posts array or error message
		return {
			slug: { lang: language.toUpperCase() === 'PT' ? 'pt' : 'es' },
			posts: [],
			error: 'Failed to load posts. Please try again later.'
		};
	}
};
