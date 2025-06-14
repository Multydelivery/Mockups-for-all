// Components/Footer.jsx
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-about">
            <h3 className="footer-logo">Mockup<span>Hub</span></h3>
            <p className="footer-about-text">
              The best resource for designers and developers to find high-quality mockups for their projects.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="https://dribbble.com" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm9.14-15.25c-1.05-4.89-5.5-8.33-10.48-8.33-1.67 0-3.26.4-4.67 1.12.14.1.28.22.43.22.65 0 .23-.09.47-.26.7-.17.22-.4.35-.66.35-.07 0-.15 0-.22-.03-1.8-.8-3.7-1.22-5.7-1.22-1.32 0-2.6.2-3.8.58-.1.03-.2.05-.3.05-.5 0-.24-.1-.47-.26-.7-.17-.22-.4-.35-.66-.35H.96c-.26 0-.49.13-.66.35-.17.23-.26.46-.26.7 0 .17.04.34.1.5 1.58 5.74 6.54 9.93 12.38 9.93 1.55 0 3.03-.3 4.4-.85.44.85.7 1.82.7 2.85 0 1.5-.6 2.85-1.57 3.85.97.4 2.03.62 3.13.62 5.5 0 9.96-4.46 9.96-9.96 0-.2 0-.4-.02-.6zM12 10.5c-3.87 0-7-3.13-7-7 0-.24.1-.47.26-.7.17-.22.4-.35.66-.35h1.45c.26 0 .49.13.66.35.17.23.26.46.26.7 0 2.76 2.24 5 5 5 .24 0 .47-.1.7-.26.22-.17.35-.4.35-.66V3.45c0-.26-.13-.49-.35-.66-.23-.17-.46-.26-.7-.26-3.87 0-7 3.13-7 7 0 .24.1.47.26.7.17.22.4.35.66.35h7.09c.26 0 .49-.13.66-.35.17-.23.26-.46.26-.7 0-2.76-2.24-5-5-5z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.055.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.18a4.017 4.017 0 1 1 0 8.034 4.017 4.017 0 0 1 0-8.034zm0 6.623a2.606 2.606 0 1 0 0-5.212 2.606 2.606 0 0 0 0 5.212zm6.623-6.623a4.017 4.017 0 1 1 0 8.034 4.017 4.017 0 0 1 0-8.034z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/'}>Home</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/mockups'}>Mockups</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/categories'}>Categories</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/featured'}>Featured</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/new-arrivals'}>New Arrivals</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/tutorials'}>Tutorials</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/freebies'}>Freebies</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/templates'}>Templates</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/blog'}>Blog</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/community'}>Community</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/help-center'}>Help Center</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/contact-us'}>Contact Us</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/faq'}>FAQ</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/license'}>License</button></li>
              <li><button type="button" className="link-button" onClick={() => window.location.href = '/terms-of-use'}>Terms of Use</button></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} MockupHub. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};