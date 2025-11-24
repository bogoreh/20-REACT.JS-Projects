import React from 'react';

const StatCard = ({ title, value, change, isPositive, icon, variant = 'primary' }) => {
  return (
    <div className={`stat-card ${variant}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div className="stat-label">{title}</div>
          <div className="stat-value">{value}</div>
          <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '↗' : '↘'} {change} from last month
          </div>
        </div>
        <div style={{ fontSize: '2rem' }}>{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;