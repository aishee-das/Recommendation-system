import React, { useState, useEffect } from 'react';
import './LikesCalculator.css';

export function LikesCalculator({ onScoreChange }) {
  const [weight, setWeight] = useState(3);
  const [likes, setLikes] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const calcScore = (weight / 10) * likes;
    setScore(calcScore);
    onScoreChange(calcScore);
  }, [weight, likes, onScoreChange]);

  return (
    <div className="likes-calculator">
      <h2>Q. Number of Likes</h2>
      <input
        className="slider"
        type="range"
        min="1"
        max="10"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <div className="slider-label">Importance: {weight}/10</div>

      <h2>Q. How many likes does the post have?</h2>
      <input
        className="number-input"
        type="number"
        value={likes}
        onChange={(e) => setLikes(Number(e.target.value))}
      />

      <h3>Score:</h3>
      <div className="score-breakdown">
        ({weight} / 10) * {likes} = <strong>{score.toFixed(2)}</strong>
      </div>
    </div>
  );
}