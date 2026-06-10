import React from 'react'
import './Skills.css'

function Skills({ skills }) {
  return (
    <div className="skills-container">
      <h3>Skills</h3>

      <div className="skills-list">
        {skills.map((skill) => (
          <span className="skill-badge" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills