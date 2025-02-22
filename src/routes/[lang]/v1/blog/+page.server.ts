import type { PageServerLoad } from './$types';
import { WPQL_QUERY, sanitizePost } from './utils';

// export const prerender = true;

export const load: PageServerLoad = async ({ fetch, url }) => {
	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
	const language = url.pathname.includes('/pt') ? 'PT' : 'ES';
	// Log language and endpoint for debugging
	// console.log('Selected language:', language);
	// console.log('Fetching from endpoint:', endpoint);
	try {
		// Log the WPQL_QUERY for better debugging
		// const query = WPQL_QUERY(language);
		// console.log('WPQL Query:', JSON.stringify(query, null, 2));

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY(language))
		});

		// Log the response status to check if the request was successful
		// console.log('Response status:', response.status);
		// console.log('Response OK:', response.ok);

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		// Log the raw response to inspect its structure
		// const jsonResponse = await response.json();
		// console.log('Raw JSON response:', JSON.stringify(jsonResponse, null, 2));

		const { data } = await response.json();
		// Ensure 'data' exists and log it
		// console.log(data);
		if (!data || !data.posts) {
			throw new Error('No posts data returned from API');
		}

		// console.log(data);

		const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));

		return {
			slug: { lang: language === 'PT' ? 'pt-BR' : 'es' },
			posts: sanitizedPosts
		};
	} catch (error) {
		// Log the error message for more context
		console.error('Error loading data:', error);

		// Handle the error gracefully, e.g., by returning an empty posts array or error message
		return {
			slug: { lang: language === 'PT' ? 'pt-BR' : 'es' },
			posts: [],
			error: 'Failed to load posts. Please try again later.'
		};
	}
};
