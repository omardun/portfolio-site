import React from 'react';
import "./index"
import Homepage from './routes/Homepage';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
      </>
    </div>
  );
}

export default App;
