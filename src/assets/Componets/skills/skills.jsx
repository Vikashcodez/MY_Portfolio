import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

// Floating Logo Component
const FloatingLogo = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1;
    meshRef.current.rotation.y += 0.01 * speed;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={[scale, scale, scale]}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const SkillsSection = () => {
  const containerRef = useRef();
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: 'Frontend Development',
      technologies: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', level: 80, color: '#3178C6' },
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'TailwindCSS', level: 90, color: '#06B6D4' },
      ]
    },
    {
      name: 'Backend Development',
      technologies: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776AB' },
        { name: 'Express', level: 85, color: '#000000' },
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'PostgreSQL', level: 75, color: '#336791' },
      ]
    },
    {
      name: 'Tools & Others',
      technologies: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Docker', level: 75, color: '#2496ED' },
        { name: 'AWS', level: 70, color: '#232F3E' },
        { name: 'Three.js', level: 75, color: '#000000' },
        { name: 'GSAP', level: 80, color: '#88CE02' },
      ]
    }
  ];

  useEffect(() => {
    // GSAP Animations for skill bars
    skills.forEach((category) => {
      category.technologies.forEach((tech, index) => {
        gsap.from(`[data-skill="${tech.name}"]`, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          },
          width: 0,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'power3.out'
        });
      });
    });

    // Heading animation
    gsap.from('.skills-heading', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {skills.flat().map((category, i) => 
            category.technologies && category.technologies.map((tech, j) => (
              <FloatingLogo
                key={tech.name}
                position={[
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 10,
                  (Math.random() - 0.5) * 5
                ]}
                color={tech.color}
                scale={0.5}
                speed={Math.random() * 0.5 + 0.5}
              />
            ))
          )}
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="skills-heading text-6xl font-bold text-white mb-6 tracking-tight">
            My Skills
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((category) => (
            <div
              key={category.name}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative"
                    onMouseEnter={() => setActiveSkill(tech.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        data-skill={tech.name}
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${tech.level}%`,
                          backgroundColor: tech.color,
                          boxShadow: activeSkill === tech.name ? `0 0 20px ${tech.color}` : 'none',
                          transform: activeSkill === tech.name ? 'scaleY(1.2)' : 'scaleY(1)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;