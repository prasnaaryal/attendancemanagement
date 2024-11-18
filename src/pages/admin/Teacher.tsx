import { SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate=useNavigate();
   
  const handleNavigate=(path:string)=>{
    navigate(path)
  }
  return (
    <div className="container  bg-[#F6F9FF] p-8 space-y-12">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[#4154F1] font-semibold text-lg">Teacher</h1>
          <p className="text-sm">
            <span className="text-[#899BBD] text-xs font-semibold">
              Manage/
            </span>{" "}
            Teacher
          </p>
        </div>

        <button onClick={()=>
          handleNavigate("/admin/addteacher")
        }className="bg-[#4154F1] text-white rounded-lg w-[90px] h-[40px] flex items-center justify-center mt-4 text-xs">
          Add Teacher
        </button>
      </div>

      <div className="bg-white p-4 rounded">
        <p className="text-[#012970] font-medium  text-lg mt-4">
          Current Teachers
        </p>
        <div className="flex justify-end mb-4  ">
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-[#757575] border border-[#767676] rounded w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search.."
          />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 font-bold bg-[#F6F6FE] shadow-lg">
            <tr className="text-xs">
              <th scope="col" className="px-6 py-3">
                #
              </th>

              <th scope="col" className="px-6 py-3">
                Teacher name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
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
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white  hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Manag Lama</td>
              <td className="px-6 py-4">Dolpa</td>
              <td className="px-6 py-4">maan@gmail.com</td>
              <td className="px-6 py-4">@malama</td>
              <td className="px-6 py-4">molamo</td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <SquarePen color="#7D7D7D" />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Trash2 color="#FF4861" />{" "}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teacher;
