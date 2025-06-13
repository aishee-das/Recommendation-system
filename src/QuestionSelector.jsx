import React from "react";
import "./QuestionSelector.css";

const questions = [
  "Do they follow the poster?",
  "Do they follow any of the hashtags?",
  "Has anyone they follow liked the post?",
  "How recent is the post?",
  "Has the content paid to be promoted?",
];

const QuestionSelector = () => {
  return (
    <div className="question-page">

      <div className="question-grid">
        {/* Left column: Questions */}
        <div className="question-list">
          <h2>What next?</h2>
          {questions.map((q, index) => (
            <button className="question-button" key={index}>
              {q}
            </button>
          ))}
        </div>

        {/* Right column: Formula-style layout */}
        <div className="score-panel">
          <p><strong>1. Number of likes</strong></p>
          <div className="score-placeholder"></div>
          <p>+</p>
          <p><strong>2.</strong></p>
          <p>+</p>
          <p><strong>3.</strong></p>
          <p>+</p>
          <p><strong>4.</strong></p>
          <p>=</p>
          <p><strong>Final score:</strong></p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSelector;
