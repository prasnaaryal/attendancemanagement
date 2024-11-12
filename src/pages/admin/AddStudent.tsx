import React from "react";

const AddStudent = () => {
  return (
    <div className="container  bg-[#F6F9FF] p-8 space-y-6">
      <div className="">
        <h1 className="text-[#4154F1] font-semibold text-lg">Student</h1>
        <p className="text-sm">
          <span className="text-[#899BBD] text-xs font-semibold">
            Manage / Student /
          </span>{" "}
          Add Student
        </p>
      </div>
      <div className="bg-white w-[564px] h-[452px] space-y-4 p-4 rounded-sm">
        <p className="text-[#012970] font-medium  text-lg ">Add a Student </p>

        <div className="space-y-1">
          <label className="text-[#444444] text-base ">Subject Name</label>
          <input
            type="text"
            id="table-search"
            className="block p-2  text-sm text-[#6C757D] border border-[#CED4DA] rounded w-full "
            placeholder="Name"
          />
        </div>

        <div className="flex gap-4 ">
          <div className="space-y-1">
            <label className="text-[#444444] text-base ">Subject Code</label>
            <input
              type="text"
              id="table-search"
              className="block p-2  text-sm text-[#757575] border border-[#CED4DA] rounded w-[224px] "
              placeholder="Subject code"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[#444444] text-base ">Course</label>
            <input
              type="text"
              id="table-search"
              className="block p-2  text-sm text-[#757575] border border-[#CED4DA] rounded  w-[224px] "
              placeholder="Course"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[#444444] text-base ">Teacher</label>
          <input
            type="text"
            id="table-search"
            className="block p-2  text-sm text-[#757575] border border-[#CED4DA] rounded w-full "
            placeholder="Assign teacher"
          />
        </div>

       
        <div className="flex gap-4">
          <button className="bg-[#0D6EFD] text-white rounded-lg w-[78px] h-[34px] flex items-center justify-center mt-4 text-xs">
            Submit
          </button>
          <button className="bg-[#6C757D] text-white rounded-lg w-[78px] h-[34px] flex items-center justify-center mt-4 text-xs">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
