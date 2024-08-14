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
    {/* <div className='selection'>Select Post Type
    <label>
    <input type="radio" name="choice" value="Question" /> Question
  </label>
  <label>
    <input type="radio" name="choice" value="Article" /> Article
  </label>
    </div> */}
    {/* <div className='title'>What do you want to ask or share?</div> */}
    {/* <Question />
    <Article/> */}
  </React.StrictMode>
);