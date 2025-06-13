import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelector from "./ProfileSelector";
import QuestionSelector from "./QuestionSelector";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSelector />} />
        <Route path="/questions" element={<QuestionSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
