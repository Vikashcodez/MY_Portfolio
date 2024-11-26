// src/App.jsx

import React from 'react';
import Navbar from './assets/Componets/Navbar/Navbar';
import Hero from './assets/Componets/Hero/Hero';
import Foot from './assets/Componets/Footer/Footer'
import Skill from './assets/Componets/skills/skills'
import Pro from './assets/Componets/Projects/Project'
import Con from './assets/Componets/Contact/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <Pro />
      <Con />
      <Foot />
    </>
  );
}

export default App;
