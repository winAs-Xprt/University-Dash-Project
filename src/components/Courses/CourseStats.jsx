import React from 'react';
import StatCard from '../Dashboard/StatCard';
import { BiBook } from 'react-icons/bi';

const CourseStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <StatCard
        title="Total Courses Listed"
        value="9,899"
        icon={BiBook}
        trend="60% Rise over last week"
        trendType="up"
      />
      <StatCard
        title="Popular Courses"
        value="380"
        icon={BiBook}
        trend="60% Fall over last week"
        trendType="down"
      />
      <StatCard
        title="Newly Added college"
        value="6,800"
        icon={BiBook}
        trend="60% Rise over last week"
        trendType="up"
      />
    </div>
  );
};

export default CourseStats;