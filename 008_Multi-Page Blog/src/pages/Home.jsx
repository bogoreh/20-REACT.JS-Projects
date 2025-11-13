import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';
import PostCard from '../components/PostCard';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to{' '}
              <span className="gradient-text">DevBlog</span>
            </h1>
            <p className="hero-description">
              Discover the latest insights, tutorials, and best practices in web development. 
              Join our community of developers and stay updated with modern technologies.
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                Explore Articles
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <TrendingUp size={32} />
              <div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Articles Published</div>
              </div>
            </div>
            <div className="stat">
              <Users size={32} />
              <div>
                <div className="stat-number">10K+</div>
                <div className="stat-label">Developers Reached</div>
              </div>
            </div>
            <div className="stat">
              <BookOpen size={32} />
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <div className="section-header">
            <h2>Featured Articles</h2>
            <p>Handpicked content to get you started</p>
          </div>
          
          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="section-actions">
            <Link to="/blog" className="btn btn-primary">
              View All Articles
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: var(--radius);
          backdrop-filter: blur(10px);
        }

        .stat svg {
          color: #fbbf24;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .featured-posts {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .section-actions {
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;