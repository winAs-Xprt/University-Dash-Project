import React from 'react';
import StatCard from '../Dashboard/StatCard';
import { BiFile } from 'react-icons/bi';

const ExamStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard
        title="Total Exams"
        value="40"
        icon={BiFile}
      />
      <StatCard
        title="Upcoming Exams"
        value="7"
        icon={BiFile}
      />
      <StatCard
        title="Exams Completed"
        value="8"
        icon={BiFile}
      />
      <StatCard
        title="Exam in Progress"
        value="12"
        icon={BiFile}
      />
    </div>
  );
};

export default ExamStats;