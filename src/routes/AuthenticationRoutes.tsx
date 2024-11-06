//Layout

import Login from "../pages/Auth/Login";
import MainLayout from "../layouts/MainLayout/MainLayout";

//Pages



// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    
  ],
};

export default AuthenticationRoutes;