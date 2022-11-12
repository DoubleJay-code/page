import React, { useState, useEffect } from 'react';
import './App.scss';
import { Post } from './components/Post';
import { Comments } from './components/Comments';
import { IComments } from './types/interface';

const App: React.FC = () => {
  const [comments, setComments] = useState<IComments[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setComments(json);
      });
  }, []);
  return (
    <div className="App">
      <Post />
      <Comments comments={comments} />
    </div>
  );
};

export default App;
