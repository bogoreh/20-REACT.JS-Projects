import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About DevBlog</h1>
            <p>
              We're passionate about sharing knowledge and helping developers 
              grow in their careers. Our mission is to create high-quality, 
              practical content that makes complex topics accessible.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-grid">
            <div className="mission-card">
              <Target size={48} />
              <h3>Our Mission</h3>
              <p>
                To empower developers with practical knowledge and insights 
                that help them build better software and advance their careers.
              </p>
            </div>
            <div className="mission-card">
              <Users size={48} />
              <h3>Our Community</h3>
              <p>
                Join thousands of developers who trust our content to stay 
                updated with the latest technologies and best practices.
              </p>
            </div>
            <div className="mission-card">
              <Heart size={48} />
              <h3>Our Passion</h3>
              <p>
                We love what we do and are committed to creating content that 
                inspires, educates, and supports the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Writers</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">React Specialist</p>
              <p className="member-bio">
                Frontend developer with 8+ years of experience. Loves creating 
                interactive user interfaces and sharing knowledge with the community.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Mike Chen" />
              </div>
              <h3>Mike Chen</h3>
              <p className="member-role">CSS Expert</p>
              <p className="member-bio">
                UI/UX designer and developer passionate about creating beautiful, 
                accessible, and performant web experiences.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Emma Davis" />
              </div>
              <h3>Emma Davis</h3>
              <p className="member-role">JavaScript Guru</p>
              <p className="member-bio">
                Full-stack developer specializing in modern JavaScript frameworks 
                and scalable application architecture.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-page {
          padding: 2rem 0 4rem;
        }

        .about-hero {
          text-align: center;
          padding: 4rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: var(--radius);
          margin-bottom: 4rem;
        }

        .hero-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .hero-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .mission-section {
          margin-bottom: 4rem;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .mission-card {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--surface-color);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .mission-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .mission-card svg {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .mission-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .mission-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .team-section h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: var(--text-primary);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .team-member {
          text-align: center;
          padding: 2rem;
          background: var(--surface-color);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .team-member:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .member-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.5rem;
          border: 4px solid var(--primary-color);
        }

        .member-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-member h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .member-role {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .member-bio {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .about-hero {
            padding: 3rem 1rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;