import type { Post, PostMetadata } from "$lib/types";
import type { Component } from "svelte";

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Format date to a readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get all published blog posts, sorted by date (newest first)
 */
export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = [];

  const paths = import.meta.glob("/src/content/blog/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    if (file && typeof file === "object" && "metadata" in file) {
      const metadata = file.metadata as PostMetadata;

      if (metadata.published) {
        // Get raw content for reading time calculation
        const rawContent =
          "default" in file && typeof file.default === "object"
            ? "" // We'll estimate from metadata
            : "";

        posts.push({
          slug,
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          tags: metadata.tags ?? [],
          published: metadata.published,
          readingTime: calculateReadingTime(metadata.description.repeat(10)), // Rough estimate
        });
      }
    }
  }

  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get a single post by slug
 */
export async function getPost(
  slug: string,
): Promise<{ post: Post; Content: Component } | null> {
  try {
    const post = await import(`../../content/blog/${slug}.md`);

    if (!post.metadata.published) {
      return null;
    }

    return {
      post: {
        slug,
        title: post.metadata.title,
        description: post.metadata.description,
        date: post.metadata.date,
        tags: post.metadata.tags ?? [],
        published: post.metadata.published,
        readingTime: calculateReadingTime(post.metadata.description.repeat(10)),
      },
      Content: post.default,
    };
  } catch {
    return null;
  }
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}

/**
 * Get posts filtered by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.tags.includes(tag));
}
