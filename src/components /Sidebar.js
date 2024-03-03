import React from 'react';
import { FaHome, FaUsers, FaClock } from 'react-icons/fa';

function Sidebar({ showSidebar }) {
  return (
    <div className={`sidebar bg-gray-800 text-white w-64 flex-shrink-0 transition-transform duration-300 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">MyGate Dashboard</h1>
      </div>
      <ul className="py-4">
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaHome className="mr-2" />
          <span>Home</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaUsers className="mr-2" />
          <span>Residents</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-700">
          <FaClock className="mr-2" />
          <span>Visitors</span>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
