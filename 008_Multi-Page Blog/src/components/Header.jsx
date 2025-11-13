import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <BookOpen size={32} className="logo-icon" />
            <span>DevBlog</span>
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: var(--surface-color);
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .logo-icon {
          color: var(--primary-color);
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          transition: var(--transition);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
          background: rgba(59, 130, 246, 0.1);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--surface-color);
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }

          .nav-menu-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;