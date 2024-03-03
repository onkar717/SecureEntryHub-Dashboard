import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top bar */}
        <div className="bg-gray-200 p-4">
          <button onClick={toggleSidebar} className="text-gray-700">
            <FaBars className="text-2xl" />
          </button>
        </div>
        
        {/* Page Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Welcome to MyGate Dashboard</h2>
          {/* Visitor Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="visitorName" className="block text-sm font-medium text-gray-700">Visitor Name</label>
              <input type="text" id="visitorName" name="visitorName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="visitorContact" className="block text-sm font-medium text-gray-700">Visitor Contact</label>
              <input type="text" id="visitorContact" name="visitorContact" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="residentName" className="block text-sm font-medium text-gray-700">Resident Name</label>
              <input type="text" id="residentName" name="residentName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register Visitor</button>
            </div>
          </form>
          
          {/* Additional content */}
          <p>This is where you can manage your MyGate application.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
