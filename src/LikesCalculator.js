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
      <h2>1. Choose a weight (0 to 10) for number of likes.</h2>
      <input
        className="slider"
        type="range"
        min="1"
        max="10"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />
      <div className="slider-label">Importance: {weight}/10</div>

      <h2>2. How many likes does the post have?</h2>
<input
  className="number-input"
  type="number"
  placeholder="Enter number"
  value={likes === null ? '' : likes}
  onChange={(e) =>
    setLikes(e.target.value === '' ? null : Number(e.target.value))
  }
/>


      <h3>3. Calculated score:</h3>
      <div className="score-breakdown">
        <span className="fraction">
            <span className="boxed top">{weight}</span>
            <span className="line"></span>
            <span className="bottom">10</span>
        </span>
        <span className="math-symbol">×</span>
        <span className="boxed">{likes}</span>
        <span className="math-symbol">=</span>
        <strong>{score.toFixed(2)}</strong>
        </div>


    </div>
  );
}