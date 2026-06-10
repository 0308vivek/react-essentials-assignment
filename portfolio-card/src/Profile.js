import React from "react";
import "./Profile.css";

function Profile({image}) {
  return (
    <div className="profile-container">
      <img src={image} alt="Profile"></img>
      <div className="profile-description">
        <h1>Vivek Prasad</h1>
        <h3>Full stack & Cyber Security Engineer</h3>
        
      </div>
    </div>
  );
}

export default Profile;
