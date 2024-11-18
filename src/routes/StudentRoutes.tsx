//Layout

import StudentLayout from "../layouts/StudentLayout/StudentLayout";
import AbscenceApplication from "../pages/manage/student/AbsenceApplication";
import AbsentLetter from "../pages/manage/student/AbsentLetter";




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
    {
        path: "absentletter",
        element: <AbsentLetter />,
      },
     
   

  ],
};

export default StudentRoutes;
