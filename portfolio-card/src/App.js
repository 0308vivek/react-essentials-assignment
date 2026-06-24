import React, { useState } from "react";
import Profile from "./Profile";
import Description from "./Description";
import Skills from "./Skills";
import "./App.css";
import {
  FiMoon,
  FiHeart,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";

function App() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Cyber Security",
  ];

  const profiles = [
    {
      image: "./photo.jpg",
      name: "Vivek Prasad",
      title: "Full Stack & Cyber Security Engineer",
      bio: "I design and develop secure, high-performance web applications from front-end interfaces to back-end systems.",
      skills: ["React", "JavaScript", "Node.js", "Express"],
    },

    {
      image: "./image2.avif",
      name: "Tony Stark",
      title: "Software Engineer",
      bio: "Passionate about building scalable software and solving complex engineering challenges.",
      skills: ["React", "TypeScript", "AWS", "Docker"],
    },

    {
      image: "./image3.avif",
      name: "Bruce Wayne",
      title: "Cyber Security Analyst",
      bio: "Focused on application security, penetration testing, and infrastructure protection.",
      skills: ["Security", "Linux", "Networking", "Python"],
    },

    {
      image: "./image4.jpg",
      name: "Peter Parker",
      title: "Frontend Developer",
      bio: "Creating modern, responsive, and user-friendly web experiences.",
      skills: ["React", "CSS", "JavaScript", "Figma"],
    },
  ];

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [theme, setTheme] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(0);

  const handleImagesIncre = () => {
    setCurrentProfile((currentProfile + 1) % profiles.length);
  };

  const handleImagesDecre = () => {
    setCurrentProfile((currentProfile - 1 + profiles.length) % profiles.length);
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
    setLiked(true);
  };

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  const handleRequest = () => {
    alert("Request Sent");
  };

  return (
    <div className="main-container">
      <div className={theme ? "card-dark" : "card"}>
        <Profile
          image={profiles[currentProfile].image}
          name={profiles[currentProfile].name}
          title={profiles[currentProfile].title}
        />

        <Description bio={profiles[currentProfile].bio} />

        <Skills skills={profiles[currentProfile].skills} />
        <div className="actions">
          <button className="theme-btn" onClick={handleThemeChange}>
            {theme ? <MdOutlineLightMode /> : <FiMoon />}
            {theme ? "Toggle Light Mode" : "Toggle Dark Mode"}
          </button>

          <button className="arrow-btn" onClick={handleImagesDecre}>
            <FiChevronLeft />
          </button>

          <button className="arrow-btn" onClick={handleImagesIncre}>
            <FiChevronRight />
          </button>

          <span className="photo-count">
            {currentProfile + 1} / {profiles.length}
          </span>

          <button
            className={liked ? "like-btn liked" : "like-btn"}
            onClick={handleLike}
          >
            <FiHeart />
            {likeCount}
          </button>

          <button className="contact-btn" onClick={handleRequest}>
            <FiMail />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
