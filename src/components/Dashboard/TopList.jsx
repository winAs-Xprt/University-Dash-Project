import React from 'react';

const TopList = ({ title, items, type }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="text-sm text-gray-600">See all</button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                {type === 'college' ? '🏛️' : '💻'}
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
            <span className="text-sm text-gray-600">{item.applicants} Applicants</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;