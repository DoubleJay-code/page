export interface IPost {
  title?: string;
  body?: string;
}

export interface IComments {
  name?: string;
  email?: string;
  body?: string;
}

export interface CommentsProps {
  comments: object[];
}
