//Layout

import StudentLayout from "../layouts/StudentLayout/StudentLayout";
import AbscenceApplication from "../pages/student/AbsenceApplication";




//Pages

// ==============================|| KYC FORM ROUTING ||============================== //

const StudentRoutes = {
  path: "/student",
  element: <StudentLayout />,
  children: [
  
    {
      path: "absenceapplication",
      element: <AbscenceApplication />,
    },
   

  ],
};

export default StudentRoutes;
