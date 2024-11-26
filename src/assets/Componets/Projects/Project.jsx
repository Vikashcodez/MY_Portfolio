import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../Images/netflixcl.jpg'

const WorksSection = () => {
  const works = [
    {
      id: 1,
      image: img1,
      title: "Snowy Mountains",
      description: "Majestic winter landscapes captured in their purest form."
    },
    {
      id: 2,
      image: "/api/placeholder/400/600",
      title: "Ocean Vortex",
      description: "Mesmerizing patterns of swirling ocean waters."
    },
    {
      id: 3,
      image: "/api/placeholder/400/600",
      title: "Dancing Dunes",
      description: "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
      tags: ["Photography", "Art Direction"]
    },
    {
      id: 4,
      image: "/api/placeholder/400/600",
      title: "Coastal Formations",
      description: "Dramatic rock formations meeting the vast ocean."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="relative z-20 text-center mb-12 bg-black/30 p-4 rounded-md">
        <h1 className="text-4xl font-bold mb-4 text-white">My Works</h1>
        <p className="text-gray-200">
          Witness the beauty of nature through our lens,
          <br />
          as we showcase stunning landscapes that evoke wonder and appreciation for the environment.
        </p>
      </div>

      {/* Works Gallery */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Gallery */}
        <div className="flex gap-4 overflow-hidden transition-transform duration-700 ease-in-out">
          {works.map((work, index) => {
            const position = (index - currentIndex + works.length) % works.length;
            const isVisible = position >= 0 && position < 4;
            
            return (
              <div
                key={work.id}
                className={`relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden transition-opacity transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{
                  transform: `translateX(${-100 * currentIndex}%)`,
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{work.description}</p>
                  
                  {/* Tags */}
                  {work.tags && (
                    <div className="flex gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-gray-800/50 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
