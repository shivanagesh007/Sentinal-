import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Phishing', value: 45, color: '#3b82f6' },
  { name: 'Malware', value: 25, color: '#ef4444' },
  { name: 'Ransomware', value: 20, color: '#f59e0b' },
  { name: 'Others', value: 10, color: '#8b5cf6' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={12}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const OverallAttacksCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-96 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Overall Attacks Distribution</h2>
      
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Percentage']}
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: 'none',
              borderRadius: '0.375rem',
              color: 'white'
            }} 
          />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{
              fontSize: '12px',
              color: '#6b7280'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverallAttacksCard;