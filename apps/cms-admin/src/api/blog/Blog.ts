export type Blog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  author: string | null;
  publishDate: Date | null;
  url: string | null;
};
