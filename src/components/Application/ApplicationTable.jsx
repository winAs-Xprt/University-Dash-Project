import React from 'react';

const applications = [
  {
    id: '12345678',
    name: 'Rithika',
    email: '1234@1234',
    mobile: '1234567890',
    college: 'VIT',
    status: 'Pending',
    submissionDate: '07.10.2024'
  },
  {
    id: '12345678',
    name: 'Rithika',
    email: '1234@1234',
    mobile: '1234567890',
    college: 'IIT',
    status: 'Approved',
    submissionDate: '07.10.2024'
  },
  {
    id: '12345678',
    name: 'Rithika',
    email: '1234567890',
    mobile: '1234567890',
    college: 'SRM',
    status: 'Rejected',
    submissionDate: '07.10.2024'
  }
];

const getStatusStyle = (status) => {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
};

const ApplicationTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Applications</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search applications..."
            className="border rounded-lg px-4 py-2 text-sm"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4">Profile</th>
              <th className="pb-4">User ID</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Mobile Number</th>
              <th className="pb-4">College</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date of Submission</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{application.id}</td>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.mobile}</td>
                <td>{application.college}</td>
                <td>
                  <span className={`px-2 py-1 rounded ${getStatusStyle(application.status)}`}>
                    {application.status}
                  </span>
                </td>
                <td>{application.submissionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTable;