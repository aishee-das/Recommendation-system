import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSelector.css";

const profiles = [
  { name: "Mo" },
  { name: "User 2" },
  { name: "User 3" },
  { name: "User 4" },
  { name: "User 5" },
  { name: "User 6" },
];



const ProfileSelector = () => {
  const navigate = useNavigate();

  const selectProfile = (name) => {
    alert(`You selected ${name}`);
    navigate("/questions"); // Navigate to the question page
  };

  return (
    <div className="container">
      <h2 className="page-title">Choose your profile:</h2>
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-box">
            <div className="profile-img"></div>
            <div className="profile-name">{profile.name}</div>
            <button
              className="select-button"
              onClick={() => selectProfile(profile.name)}
            >
              Select Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelector;
