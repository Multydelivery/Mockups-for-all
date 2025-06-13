// Components/NewsletterCTA.jsx
import React, { useState } from 'react';
import './NewsletterCTA.css';

export const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="newsletter-cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Get Weekly <span className="highlight">Design Resources</span></h2>
            <p>Join 15,000+ designers receiving our curated mockups, templates, and industry insights</p>
          </div>
          
          {isSuccess ? (
            <div className="success-message">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
              <span>Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your best email"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={isSubmitting ? 'submitting' : ''}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              <p className="privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
        
        <div className="cta-image">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Designer working on laptop" 
          />
          <div className="testimonial-bubble">
            <div className="bubble-content">
              <p>"These weekly resources saved me 10+ hours every month!"</p>
              <div className="author">
                <span className="name">Sarah K.</span>
                <span className="title">UI Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};