//Layout

import Login from "../pages/Auth/Login";
import MainLayout from "../layouts/MainLayout/MainLayout";
import StudentLogin from "../pages/Auth/StudentLogin";

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
    {
      path: "/studentlogin",
      element: <StudentLogin />,
    },
    
  ],
};

export default AuthenticationRoutes;