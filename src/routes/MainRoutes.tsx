//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AttendanceSheet from "../pages/manage/AttendanceSheet";
import GenerateSheet from "../pages/manage/GenerateSheet";



//Pages


const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/attendancesheet",
      element: <AttendanceSheet/>,
    },
    {
      path: "/attendancesheet/generatesheet",
      element: <GenerateSheet/>,
    },
    
  ],
};

export default MainRoutes;