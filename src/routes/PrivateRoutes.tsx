//Layout

import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/manage/Home";


//Pages


// ==============================|| KYC FORM ROUTING ||============================== //

const PrivateRoutes = {
  path: "/manage",
  element: <MainLayout />,
  children: [
    {
      path: "home",
      element: <Home />,
    },
    
  ],
};

export default PrivateRoutes;