//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AttendanceSheet from "../pages/manage/AttendanceSheet";
import Dashboard from "../pages/manage/Dashboard";
import GenerateSheet from "../pages/manage/GenerateSheet";
import Reports from "../pages/manage/Reports";
import Student from "../pages/manage/Student";
import Taken from "../pages/manage/Taken";

//Pages

const MainRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "/attendancesheet",
      element: <AttendanceSheet />,
    },
    {
      path: "/attendancesheet/generatesheet",
      element: <GenerateSheet />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/taken",
      element: <Taken />,
    },
    {
      path: "/student",
      element: <Student />,
    },
  ],
};

export default MainRoutes;
