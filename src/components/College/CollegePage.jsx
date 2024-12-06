import React from 'react';
import CollegeStats from './CollegeStats';
import CollegeTable from './CollegeTable';

const CollegePage = () => {
  return (
    <div className="p-6">
      <CollegeStats />
      <CollegeTable />
    </div>
  );
};

export default CollegePage;