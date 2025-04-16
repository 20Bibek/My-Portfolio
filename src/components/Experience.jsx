import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
     <h2>About Me</h2>
      
      <section className="education">
        <h2>🎓 Education</h2>
        <div className="training-container">
        <h3>Trident Academy of Technology(TAT), Bhubaneswar, Odisha</h3>
        <p>Computer Science Engineering (AIML)</p>
        <p>2020-2024</p>
        <p>B.Tech</p>
        </div>
      </section>

      <section className="internships">
        <h2>💼 Trainings & Internships</h2>
        <div className="training-container">
        <h3>Tetratrion Technologies</h3>
        <p>Fullstack Web Developer Intern</p>
        <p>01/2024-05/2024</p>
        <p>Created a user friendly web application to make connection between local sellers/vendors/suppliers with the world. Purchase products from different wholesalers from multiple states.Integrated with in-built invoice generator.</p>
        </div>
        <div className="training-container">
        <h3>Cognifyz Technologies</h3>
        <p>Frontend Developer Intern(Freelance)</p>
        <p>10/2023-12/2023</p>
        <p>Designed and developed multiple dynamic and responsive websites using MERN stack. Designed multiple websites with animations and unique UI design. Explored ways to visualize GitHub collaboration in a classroom setting.</p>
        </div>

      </section>
    </div>
  );
};

export default Experience;
