//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AbscenceApplication from "../pages/admin/AbscenceApplication";

import AdminDash from "../pages/admin/AdminDash";
import Reports from "../pages/admin/Reports";
import Taken from "../pages/admin/Taken";
import Teacher from "../pages/admin/Teacher";

//Pages

// ==============================|| KYC FORM ROUTING ||============================== //

const PrivateRoutes = {
  path: "/admin",
  element: <DashboardLayout />,
  children: [
    {
      path: "dashboard",
      element: <AdminDash />,
    },
    {
      path: "absenceapplication",
      element: <AbscenceApplication />,
    },
    {
      path: "taken",
      element: <Taken/>,
    },
    {
      path: "reports",
      element: <Reports/>,
    },
    {
      path: "teacher",
      element: <Teacher/>,
    },


  ],
};

export default PrivateRoutes;
