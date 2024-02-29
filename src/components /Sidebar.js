import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 flex flex-col">
      {/* Sidebar header */}
      <div className="bg-gray-900 px-4 py-3">
        <h1 className="text-white font-semibold text-lg">Dashboard</h1>
      </div>

      {/* Sidebar navigation links */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          <li className="px-4 py-2 text-gray-200 hover:bg-gray-700 cursor-pointer">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="px-4 py-2 text-gray-200 hover:bg-gray-700 cursor-pointer">
            <Link to="/reports">Reports</Link>
          </li>
          <li className="px-4 py-2 text-gray-200 hover:bg-gray-700 cursor-pointer">
            <Link to="/analytics">Analytics</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
