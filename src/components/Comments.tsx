import { IComments, CommentsProps } from '../types/interface';

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="commentsFlex">
      {comments.map((el: IComments) => (
        <div className="comment">
          <h2 className="comment__card">{el.name}</h2>
          <p className="comment__card">{el.email}</p>
          <div className="comment__card last">{el.body}</div>
        </div>
      ))}
    </div>
  );
};
