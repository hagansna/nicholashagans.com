import { getPosts } from "$lib/utils/blog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const posts = await getPosts();

  return {
    latestPosts: posts.slice(0, 3),
  };
};
