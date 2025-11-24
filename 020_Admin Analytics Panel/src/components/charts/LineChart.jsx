import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#667eea" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="users" stroke="#48bb78" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;