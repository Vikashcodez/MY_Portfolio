// src/assets/Components/Hero/Hero.jsx

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesComponent from '../bg/bg';
import dp from '../../Images/mee.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <ParticlesComponent />
      <div className="relative z-10 container mx-auto flex items-center justify-between p-6">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            My Name is Vikash
          </h1>
          <h2 className="text-2xl md:text-4xl">
            <Typewriter
              words={[
                'I am a Frontend Developer',
                'I am a UI/UX Designer',
                'I am a Freelancer',
              ]}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-lg md:text-xl max-w-md">
            I am a passionate freelancer with experience in frontend development and UI/UX design. I love creating beautiful, functional, and user-friendly websites and applications. Let's work together to bring your ideas to life!
          </p>
        </div>
        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <img
            src={dp}
            alt="Profile"
            className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
