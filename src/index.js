import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Question from './Question';
import Article from './Article';
import Options from './Options';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='title'>New Post</div>
    <Options />
  </React.StrictMode>
);