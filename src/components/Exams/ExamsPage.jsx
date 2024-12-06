import React from 'react';
import ExamStats from './ExamStats';
import ExamTable from './ExamTable';

const ExamsPage = () => {
  return (
    <div className="p-6">
      <ExamStats />
      <ExamTable />
    </div>
  );
};

export default ExamsPage;