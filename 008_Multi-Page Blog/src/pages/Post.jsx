import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="post-page">
      <div className="container">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
          Back to Blog
        </button>

        {/* Article Header */}
        <article className="article">
          <header className="article-header">
            <div className="article-meta">
              <span className="category-tag tag">{post.category}</span>
              <div className="meta-items">
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
            </div>
            
            <h1 className="article-title">{post.title}</h1>
            <p className="article-excerpt">{post.excerpt}</p>
            
            <div className="article-actions">
              <button onClick={sharePost} className="btn btn-secondary">
                <Share2 size={16} />
                Share Article
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="article-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Article Content */}
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        <section className="related-posts">
          <h2>Related Articles</h2>
          <div className="related-grid">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="related-card">
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <div className="related-content">
                    <h3>
                      <Link to={`/post/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p>{relatedPost.excerpt}</p>
                    <Link to={`/post/${relatedPost.id}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .post-page {
          padding: 2rem 0 4rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--primary-color);
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 2rem;
          padding: 0.5rem 0;
          transition: var(--transition);
        }

        .back-btn:hover {
          transform: translateX(-4px);
        }

        .article {
          max-width: 800px;
          margin: 0 auto;
        }

        .article-header {
          margin-bottom: 3rem;
        }

        .article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-items {
          display: flex;
          gap: 1.5rem;
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

        .article-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .article-excerpt {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .article-actions {
          display: flex;
          gap: 1rem;
        }

        .article-image {
          margin-bottom: 3rem;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .article-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .article-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-primary);
        }

        .article-content :global(h2) {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2.5rem 0 1rem;
          color: var(--text-primary);
        }

        .article-content :global(h3) {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 2rem 0 1rem;
          color: var(--text-primary);
        }

        .article-content :global(p) {
          margin-bottom: 1.5rem;
        }

        .article-content :global(ul), 
        .article-content :global(ol) {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }

        .article-content :global(li) {
          margin-bottom: 0.5rem;
        }

        .article-content :global(strong) {
          color: var(--text-primary);
          font-weight: 600;
        }

        .article-content :global(pre) {
          background: var(--text-primary);
          color: white;
          padding: 1.5rem;
          border-radius: var(--radius);
          overflow-x: auto;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }

        .article-content :global(code) {
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-size: 0.875em;
        }

        .article-content :global(pre code) {
          background: none;
          color: inherit;
          padding: 0;
        }

        .related-posts {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid var(--border-color);
        }

        .related-posts h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .related-card {
          display: flex;
          flex-direction: column;
          background: var(--surface-color);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .related-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .related-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .related-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .related-content h3 a {
          color: inherit;
          text-decoration: none;
        }

        .related-content h3 a:hover {
          color: var(--primary-color);
        }

        .related-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          flex: 1;
        }

        .read-more {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
        }

        .read-more:hover {
          color: var(--primary-dark);
        }

        .not-found {
          text-align: center;
          padding: 4rem 2rem;
        }

        .not-found h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .not-found p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }

          .article-meta {
            flex-direction: column;
            align-items: flex-start;
          }

          .article-image img {
            height: 250px;
          }

          .article-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Post;