import React from 'react';

const registrations = [
  {
    name: 'Rithika',
    college: 'IIT (Madras)',
    date: '07.10.2024',
    status: 'Active',
    email: 'rithika189@gmail.com'
  },
  // Repeat 5 more times for the dummy data
];

const RecentRegistrations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Registrations</h3>
        <a href="#" className="text-blue-600 text-sm">Detailed view</a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4">Name</th>
              <th className="pb-4">Applied College</th>
              <th className="pb-4">Date of Registration</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Email</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">{reg.name}</td>
                <td>{reg.college}</td>
                <td>{reg.date}</td>
                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {reg.status}
                  </span>
                </td>
                <td>{reg.email}</td>
                <td>
                  <button className="text-gray-400">→</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentRegistrations;