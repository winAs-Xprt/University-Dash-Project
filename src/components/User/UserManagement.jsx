import React from 'react';
import { BiFilter } from 'react-icons/bi';

const users = [
  {
    id: '12345678',
    name: 'Rithika',
    email: 'rithika189@gmail.com',
    mobile: '1234567890',
    applicationStatus: '2 completed',
    status: 'Active',
    registeredDate: '07.10.2024'
  },
  // Add more dummy data as needed
];

const flaggedUsers = [
  {
    id: '12345678',
    name: 'Rithika',
    lastLogout: '7.8.2024',
    mobile: '1234567890'
  },
  // Add more dummy data as needed
];

const UserManagement = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">User Management</h2>
          <button className="text-sm text-gray-600">View all</button>
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
                <th className="pb-4">Application Status</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Registered date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <span className="text-blue-600">{user.applicationStatus}</span>
                  </td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      {user.status}
                    </span>
                  </td>
                  <td>{user.registeredDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Flagged Accounts</h3>
              <span className="bg-red-50 text-red-500 px-2 py-1 rounded">4</span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-4">Profile</th>
                    <th className="pb-4">Name</th>
                    <th className="pb-4">User ID</th>
                    <th className="pb-4">Last Logout</th>
                    <th className="pb-4">Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {flaggedUsers.map((user, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.id}</td>
                      <td>{user.lastLogout}</td>
                      <td>{user.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">User Analytics</h3>
              <button className="flex items-center text-sm text-gray-600">
                <BiFilter className="mr-1" />
                Filter By
              </button>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                User Demographics
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                User Activity
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded">
                Success Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;