import React, {useState} from 'react';
import Question from './Question';
import Article from './Article';


const Options = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        Select Post Type: 
      <form>
        <label>
          <input
            type="radio"
            name="question1"
            value="Question"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            name="question1"
            value="Article"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Article
        </label>
      </form>

      {selectedOption === 'Question' && <Question />}
      {selectedOption === 'Article' && <Article />}
    </div>
  );
};

export default Options;
