// Components/MockupGrid.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MockupGrid.css';

const mockups = [
  { 
    id: 1, 
    title: 'Mobile App', 
    category: 'Mobile', 
    thumbnail: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', 
    downloads: 1243 
  },
  { 
    id: 2, 
    title: 'Dashboard', 
    category: 'Web', 
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80', 
    downloads: 892 
  },
  { 
    id: 3, 
    title: 'E-commerce', 
    category: 'Web', 
    thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80', 
    downloads: 1567 
  },
  { 
    id: 4, 
    title: 'Smart Watch', 
    category: 'Device', 
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1699&q=80', 
    downloads: 2105 
  },
  { 
    id: 5, 
    title: 'Landing Page', 
    category: 'Web', 
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80', 
    downloads: 1789 
  },
  { 
    id: 6, 
    title: 'Mobile UI Kit', 
    category: 'Mobile', 
    thumbnail: 'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80', 
    downloads: 2310 
  },
];

export const MockupGrid = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const requestRef = useRef();
  const animationSpeed = 0.4; // Adjust speed (lower = faster)

  const animate = useCallback(() => {
    if (!isHovered) {
      setScrollPosition(prev => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const contentWidth = containerRef.current?.scrollWidth || 0;
        const maxScroll = contentWidth - containerWidth;
        
        // Reset position when reaching end to create infinite loop
        if (prev >= maxScroll) {
          return 0;
        }
        return prev + animationSpeed;
      });
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [animationSpeed, isHovered]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <section className="mockup-grid">
      <div className="section-header">
        <h2>Popular <span className="highlight">Mockups</span></h2>
        <p>Curated designs for your next project</p>
      </div>
      
      <div 
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <div 
          className="grid-container"
          style={{ 
            transform: `translateX(-${scrollPosition}px)`,
            width: 'fit-content'
          }}
        >
          {/* Double the mockups for seamless looping */}
          {[...mockups, ...mockups].map((mockup, index) => (
            <div 
              key={`${mockup.id}-${index}`} 
              className="mockup-card"
            >
              <div 
                className="thumbnail" 
                style={{ backgroundImage: `url(${mockup.thumbnail})` }} 
              />
              <div className="meta">
                <span className="category">{mockup.category}</span>
                <h3>{mockup.title}</h3>
                <span className="downloads">{mockup.downloads.toLocaleString()} downloads</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};