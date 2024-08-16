import React from "react";
import "./Question.css";

function Question() {
  return (
    <div className="main">
      <div className="asking">What do you want to ask or share?</div>
      Title
      <input className="titleInput"
        type="text"
        placeholder="Start your question with how, what, why, etc."
      ></input>
      Describe your problem
      <input type="text" className="articleInput"></input>
      Tags
      <input
        type="text"
        placeholder="Please add tags to describe what your article is about e.g., Java"
        className="qTagsInput"
      ></input>
      <button type="submit" className="postButton">
        Post
      </button>
    </div>
  );
}

export default Question;
