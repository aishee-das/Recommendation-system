import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelector from "./ProfileSelector";
import QuestionSelector from "./QuestionSelector";
import FollowHashtags from "./FollowHashtags";
// import React from "react";
// import "./App.css";
// import ProfileSelector from "./ProfileSelector";

// function App() {
//   return (
//     <div className="App">
//       <ProfileSelector />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProfileSelector from './ProfileSelector';
import LikesPage from './LikesPage';
// import HowToPlay from './pages/HowToPlay';
import Layout from './component/Layout';
import FollowPosterPage from './FollowPosterPage';
import FollowedUserLikedPage from './FollowedUserLikedPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfileSelector />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/follow-poster" element={<FollowPosterPage />} />
          {/* <Route path="/how-to-play" element={<HowToPlay />} /> */}
          <Route path="/questions" element={<QuestionSelector />} />
          <Route path="/hashtags" element={<FollowHashtags />} />
          <Route path="/liked-by-followed-users" element={<FollowedUserLikedPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

