import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <article className="post-card card fade-in">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
        <span className="post-category tag">{post.category}</span>
      </div>
      
      <div className="post-content">
        <h3 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        
        <p className="post-excerpt">{post.excerpt}</p>
        
        <div className="post-meta">
          <div className="meta-item">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="meta-item">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Link to={`/post/${post.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>

      <style jsx>{`
        .post-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .post-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .post-card:hover .post-image img {
          transform: scale(1.05);
        }

        .post-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .post-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .post-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          color: var(--text-primary);
        }

        .post-title a {
          color: inherit;
          text-decoration: none;
        }

        .post-title a:hover {
          color: var(--primary-color);
        }

        .post-excerpt {
          color: var(--text-secondary);
          line-height: 1.6;
          flex: 1;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .meta-item svg {
          color: var(--primary-color);
        }
      `}</style>
    </article>
  );
};

export default PostCard;