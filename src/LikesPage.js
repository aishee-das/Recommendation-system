import React, { useState } from 'react';
import { LikesCalculator } from './LikesCalculator';
import './LikesPage.css';

export default function LikesPage() {
  const [likesScore, setLikesScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);

  const finalScore = likesScore + score2 + score3 + score4;

  const [currentView, setCurrentView] = useState('bio'); // 'bio' or 'post'

  const toggleView = (direction) => {
    setCurrentView((prev) => (prev === 'bio' ? 'post' : 'bio'));
  };


  return (
    <div className="likes-page">
      {/* <div className="left-column">
        <div className="user-profile">
            <img src="/profile_pic.png" alt="Post visual" />
            <h2>Mo</h2>
            <p><strong>Followed users:</strong>@selena_swift</p>
            <p><strong>Followed hashtags:</strong> #music, #art</p>
            <p><strong>Bio:</strong> Mo enjoys doing drawing and painting in his free time. He plays the flute in the school band and is a massive fan of Selena Swift!</p>
        </div>
        <div className="post-preview">
          
          <img src="/post.png" alt="Post visual" width={300} height={400}/>
          
        </div>
      </div> */}

        
    <div className="column card profile-section">
        <h2>Pic & Post</h2>

        {currentView === 'bio' ? (
          <div className="profile-card">
            <img src="/profile_pic.png" alt="Mo" width={120} height={120} className="profile-img" />
            <h3>Mo</h3>
            <p><strong>Followed users:</strong> @selena_swift</p>
            <p><strong>Followed hashtags:</strong> #music, #art</p>
            <p><strong>Bio:</strong> Mo enjoys doing drawing and painting in his free time. He plays the flute in the school band and is a massive fan of Selena Swift!</p>
          </div>
        ) : (
          <div className="post-preview">
            <img src="/post.png" alt="Post visual" width={300} height={500} />
          </div>
        )}

        {/* Arrows + Dots */}
        <div className="carousel-controls">
          <img src="/back_arrow.png" alt="Back" onClick={toggleView} className="nav-arrow" />
          <div className="dots">
            <span className={currentView === 'bio' ? 'dot active' : 'dot'}></span>
            <span className={currentView === 'post' ? 'dot active' : 'dot'}></span>
          </div>
          <img src="/forward_arrow.png" alt="Forward" onClick={toggleView} className="nav-arrow" />
        </div>
      </div>
       

      {/* <div className="middle-column">
        <LikesCalculator onScoreChange={setFinalScore} />
      </div> */}

        <div className="column card builder-section">
            <h2>Algorithm Builder</h2>
            {/* LikesCalculator is here */}
            <LikesCalculator onScoreChange={setLikesScore} />
        </div>

        <div className="column card score-section">
        <h2>Final Score Breakdown</h2>
        <p>1. Number of likes = <strong>{likesScore.toFixed(2)}</strong></p>
        <p className="plus">+</p>
        <p>2. ... = <strong>{score2.toFixed(2)}</strong></p>
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