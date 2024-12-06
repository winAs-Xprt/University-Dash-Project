import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ Icon, text, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path}>
      <div className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer ${
        isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
      }`}>
        <Icon className="w-5 h-5 mr-3" />
        <span className="text-sm font-medium">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;