import React from "react";

const AbscenceApplication = () => {
  return (
    <div className="container  bg-[#F6F9FF] p-8 space-y-12">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[#4154F1] font-semibold text-lg">
            Absence Records
          </h1>
          <p className="text-sm">
            <span className="text-[#899BBD] text-xs font-semibold">
              Absent Apllication/
            </span>{" "}
            Absence Record
          </p>
        </div>

        <button className="bg-[#4154F1] text-white rounded-lg w-[90px] h-[40px] flex items-center justify-center mt-4 text-xs">
          Send Application
        </button>
      </div>

      <div className="bg-white p-4 rounded">
        <p className="text-[#012970] font-medium  text-lg m-4">
          Absence Records
        </p>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 font-bold bg-[#F6F6FE] shadow-lg">
            <tr className="text-xs">
              <th scope="col" className="px-6 py-3">
                #
              </th>

              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Absence Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Absence For
              </th>

              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <button className="bg-[#4154F1] text-white rounded-lg w-[128px] h-[34px] flex items-center justify-center mt-4 text-xs">
                    In Progress
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <button className="bg-[#4CE1B6] text-white rounded-lg w-[128px] h-[34px] flex items-center justify-center mt-4 text-xs">
                    Approved
                  </button>{" "}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AbscenceApplication;
