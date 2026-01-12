import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '$lib/utils/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const result = await getPost(params.slug);

	if (!result) {
		throw error(404, 'Post not found');
	}

	// Get all posts for prev/next navigation
	const allPosts = await getPosts();
	const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);

	const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
	const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

	return {
		post: result.post,
		Content: result.Content,
		prevPost,
		nextPost
	};
};

// Generate entries for all blog posts
export const entries = async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ slug: post.slug }));
};
