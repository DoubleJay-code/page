import React from 'react';

export const Post: React.FC = () => {
  return (
    <div className="post">
      <h2 className="post__title">Post</h2>
      <div className="post__flexRow">
        <img
          src="https://inventure.com.ua/img/thumb.990.660/upload/pic2022-1H/nft-ukraine-monkey.jpg"
          alt="Something wrong"
        />
        <div>
          <h3>title</h3>
          <p>body</p>
        </div>
      </div>
    </div>
  );
};
