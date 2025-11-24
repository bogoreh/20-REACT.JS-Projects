import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Dashboard Overview</h1>
      <div className="user-info">
        <span>👤 Admin User</span>
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Header;