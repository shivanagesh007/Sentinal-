import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generateRealTimeData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 10; i >= 0; i--) {
    const time = new Date(now - i * 2000);
    data.push({
      time: time.toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }),
      value: Math.floor(Math.random() * 100) + 20,
    });
  }
  
  return data;
};

const RealTimeGraphCard = () => {
  const [data, setData] = useState(generateRealTimeData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)];
        const lastValue = prevData[prevData.length - 1].value;
        const fluctuation = Math.floor(Math.random() * 11) - 5;
        const newValue = Math.max(10, Math.min(120, lastValue + fluctuation));
        
        const now = new Date();
        newData.push({
          time: now.toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }),
          value: newValue,
        });
        
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-96 border border-gray-200 dark:border-gray-700 relative">
      <div className="flex items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Real-Time Threat Monitoring</h2>
        <div className="ml-2 flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-1"></div>
          <span className="text-xs font-semibold text-green-500">LIVE</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" domain={[0, 120]} fontSize={12} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: 'none',
              borderRadius: '0.375rem',
              color: 'white'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 6, fill: '#ef4444' }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeGraphCard;