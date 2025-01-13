type Post = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content?: string;
  isSubmitted: boolean;
};

export default Post;
