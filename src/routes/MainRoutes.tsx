//Layout

import MainLayout from "../layouts/MainLayout/MainLayout";


//Pages


const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/account-creation-success",
      element: "",
    },
    
  ],
};

export default MainRoutes;