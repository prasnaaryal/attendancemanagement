import React from 'react'
import TopBar from './components/TopBar';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';

const AdminLayout = () => {
  return (
    
        <div>
          <TopBar />
    
          <main className="flex flex-grow h-auto pt-1  ">
            <SideBar />
            <Outlet />
          </main>
        </div>
      );
  
}

export default AdminLayout