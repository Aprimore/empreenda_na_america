export const trailingSlash = 'always';
// export const prerender = false;
// export const ssr = false;
// export const csr = true;
export const load = async ({ url, params }: any) => {
	return {
		url: url,
		slug: params
	};
};
