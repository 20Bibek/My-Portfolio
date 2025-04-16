import React from 'react';
import './Projects.css';

import reactscript from './assets/reactscript.png';
import weather from './assets/weather.png';
import puma from './assets/puma.png';
import calculator from './assets/calculator.png';
import spacex from './assets/spacex.png';
import todo from './assets/todo2.png';
import milkyway from './assets/milkyway.png';
import stickynotes from './assets/stickynotes.png';

const projects = [
  {
    name: 'React Script',
    image: reactscript,
    description: 'A modern React utility toolkit for scalable web apps.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'Weather-App',
    image: weather,
    description: 'Live weather updates with location-based forecasts.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'PUMA Online',
    image: puma,
    description: 'A responsive clone of the PUMA shoe store with slider.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'Dynamic Calculator',
    image: calculator,
    description: 'A lightweight calculator built with HTML, CSS, and JS.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'SpaceX Clone',
    image: spacex,
    description: 'A beautiful replica of SpaceX site with animations.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'My To-Do',
    image: todo,
    description: 'Created a to-do list application to manage your tasks',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'Milkyway',
    image: milkyway,
    description: 'MilkyWay a milk and dairy product delivery application.',
    github: 'https://github.com/20Bibek'
  },
  {
    name: 'Sticky Notes',
    image: stickynotes,
    description: 'Create and manage sticky notes in a Kanban style.',
    github: 'https://github.com/20Bibek'
  }
];


const Projects = () => (
  <section className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      {projects.map((proj, index) => (
        <div className="card" key={index}>
          <img src={proj.image} alt={proj.name} />
          <div className="card-content">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
