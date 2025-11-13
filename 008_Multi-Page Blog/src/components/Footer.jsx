import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <BookOpen size={24} />
              <span>DevBlog</span>
            </Link>
            <p className="footer-description">
              Sharing knowledge and insights about web development, programming, and technology.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="link-group">
              <h4>Categories</h4>
              <a href="#">React</a>
              <a href="#">JavaScript</a>
              <a href="#">CSS</a>
              <a href="#">Backend</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DevBlog. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--text-primary);
          color: white;
          margin-top: 4rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          padding: 3rem 0 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .footer-description {
          color: #94a3b8;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .link-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .link-group h4 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .link-group a {
          color: #94a3b8;
          text-decoration: none;
          transition: var(--transition);
        }

        .link-group a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          border-top: 1px solid #334155;
          padding: 1.5rem 0;
          text-align: center;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;