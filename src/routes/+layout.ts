import { getPosts } from "$lib/utils/blog";

export const prerender = true;

export async function load() {
  const posts = await getPosts();
  return { posts };
}
