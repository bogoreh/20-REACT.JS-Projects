import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'
import RepositoryList from './components/RepositoryList'
import LoadingSpinner from './components/LoadingSpinner'
import useGitHub from './hooks/useGitHub'

function App() {
  const [username, setUsername] = useState('')
  const { user, repos, loading, error, searchUser } = useGitHub()

  const handleSearch = (searchUsername) => {
    if (searchUsername.trim()) {
      setUsername(searchUsername)
      searchUser(searchUsername)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub Profile Lookup</h1>
        <p>Discover developers and their amazing work</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <LoadingSpinner />}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {user && !loading && (
        <div className="profile-container">
          <UserProfile user={user} />
          <RepositoryList repos={repos} username={username} />
        </div>
      )}

      {!user && !loading && !error && (
        <div className="welcome-message">
          <h2>Welcome to GitHub Profile Lookup</h2>
          <p>Enter a GitHub username above to get started!</p>
        </div>
      )}
    </div>
  )
}

export default App