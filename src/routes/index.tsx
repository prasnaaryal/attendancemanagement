import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./MainRoutes";
import PrivateRoutes from "./PrivateRoutes";

// routes


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    AuthenticationRoutes,
    MainRoutes,

    PrivateRoutes,
  ]);
}