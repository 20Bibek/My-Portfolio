import React from 'react';
import './Skills.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiGit, SiGithub } from 'react-icons/si';
import { FaPuzzlePiece, FaClock, FaUsers, FaComments } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'React.js', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'VS Code', icon: <VscVscode /> },
  ];

  const softskills = [
    { name: 'Problem Solving', icon: <FaPuzzlePiece /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Leadership', icon: <FaUsers /> },
    { name: 'Group Discussion', icon: <FaComments /> },
  ];

  return (
    <section className="skills">
      <h2>Skills & Tools</h2>
      <ul className="icon-list">
        {skills.map(skill => (
          <li key={skill.name}>
            <div className="icon-box">{skill.icon}</div>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>

      <h2>Soft Skills</h2>
      <ul className="icon-list">
        {softskills.map(skill => (
          <li key={skill.name}>
            <div className="icon-box">{skill.icon}</div>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
