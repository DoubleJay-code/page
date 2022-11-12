import React, { useEffect, useState } from 'react';
import { IPost } from '../types/interface';

export const Post: React.FC = () => {
  const [post5, setPost5] = useState<IPost>({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
      .then((res) => res.json())
      .then((json) => {
        setPost5(json);
      });
  }, []);
  return (
    <div className="post">
      <h2 className="post__title">Post</h2>
      <div className="post__flexRow">
        <img
          src="https://inventure.com.ua/img/thumb.990.660/upload/pic2022-1H/nft-ukraine-monkey.jpg"
          alt="Something wrong"
        />
        <div className="post__block">
          <h3>{post5.title}</h3>
          <p>{`${post5.body}${post5.body}${post5.body}`}</p>
        </div>
      </div>
    </div>
  );
};
