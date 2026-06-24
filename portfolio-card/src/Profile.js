import React from "react";
import "./Profile.css";

function Profile({ image, name, title }) {
  return (
    <div className="profile-container">
      <img src={image} alt="profile" />

      <div className="profile-description">
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Profile;
