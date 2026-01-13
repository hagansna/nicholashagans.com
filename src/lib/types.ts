export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  readingTime: string;
}

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}
