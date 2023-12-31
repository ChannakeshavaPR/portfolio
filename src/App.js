import React from 'react';
import "./index.css";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Projects from './Routes/Projects';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Projects />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
