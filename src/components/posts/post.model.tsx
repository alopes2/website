type Post = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content?: string;
  isFeatured: boolean;
};

export default Post;
