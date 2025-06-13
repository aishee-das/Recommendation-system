import React from "react";
import "./ProfileSelector.css";

const profiles = [
  { name: "Mo" },
  { name: "Aliyah" },
  { name: "Suki" },
  { name: "Ruaridh" },
  { name: "Lian" },
  { name: "User 6" },
];

const ProfileSelector = () => {
  const selectProfile = (name) => {
    alert(`You selected ${name}`);
  };

  return (
    <div>
      {/* Updated Navbar */}
      <div className="navbar">
        <div className="logo">Home</div>
        <div className="nav-links">
          <a href="#">How to Play</a>
          <a href="#">Resources</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h2>Choose your profile:</h2>
        <div className="profile-grid">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="profile-box"
              onClick={() => selectProfile(profile.name)}
            >
              <div className="profile-img"></div>
              <div className="profile-name">{profile.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelector;