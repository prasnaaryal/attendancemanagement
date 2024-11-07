//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AttendanceSheet from "../pages/manage/AttendanceSheet";



//Pages


const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/attendancesheet",
      element: <AttendanceSheet/>,
    },
    
  ],
};

export default MainRoutes;