import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import PostCard from '../components/PostCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="blog-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Blog Articles</h1>
          <p>Explore our collection of development tutorials and insights</p>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filter">
            <Filter size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing {filteredPosts.length} of {blogPosts.length} articles
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .blog-page {
          padding: 2rem 0 4rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .page-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-box svg {
          position: absolute;
          left: 1rem;
          color: var(--text-secondary);
        }

        .search-box input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
          font-size: 1rem;
          transition: var(--transition);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .category-filter {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--surface-color);
          border: 2px solid var(--border-color);
          border-radius: var(--radius);
        }

        .category-filter select {
          border: none;
          background: none;
          font-size: 1rem;
          color: var(--text-primary);
          cursor: pointer;
          outline: none;
        }

        .results-info {
          margin-bottom: 2rem;
          color: var(--text-secondary);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .filters {
            flex-direction: column;
          }

          .search-box {
            min-width: auto;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;