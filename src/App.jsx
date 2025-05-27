import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../src/shared/components/Sidebar';
import Navbar from '../src/shared/components/Navbar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeSidebar}
        />
      )}
      <div className="relative z-30">
        <Navbar onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
