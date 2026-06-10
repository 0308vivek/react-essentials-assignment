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

  const photos = [
    "./photo.jpg",
    "./image2.avif",
    "./image3.avif",
    "./image4.jpg",
  ];

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [theme, setTheme] = useState(false);
  const [images, setImages] = useState(0);

  const handleImagesIncre = () => {
    if (images < photos.length - 1) {
      setImages(images + 1);

    }
  };

  const handleImagesDecre = () => {
    if (images > 0) {
      setImages(images - 1);
    }
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
        <Profile image={photos[images]} />
        <Description />
        <Skills skills={skills} />
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

          <span className="photo-count">{images+1}/4</span>

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
