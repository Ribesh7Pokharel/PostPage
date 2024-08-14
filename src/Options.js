import React, {useState} from 'react';
import Question from './Question';
import Article from './Article';
import './option.css'


function Options () {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='choice'>
        Select Post Type: 
        <label>
          <input
            type="radio"
            name="question1"
            value="Question"
            onChange={handleOptionChange}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="Article"
            onChange={handleOptionChange}
          />
          Article
        </label>
        {selectedOption === 'Question' && <Question />}
        {selectedOption === 'Article' && <Article />}
    </div>
    );
};

export default Options;
