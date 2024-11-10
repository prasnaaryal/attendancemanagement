//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AbscenceApplication from "../pages/admin/AbscenceApplication";

import AdminDash from "../pages/admin/AdminDash";
import Taken from "../pages/admin/Taken";

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

  ],
};

export default PrivateRoutes;
