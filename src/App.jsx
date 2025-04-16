// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';
import Experience from './components/Experience';
import { useState } from 'react';
import TopBox from './components/Topbox';


function App() {
  const [dark, setDark] = useState(false);


  return (
      <Router>
        <div className="App">
        <TopBox/>
        <Routes>
          <Route path="/" element={<><About /><Skills /></>} />
          <Route path='/Experience' element={<Experience/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar toggleTheme={() => setDark(prev => !prev)} />
        </div>
      </Router>
  );
}

export default App;
