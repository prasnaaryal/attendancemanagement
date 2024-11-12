import React from "react";

const TopBar = () => {
  return (
    <div className="flex container h-[60px] justify-between w-full px-14  p-4 shadow-md">
      <p className="text-[#012970] font-bold text-2xl">Attendify</p>
      <div className="flex w-[320px] h-[37px]">
        <input
          type="text"
          id="table-search"
          className="block p-2  text-sm text-[#757575] border border-[#767676] rounded w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
          placeholder="Search"
        />
      </div>


      <div className="flex gap-4 items-center ">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell mt-2"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-500 rounded-full transform translate-x-1 -translate-y-1">
            1
          </span>
        </div>

        <img
          src="/images/profile-img.jpg.png"
          className="w-[36px] h-[36px]"
          alt="avatar"
        />
        <p className="text-sm font-semibold">Peterpan</p>
      </div>
    </div>
  );
};

export default TopBar;
