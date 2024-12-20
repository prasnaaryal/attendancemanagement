//Layout

import AdminLayout from "../layouts/AdminLayout/AdminLayout";

import AbscenceApplication from "../pages/admin/AbscenceApplication";
import AddStudent from "../pages/admin/AddStudent";
import AddSubject from "../pages/admin/AddSubject";
import AddTeacher from "../pages/admin/AddTeacher";

import AdminDash from "../pages/admin/AdminDash";
import Reports from "../pages/admin/Reports";
import Student from "../pages/admin/Student";
import Subject from "../pages/admin/Subject";
import Taken from "../pages/admin/Taken";
import Teacher from "../pages/admin/Teacher";


//Pages

// ==============================|| KYC FORM ROUTING ||============================== //

const PrivateRoutes = {
  path: "/admin",
  element: <AdminLayout />,
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
    {
      path: "addteacher",
      element: <AddTeacher/>,
    },
    {
      path: "addstudent",
      element: <AddStudent/>,
    },
    {
      path: "addsubject",
      element: <AddSubject/>,
    },
    {
      path: "subject",
      element: <Subject/>,
    },
    {
      path: "student",
      element: <Student/>,
    },


  ],
};

export default PrivateRoutes;
