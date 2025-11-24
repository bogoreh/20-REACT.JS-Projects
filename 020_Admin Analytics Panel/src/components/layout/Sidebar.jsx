import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, name: 'Dashboard', icon: '📊' },
    { id: 2, name: 'Analytics', icon: '📈' },
    { id: 3, name: 'Users', icon: '👥' },
    { id: 4, name: 'Products', icon: '🛍️' },
    { id: 5, name: 'Orders', icon: '📦' },
    { id: 6, name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>📊 Analytics Pro</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className={item.id === 1 ? 'active' : ''}>
              <span>{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;