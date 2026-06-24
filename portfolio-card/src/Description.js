import React from "react";
import "./Description.css";

function Description({ bio }) {
  return (
    <div className="description-container">
      <h3>{bio}</h3>
    </div>
  );
}

export default Description;
