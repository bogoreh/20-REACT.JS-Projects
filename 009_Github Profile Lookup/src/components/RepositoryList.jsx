import React from 'react'

const RepositoryList = ({ repos, username }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      Java: '#b07219',
      TypeScript: '#2b7489',
      'C++': '#f34b7d',
      CSS: '#563d7c',
      HTML: '#e34c26',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Go: '#00ADD8',
      Rust: '#dea584',
      'C#': '#178600'
    }
    return colors[language] || '#6c757d'
  }

  if (repos.length === 0) {
    return (
      <div className="repositories">
        <h3>Repositories</h3>
        <div className="no-repos">
          <p>No repositories found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="repositories">
      <div className="repos-header">
        <h3>Latest Repositories</h3>
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-link"
        >
          View all →
        </a>
      </div>
      
      <div className="repos-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <div className="repo-header">
              <h4 className="repo-name">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <span className="repo-visibility">{repo.private ? 'Private' : 'Public'}</span>
            </div>
            
            {repo.description && (
              <p className="repo-description">{repo.description}</p>
            )}
            
            <div className="repo-details">
              {repo.language && (
                <div className="repo-language">
                  <span
                    className="language-color"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></span>
                  {repo.language}
                </div>
              )}
              
              {repo.stargazers_count > 0 && (
                <div className="repo-stat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {repo.stargazers_count}
                </div>
              )}
              
              {repo.forks_count > 0 && (
                <div className="repo-stat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                  </svg>
                  {repo.forks_count}
                </div>
              )}
              
              <div className="repo-updated">
                Updated {formatDate(repo.updated_at)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RepositoryList