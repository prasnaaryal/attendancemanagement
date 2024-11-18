import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const AttendanceSheet = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

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

          <button
            onClick={() => handleNavigate("/attendancesheet/generatesheet")}
            className="bg-[#4154F1] text-white rounded-lg w-[102px] h-[40px] flex items-center justify-center mt-4 text-xs"
          >
            Generate Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSheet;
