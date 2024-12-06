import React from 'react';
import StatCard from '../Dashboard/StatCard';
import { BiFile } from 'react-icons/bi';

const ApplicationStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Total Applications"
        value="9,899"
        icon={BiFile}
        trend="60% Rise over last week"
        trendType="up"
      />
      <StatCard
        title="Top Colleges"
        value="30 Colleges"
        icon={BiFile}
        trend="60% Fall over last week"
        trendType="down"
      />
      <StatCard
        title="Top Courses"
        value="15 Courses"
        icon={BiFile}
        trend="60% Fall over last week"
        trendType="down"
      />
    </div>
  );
};

export default ApplicationStats;