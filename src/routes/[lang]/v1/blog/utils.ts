import xss from 'xss';

interface FeaturedImageNode {
	url: string;
	altText: string;
}

interface Language {
	code: string;
	locale: string;
}

interface PostNode {
	id: string;
	excerpt: string;
	title: string;
	slug: string;
	date: string;
	databaseId: number;
	featuredImage: { node: FeaturedImageNode };
	language: Language;
}

interface Post {
	node: PostNode;
}

export const WPQL_QUERY = (language: string) => ({
	query: `
    query posts($language: LanguageCodeFilterEnum!) {
      posts(where: {language: $language}) {
        edges {
          node {
            id
            excerpt
            title
            slug
            date
            databaseId
            featuredImage {
                    node {
                        sourceUrl
                    }
                }
            language {
              code
              locale
            }
          }
        }
      }
      generalSettings {
        title
        description
      }
    }
  `,
	variables: {
		language
	}
});

export const sanitizePost = (post: Post) => {
	return {
		...post.node,
		title: xss(post.node.title),
		excerpt: xss(post.node.excerpt)

		// Example sanitization
	};
};

export const sanitizeHtml = (html: string): string => {
	return xss(html);
};
