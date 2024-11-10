import { Check, X } from "lucide-react";
import React from "react";

const AbscenceApplication = () => {
  return (
    <div className="container  bg-[#F6F9FF] p-8 space-y-10">
      <div className="">
        <h1 className="text-[#4154F1] font-semibold text-lg">Absence</h1>
        <p className="text-sm">
          <span className="text-[#899BBD] text-xs font-semibold">
            Analyse /
          </span>{" "}
          Absence
        </p>
      </div>

      <div className="space-y-10">
        <div className="bg-white">
          <p className="text-[#012970] text-lg font-medium p-4">
            Absence records
          </p>
          <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left    text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-[#F6F6FE]">
                <tr>
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
                    Semester
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Absence Reason
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Absence For
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white  dark:bg-gray-800  hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">Maria</td>
                  <td className="px-6 py-4">BICT</td>
                  <td className="px-6 py-4">First</td>
                  <td className="px-6 py-4">Sick</td>
                  <td className="px-6 py-4">1 Day</td>
                  <td className="flex items-center px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <Check
                        color="#ffffff"
                        className="bg-[#2ECA6A] rounded-md"
                      />
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <X color="#ffffff" className="bg-[#FF4861] rounded-md" />
                    </a>
                  </td>
                </tr>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">Maria</td>
                  <td className="px-6 py-4">BICT</td>
                  <td className="px-6 py-4">First</td>
                  <td className="px-6 py-4">Sick</td>
                  <td className="px-6 py-4">1 Day</td>
                  <td className="flex items-center px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <Check
                        color="#ffffff"
                        className="bg-[#2ECA6A] rounded-md"
                      />
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      <X color="#ffffff" className="bg-[#FF4861] rounded-md" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative  sm:rounded-lg">
          <p className="text-[#012970] text-lg font-medium p-4">
            Absence records
          </p>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 m-10">
            <thead className="text-xs text-gray-700 uppercase bg-[#F6F6FE]">
              <tr>
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
                  Semester
                </th>
                <th scope="col" className="px-6 py-3">
                  Absence Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Absence For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  dark:bg-gray-800  hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Maria</td>
                <td className="px-6 py-4">BICT</td>
                <td className="px-6 py-4">First</td>
                <td className="px-6 py-4">Sick</td>
                <td className="px-6 py-4">1 Day</td>
              </tr>
              <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Maria</td>
                <td className="px-6 py-4">BICT</td>
                <td className="px-6 py-4">First</td>
                <td className="px-6 py-4">Sick</td>
                <td className="px-6 py-4">1 Day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AbscenceApplication;
