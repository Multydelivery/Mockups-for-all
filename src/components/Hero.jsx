import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = ({ 
  title = "Welcome to Our App",
  subtitle = "Discover amazing features that will change your workflow",
  primaryBtnText = "Get Started",
  primaryBtnPath = "/signup",
  secondaryBtnText = "Learn More",
  secondaryBtnPath = "/about",
  imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
}) => {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <div className="hero-image-container">
        <img 
          src={imageUrl} 
          alt="Hero visual" 
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        
        <div className="hero-buttons">
          {primaryBtnText && (
            <button 
              className="btn-primary"
              onClick={() => navigate(primaryBtnPath)}
            >
              {primaryBtnText}
            </button>
          )}
          
          {secondaryBtnText && (
            <button 
              className="btn-secondary"
              onClick={() => navigate(secondaryBtnPath)}
            >
              {secondaryBtnText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;