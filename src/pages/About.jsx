import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img 
          src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
          alt="Team working on app development" 
        />
      </div>
      <div className="about-content">
        <h2>About <span className="highlight">Our App</span></h2>
        <p>
          We're a passionate team dedicated to creating intuitive digital experiences 
          that solve real-world problems. Our mockup app was born from the need to 
          streamline the design process for developers and designers alike.
        </p>
        <p>
          With over <span className="highlight">5 years</span> of combined experience in UX/UI design and 
          frontend development, we've crafted a tool that helps you visualize 
          your ideas quickly and collaborate effectively with your team.
        </p>
        <p>
          Our mission is to empower creators by removing technical barriers and 
          letting you focus on what matters most - bringing your vision to life.
        </p>
      </div>
    </div>
  );
}

export default About;