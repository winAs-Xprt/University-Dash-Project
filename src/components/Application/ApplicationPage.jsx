import React from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationTable from './ApplicationTable';

const ApplicationPage = () => {
  return (
    <div className="p-6">
      <ApplicationStats />
      <ApplicationTable />
    </div>
  );
};

export default ApplicationPage;