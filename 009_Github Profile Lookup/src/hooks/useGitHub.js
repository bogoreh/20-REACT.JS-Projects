import { useState } from 'react'

const useGitHub = () => {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchUser = async (username) => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      
      if (!userResponse.ok) {
        throw new Error('User not found')
      }
      
      const userData = await userResponse.json()
      setUser(userData)

      // Fetch user repositories
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
      const reposData = await reposResponse.json()
      setRepos(reposData)

    } catch (err) {
      setError(err.message)
      setUser(null)
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    repos,
    loading,
    error,
    searchUser
  }
}

export default useGitHub