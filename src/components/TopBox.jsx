import React, { useState } from 'react';
import './TopBox.css';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const TopBox = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`top-box ${expand ? 'expanded' : ''}`}>
      <div className="top-header">
        <img src="/src/assets/profileimg.jpg" alt="Bibek" />
        <button onClick={() => setExpand(!expand)}>
          <MdKeyboardDoubleArrowDown />
        </button>
      </div>

      <div className="top-content">
        <p>📍 Bengaluru, Karnataka, India</p>
        <hr />

        <div className="socials">
          <div className="social-link">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/bibek-dash" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="social-link">
            <FaGithub className="icon" />
            <a href="https://github.com/20Bibek" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="social-link">
            <BiLogoGmail className="icon" />
            <a href="mailto:dashbibek18@gmail.com">
              Gmail
            </a>
          </div>
        </div>

        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default TopBox;
