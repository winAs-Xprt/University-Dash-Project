import React from 'react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, trendType }) => {
  const trendColor = trendType === 'up' ? 'text-green-500' : 'text-red-500';
  const trendBg = trendType === 'up' ? 'bg-green-50' : 'bg-red-50';

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600">{title}</h3>
        {Icon && <Icon className="w-6 h-6 text-blue-500" />}
      </div>
      <div className="text-3xl font-bold mb-4">{value}</div>
      {trend && (
        <div className={`${trendBg} ${trendColor} p-2 rounded-lg inline-flex items-center`}>
          {trendType === 'up' ? '↑' : '↓'} {trendValue}
        </div>
      )}
    </div>
  );
};

export default StatCard;