import React from "react";

const AbsentLetter = () => {
  return (
    <div className="container bg-[#F6F9FF] p-8 space-y-12">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[#4154F1] font-semibold text-lg">
            Absent Application
          </h1>
          <p className="text-sm">
            <span className="text-[#899BBD] text-xs font-semibold">
              Manage / Subject /
            </span>{" "}
            Add Subject
          </p>
        </div>


      </div>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6 w-[586px] h-[529px]">
      <div>
          <h1 className="text-[#012970] font-semibold text-lg">
            Send Absent Application
          </h1>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className=" text-[#444444] text-base font-normal mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:border-[#4154F1]"
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="w-1/2">
          <label className=" text-[#444444] text-base font-normal mb-1">
          Number of Days
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4154F1]"
              placeholder="No. of days"
            />
          </div>
        </div>

        <div>
        <label className=" text-[#444444] text-base font-normal mb-1">
        Reason
          </label>
          <textarea
          rows={9}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#4154F1] "
            placeholder="Reason for being absent...................................................................................................................................................."
          ></textarea>

          <div className="flex gap-4">
            <button className="bg-[#0D6EFD] text-white rounded-lg w-[78px] h-[38px] flex items-center justify-center mt-4 text-xs">
              Submit
            </button>{" "}

            <button className="bg-[#6C757D] text-white rounded-lg w-[78px] h-[38px] flex items-center justify-center mt-4 text-xs">
              Reset 
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsentLetter;
