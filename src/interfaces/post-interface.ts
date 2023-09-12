export interface postInterface {
  postId: string;
  title: string;
  content: string;
  interactions: { likes: number; comments: number };
}
