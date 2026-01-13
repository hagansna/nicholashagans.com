import { getPosts, getAllTags } from "$lib/utils/blog";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const posts = await getPosts();
  const tags = await getAllTags();

  return {
    posts,
    tags,
  };
};
