import React from 'react'

import { Outlet } from 'react-router-dom';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';


const StudentLayout = () => {
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

export default StudentLayout