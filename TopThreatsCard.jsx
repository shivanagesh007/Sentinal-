import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Phishing', value: 45, fill: '#3b82f6' },
  { name: 'Ransomware', value: 30, fill: '#ef4444' },
  { name: 'DDoS', value: 15, fill: '#f59e0b' },
  { name: 'Malware', value: 10, fill: '#8b5cf6' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white font-semibold">{`${payload[0].payload.name}`}</p>
        <p className="text-blue-600 dark:text-blue-400">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const TopThreatsCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-96 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Top Threats</h2>
        <span className="ml-2 text-red-500">⚠️</span>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis type="number" stroke="#6b7280" />
          <YAxis dataKey="name" type="category" width={80} stroke="#6b7280" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopThreatsCard;