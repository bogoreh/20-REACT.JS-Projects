import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">💬 Live Chat</h1>
        <div className="header-status">
          <span className="status-indicator"></span>
          <span>Online</span>
        </div>
      </div>
    </header>
  )
}

export default Header