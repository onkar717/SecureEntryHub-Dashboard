import React from 'react';
import Sidebar from './Sidebar';
import ContentPage from './ContentPage';

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <ContentPage />
    </div>
  );
}

export default Dashboard;
