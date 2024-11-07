import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GenerateSheet = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="bg-[#F6F9FF] container p-8">
      <div className="mb-6">
        <h1 className="text-[#4154F1] font-semibold text-lg">Attendance</h1>
        <p className="text-sm">
          <span className="text-[#899BBD] text-xs font-semibold">Track /</span>{" "}
          Attendance
        </p>
      </div>

      {/* Selection dropdowns */}
      <div className="bg-white">
        <div className="flex p-8 space-x-4">
          {/* Subject Dropdown with Right Arrow */}
          <div className="relative w-[164px] h-[58px] bg-gray-50 border border-gray-300 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600">
            <label
              htmlFor="subject"
              className="block text-sm text-[#444444] dark:text-white"
            >
              Subject
            </label>
            <select
              id="subject"
              className="w-full bg-transparent appearance-none focus:outline-none text-left pr-8" // Adjusted padding
            >
              <option selected>Advance Java</option>
              <option value="US">United States</option>
            </select>
            {/* Right Arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Section Dropdown with Right Arrow */}
          <div className="relative w-[164px] h-[58px] bg-gray-50 border border-gray-300 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600">
            <label
              htmlFor="section"
              className="block text-sm  text-[#444444] dark:text-white"
            >
              Section
            </label>
            <select
              id="section"
              className="w-full bg-transparent appearance-none focus:outline-none text-left pr-8" // Adjusted padding
            >
              <option selected>A</option>
              <option value="US">United States</option>
            </select>
            {/* Right Arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Date Picker with Right Arrow */}
          <div className="relative w-[164px] h-[58px] bg-gray-50 border border-gray-300 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600">
            <label htmlFor="date" className="block text-sm  text-[#444444]">
              Date
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="YYYY/MM/DD"
              dateFormat="yyyy/MM/dd"
              className="w-full bg-transparent text-gray-900 dark:text-white text-left cursor-pointer text-sm focus:outline-none pr-8"
            />

            {/* Right Arrow for DatePicker */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <button className="bg-[#4154F1] text-white rounded-lg w-[102px] h-[40px] flex items-center justify-center mt-4 text-xs">
            Generate Sheet
          </button>
        </div>
      </div>

      {/* attendance sheet */}
      <div className="bg-white mt-8 p-6">
    
          <p className="text-[#012970] text-lg font-medium">Attendance Sheet</p>

          <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-[#444444]">
              <thead className="text-xs text-gray-700 uppercase bg-[#f6f6fe] ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center gap-2">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only ">
                        checkbox
                      </label>
                      <p className="">#</p>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center gap-2">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                      <p className="">1</p>
                    </div>
                  </td>
                  <td scope="row" className="px-6 py-4 font-xs text-[#7D7D7D]">
                    Apple MacBook Pro 17"
                  </td>
                  <td className="px-6 py-4">#2123123</td>
                  <td className="px-6 py-4">Present</td>
                </tr>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center gap-2">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                      <p>2</p>
                    </div>
                  </td>
                  <td scope="row" className="px-6 py-4 font-xs text-[#7D7D7D]">
                    Microsoft Surface Pro
                  </td>
                  <td className="px-6 py-4">#2123123</td>
                  <td className="px-6 py-4">Present</td>
                </tr>
                <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center gap-2">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-3"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                      <p>3</p>
                    </div>
                  </td>
                  <td scope="row" className="px-6 py-4 font-xs text-[#7D7D7D]">
                    Magic Mouse 2
                  </td>
                  <td className="px-6 py-4">#2123123</td>
                  <td className="px-6 py-4">Present</td>
                </tr>
              </tbody>
            </table>

            
          </div>
          
        </div>
        <button className="bg-[#4154F1] text-white rounded-lg w-[90px] h-[40px] flex items-center justify-center mt-4 text-xs">
            Submit
          </button>
      </div>
    
  );
};

export default GenerateSheet;
