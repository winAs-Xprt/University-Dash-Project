import React from 'react';
import CourseStats from './CourseStats';
import CourseTable from './CourseTable';

const CoursePage = () => {
  return (
    <div className="p-6">
      <CourseStats />
      <CourseTable />
    </div>
  );
};

export default CoursePage;