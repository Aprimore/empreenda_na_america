import type { PageServerLoad } from './$types';
import { sanitizeHtml } from '../../utils';

export const prerender = true;

export const load: PageServerLoad = async ({ fetch, params }) => {
	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
	const { slug } = params;

	const WPQL_QUERY = {
		query: `{
            post(id: "${slug}", idType: SLUG) {
                id
                title
                content
                slug
                postId
                date
				modified
				seo {
					canonical
					metaKeywords
					opengraphAuthor
					opengraphDescription
					opengraphModifiedTime
					opengraphPublishedTime
					opengraphPublisher
					opengraphTitle
					readingTime
					title
					}
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }`
	};

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY)
		});
		if (!response.ok) throw new Error('Failed to fetch post');

		const { data } = await response.json();

		if (data.post && data.post.content) {
			data.post.content = sanitizeHtml(data.post.content);
		}

		return {
			post: data.post
		};
	} catch (error) {
		console.error('Error fetching post:', error);

		// Return a fallback in case of an error
		return {
			post: null,
			error: 'Failed to load post. Please try again later.'
		};
	}
};
