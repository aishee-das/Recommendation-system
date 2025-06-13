import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LikesPage.css';

export default function PromptSelectionPage() {
  const [likesScore, setLikesScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const navigate = useNavigate();
  const finalScore = likesScore + score2 + score3 + score4;

  const prompts = [
    "Do they follow any of the hashtags?",
    "Has anyone they follow liked the post?",
    "How recent is the post?",
    "Has the content paid to be promoted?"
  ];

  return (
    <div className="likes-page">
      {/* Prompt Selector */}
      <div className="column card builder-section">
        <h2>What Next?</h2>
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className={`prompt-button ${selectedPrompt === index ? 'selected' : ''}`}
            onClick={() => setSelectedPrompt(index)}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Final Score Section */}
      <div className="column card score-section">
        <h2>Final Score Breakdown</h2>
        <p>1. Number of likes = <strong>{likesScore.toFixed(2)}</strong></p>
        <p className="plus">+</p>
        <p>2. Follows poster = <strong>{score2.toFixed(2)}</strong></p>
        <p className="plus">+</p>
        <p>3. ... = <strong>{score3.toFixed(2)}</strong></p>
        <p className="plus">+</p>
        <p>4. ... = <strong>{score4.toFixed(2)}</strong></p>
        <hr />
        <h3>Final Score: <span className="final-score">{finalScore.toFixed(2)}</span></h3>
      </div>
    </div>
  );
}
