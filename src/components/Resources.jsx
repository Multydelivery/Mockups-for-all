// Components/Resources.jsx
import React from 'react';
import './Resources.css';

const resources = [
  {
    title: "Mockup Guidelines",
    description: "Learn best practices for creating and using mockups effectively",
    icon: "📝",
    url: "#",
    category: "Tutorial"
  },
  {
    title: "Design Templates",
    description: "Free starter kits for Figma, Sketch, and Adobe XD",
    icon: "🎨",
    url: "#",
    category: "Assets"
  },
  {
    title: "Tutorial Videos",
    description: "Step-by-step video guides for popular design tools",
    icon: "📹",
    url: "#",
    category: "Learning"
  },
  {
    title: "Developer Handoff",
    description: "Essential plugins for smooth designer-developer workflow",
    icon: "🤝",
    url: "#",
    category: "Workflow"
  },
  {
    title: "Color Palettes",
    description: "Curated color schemes for your next project",
    icon: "🌈",
    url: "#",
    category: "Inspiration"
  },
  {
    title: "Typography Pairs",
    description: "Perfect font combinations for any design",
    icon: "✒️",
    url: "#",
    category: "Assets"
  }
];

export const Resources = () => {
  return (
    <section className="resources-section">
      <div className="resources-header">
        <h2>Free <span className="highlight">Resources</span></h2>
        <p>Essential tools and guides to boost your design workflow</p>
      </div>
      
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <a 
            href={resource.url} 
            key={index} 
            className="resource-card"
            data-category={resource.category.toLowerCase()}
          >
            <div className="resource-icon">{resource.icon}</div>
            <div className="resource-content">
              <span className="resource-category">{resource.category}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
            <div className="resource-arrow">→</div>
          </a>
        ))}
      </div>
      
      <div className="resources-cta">
        <button className="btn-secondary">View All Resources</button>
      </div>
    </section>
  );
};