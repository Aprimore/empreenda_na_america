import type { PageServerLoad } from './$types';
import { sanitizeHtml } from '../../utils';

export const prerender = true;

// export const entries = async () => {
// 	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
// 	const WPQL_QUERY = {
// 		query: `{
//             posts {
//                 nodes {
//                     slug
//                 }
//             }
//         }`
// 	};

// 	try {
// 		const response = await fetch(endpoint, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(WPQL_QUERY)
// 		});

// 		if (!response.ok) throw new Error('Failed to fetch posts');

// 		const { data } = await response.json();

// 		const slugs = data.posts.nodes.map((post) => post.slug);

// 		return slugs.map((slug) => ({
// 			lang: 'pt',
// 			id: slug, // or whatever unique identifier you're using
// 			slug: slug
// 		}));
// 	} catch (error) {
// 		console.error('Error fetching posts:', error);
// 		return [];
// 	}
// };

export const load: PageServerLoad = async ({ fetch, params }) => {
	// console.log(params);
	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
	// console.log(params);
	// console.log(endpoint);
	const { slug } = params;
	// console.log(slug);

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
			
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }`
	};

	// seo {
	// 			canonical
	// 			metaKeywords
	// 			opengraphAuthor
	// 			opengraphDescription
	// 			opengraphModifiedTime
	// 			opengraphPublishedTime
	// 			opengraphPublisher
	// 			opengraphTitle
	// 			readingTime
	// 			title
	// 			}

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY)
		});
		if (!response.ok) throw new Error('Failed to fetch post');

		// const jsonResponse = await response.json();
		// console.log('Full API Response:', jsonResponse);

		const { data } = await response.json();
		// console.log(data);
		if (data.post && data.post.content) {
			data.post.content = sanitizeHtml(data.post.content);
		}

		// console.log(data.post);

		return {
			post: data.post,
			lang: data.lang,
			pathname: data.pathname
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
