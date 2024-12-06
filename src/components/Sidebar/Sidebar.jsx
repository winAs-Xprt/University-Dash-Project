import React from 'react';
import { BiSolidDashboard, BiUser, BiFile, BiChart, BiCog, BiBook, BiBuildings } from 'react-icons/bi';
import SidebarItem from './SidebarItem';

const menuItems = [
  { icon: BiSolidDashboard, text: 'Dashboard', path: '/' },
  { icon: BiUser, text: 'User', path: '/users' },
  { icon: BiFile, text: 'Application', path: '/applications' },
  { icon: BiChart, text: 'Analytics', path: '/analytics' },
  { icon: BiBook, text: 'Exams', path: '/exams' },
  { icon: BiCog, text: 'Settings', path: '/settings' },
  { icon: BiBook, text: 'Courses', path: '/courses' },
  { icon: BiBuildings, text: 'College', path: '/colleges' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-4 border-r">
      {menuItems.map((item, index) => (
        <SidebarItem
          key={index}
          Icon={item.icon}
          text={item.text}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Sidebar;