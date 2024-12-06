import React from 'react';
import StatCard from '../Dashboard/StatCard';
import { BiBuildings } from 'react-icons/bi';

const CollegeStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Total Colleges list"
        value="9,899"
        icon={BiBuildings}
        trend="60% Rise over last week"
        trendType="up"
      />
      <StatCard
        title="Top-Rated College"
        value="380"
        icon={BiBuildings}
        trend="60% Fall over last week"
        trendType="down"
      />
      <StatCard
        title="Recently Added college"
        value="6,800"
        icon={BiBuildings}
        trend="60% Rise over last week"
        trendType="up"
      />
    </div>
  );
};

export default CollegeStats;