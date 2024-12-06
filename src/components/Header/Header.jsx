import React from 'react';
import { BiCog } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-bold">Collegeseekers</h1>
        <div className="flex items-center space-x-2">
          <span>Dashboard</span>
          <span className="text-gray-300">👋 Hi Welcome, Ashwin!</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <BiCog className="w-6 h-6" />
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;