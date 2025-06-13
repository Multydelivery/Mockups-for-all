import React, { useState, useEffect } from 'react';
import './CreatorSpotlight.css';

const creators = [
  {
    id: 1,
    name: "Sarah Miller",
    role: "UI/UX Designer",
    bio: "Professional designer sharing mockups since 2018. Specializes in mobile app interfaces and design systems.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    portfolio: "#",
    stats: {
      mockups: 24,
      downloads: "8.7k",
      rating: 4.9
    },
    mockups: [
      {
        id: 1,
        title: "Fitness App",
        thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      },
      {
        id: 2,
        title: "Finance Dashboard",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      },
      {
        id: 3,
        title: "E-commerce",
        thumbnail: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
      }
    ]
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Product Designer",
    bio: "Creating beautiful digital experiences with a focus on user-centered design and accessibility.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    portfolio: "#",
    stats: {
      mockups: 18,
      downloads: "6.2k",
      rating: 4.8
    },
    mockups: [
      {
        id: 1,
        title: "Travel App",
        thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      },
      {
        id: 2,
        title: "Music Player",
        thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        id: 3,
        title: "Weather App",
        thumbnail: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Visual Designer",
    bio: "Specializing in branding and visual identity with a clean, modern aesthetic for digital products.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    portfolio: "#",
    stats: {
      mockups: 32,
      downloads: "12.4k",
      rating: 4.9
    },
    mockups: [
      {
        id: 1,
        title: "Food Delivery",
        thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      },
      {
        id: 2,
        title: "Social Media",
        thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      },
      {
        id: 3,
        title: "Health Tracker",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      }
    ]
  }
];

export const CreatorSpotlight = () => {
  const [currentCreatorIndex, setCurrentCreatorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentCreatorIndex(prev => (prev + 1) % creators.length);
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentCreatorIndex(prev => (prev - 1 + creators.length) % creators.length);
  };

  const handleNext = () => {
    setCurrentCreatorIndex(prev => (prev + 1) % creators.length);
  };

  const currentCreator = creators[currentCreatorIndex];

  return (
    <section 
      className="creator-spotlight"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="spotlight-container">
        <button className="slider-arrow left" onClick={handlePrev}>&#10094;</button>
        
        <div className="creator-slide">
          <div className="creator-profile">
            <div className="avatar-container">
              <img 
                src={currentCreator.avatar} 
                alt={currentCreator.name} 
                className="creator-avatar"
              />
              <div className="badge">Featured</div>
            </div>
            <div className="creator-info">
              <span className="section-tag">Creator Spotlight</span>
              <h2>Meet <span className="highlight">{currentCreator.name}</span></h2>
              <p className="creator-role">{currentCreator.role}</p>
              <p className="creator-bio">{currentCreator.bio}</p>
              <div className="creator-stats">
                <div className="stat">
                  <span className="stat-number">{currentCreator.stats.mockups}</span>
                  <span className="stat-label">Mockups</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{currentCreator.stats.downloads}</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{currentCreator.stats.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
              <button className="btn-portfolio">View Portfolio</button>
            </div>
          </div>

          <div className="creator-showcase">
            <h3 className="showcase-title">{currentCreator.name}'s Work</h3>
            <div className="showcase-grid">
              {currentCreator.mockups.map(mockup => (
                <div key={mockup.id} className="showcase-item">
                  <img 
                    src={mockup.thumbnail} 
                    alt={mockup.title} 
                    className="showcase-thumbnail"
                  />
                  <div className="showcase-overlay">
                    <span>{mockup.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="slider-arrow right" onClick={handleNext}>&#10095;</button>
      </div>
      
      <div className="creator-dots">
        {creators.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentCreatorIndex ? 'active' : ''}`}
            onClick={() => setCurrentCreatorIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};