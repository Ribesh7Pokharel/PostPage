import React from "react";
import "./article.css";

function Article() {
  return (
    <div className="main">
      <div className="asking">What do you want to ask or share?</div>
      Title
      <input
        type="text"
        placeholder="Enter a descriptive title"
        className="titleInput"
      ></input>
      Abstract
      <input
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        className="abstractInput"
      ></input>
      Article text
      <input
        type="text"
        placeholder="Enter your article"
        className="articleInput"
      ></input>
      Tags
      <input
        type="text"
        placeholder="Please add tags to describe what your article is about e.g., Java"
        className="tagsInput"
      ></input>
      <button type="submit" className="postButton">
        Post
      </button>
    </div>
  );
}

export default Article;
