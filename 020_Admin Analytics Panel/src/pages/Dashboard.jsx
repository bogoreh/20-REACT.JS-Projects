import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import StatCard from '../components/cards/StatCard';
import InfoCard from '../components/cards/InfoCard';
import CustomLineChart from '../components/charts/LineChart';
import CustomBarChart from '../components/charts/BarChart';
import CustomPieChart from '../components/charts/PieChart';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { 
  statsData, 
  lineChartData, 
  barChartData, 
  pieChartData, 
  recentActivities, 
  topProducts 
} from '../data/mockData';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const cardVariants = ['primary', 'success', 'warning', 'danger'];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        {/* Stats Cards */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
              icon={stat.icon}
              variant={cardVariants[index]}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          <InfoCard title="Revenue & Users Overview">
            <CustomLineChart data={lineChartData} />
          </InfoCard>

          <InfoCard title="Traffic Sources">
            <CustomPieChart data={pieChartData} />
          </InfoCard>
        </div>

        {/* Additional Charts */}
        <div style={{ marginBottom: '30px' }}>
          <InfoCard title="Weekly Sales Performance">
            <CustomBarChart data={barChartData} />
          </InfoCard>
        </div>

        {/* Additional Info */}
        <div className="info-grid">
          <InfoCard title="Recent Activities" action="View All">
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {recentActivities.map((activity) => (
                <div key={activity.id} style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <strong>{activity.user}</strong>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>{activity.action}</div>
                  </div>
                  <span style={{ color: '#999', fontSize: '0.8rem' }}>{activity.time}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Top Products" action="See All">
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {topProducts.map((product) => (
                <div key={product.id} style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <strong>{product.name}</strong>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      {product.sales} sales
                    </div>
                  </div>
                  <span style={{ color: '#667eea', fontWeight: 'bold' }}>
                    {product.revenue}
                  </span>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;