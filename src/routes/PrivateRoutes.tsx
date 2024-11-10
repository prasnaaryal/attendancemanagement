//Layout

import DashboardLayout from "../layouts/DashboardLayout";
import AbscenceApplication from "../pages/admin/AbscenceApplication";

import AdminDash from "../pages/admin/AdminDash";

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

  ],
};

export default PrivateRoutes;
