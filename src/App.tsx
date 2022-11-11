import React from 'react';
import './App.scss';
import { Post } from './components/Post';

const App: React.FC = () => {
  return (
    <div className="App">
      <Post />
    </div>
  );
};

export default App;
