import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

const DashboardLayout = () => {
  return (
    <div>
     <TopBar/>

      <main className="flex-grow h-[calc(100vh-19rem)] lg:h-[calc(100vh-5rem)]  ">
        <SideBar/>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
