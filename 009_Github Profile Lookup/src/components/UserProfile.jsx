import React from 'react'

const UserProfile = ({ user }) => {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="avatar-container">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{user.name || user.login}</h2>
          <p className="profile-username">@{user.login}</p>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
          
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{formatNumber(user.followers)}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{formatNumber(user.following)}</span>
              <span className="stat-label">Following</span>
            </div>
            <div className="stat">
              <span className="stat-number">{formatNumber(user.public_repos)}</span>
              <span className="stat-label">Repositories</span>
            </div>
          </div>

          {user.location && (
            <div className="profile-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>{user.location}</span>
            </div>
          )}

          {user.blog && (
            <div className="profile-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <a href={user.blog} target="_blank" rel="noopener noreferrer">
                {user.blog}
              </a>
            </div>
          )}

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserProfile