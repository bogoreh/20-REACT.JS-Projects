import React from 'react';

const InfoCard = ({ title, children, action }) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>{title}</h3>
        {action && <button className="action-button">{action}</button>}
      </div>
      {children}
    </div>
  );
};

export default InfoCard;