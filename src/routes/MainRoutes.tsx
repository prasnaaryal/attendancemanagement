//Layout

import DashboardLayout from "../layouts/DashboardLayout";



//Pages


const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/attendancesheet",
      element: "",
    },
    
  ],
};

export default MainRoutes;