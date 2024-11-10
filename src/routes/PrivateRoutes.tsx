//Layout

import DashboardLayout from "../layouts/DashboardLayout";

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
  ],
};

export default PrivateRoutes;
