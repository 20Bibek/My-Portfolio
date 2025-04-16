import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { PiCodesandboxLogoBold } from "react-icons/pi";
const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="about-content">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name">BIBEK DASH</h1>
        <h2 className="role typing">MERN Stack Developer</h2>
        <p className="bio">
          I'm a passionate developer with a focus on building full-stack applications using the MERN stack.
          I enjoy solving problems and crafting efficient, scalable digital solutions with modern technologies.
        </p>
        <button className="know-more" onClick={() => navigate('/experience')}>
          Know More About Me
        </button>
      </div>
      <div className="work">
        <h2>What I'm Doing</h2>
        <div className="work-container">
        <h2><PiCodesandboxLogoBold /></h2>
            <h3>Web Development</h3>
            <p>High-quality development of websites at the professional level.</p>

        </div>
      </div>
    </section>
  );
};

export default About;
