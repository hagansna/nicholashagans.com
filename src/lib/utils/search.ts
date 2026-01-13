import Fuse, { type IFuseOptions, type FuseResult } from "fuse.js";
import type { Post } from "$lib/types";

export type SearchResult = FuseResult<Post>;

const fuseOptions: IFuseOptions<Post> = {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "tags", weight: 0.2 },
    { name: "slug", weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
};

let fuseInstance: Fuse<Post> | null = null;

/**
 * Initialize the search index with posts
 */
export function initializeSearch(posts: Post[]): void {
  fuseInstance = new Fuse(posts, fuseOptions);
}

/**
 * Search posts by query
 */
export function searchPosts(query: string): SearchResult[] {
  if (!fuseInstance || !query.trim()) {
    return [];
  }
  return fuseInstance.search(query);
}

/**
 * Get the Fuse instance (useful for advanced operations)
 */
export function getSearchInstance(): Fuse<Post> | null {
  return fuseInstance;
}
