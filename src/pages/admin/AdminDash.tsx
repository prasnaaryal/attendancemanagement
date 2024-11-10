import React from "react";
import LineChart from "../manage/components/LineChart";
import RadarChart from "../manage/components/RadarChart";

const AdminDash = () => {
  return (
    <div className="bg-[#F6F9FF] container  grid grid-cols-12 p-8 gap-6">
      <div className="col-span-8 space-y-8">
        <div className="">
          <h1 className="text-[#4154F1] font-semibold text-lg">Dashboard</h1>
          <p className="text-sm">
            <span className="text-[#899BBD] text-xs font-semibold">Home /</span>{" "}
            Dashboard
          </p>
        </div>

        <div className="flex space-x-6">
          <div className="bg-white w-[212px] h-[148px] p-4 shadow rounded">
            <p className="text-sm text-[#899BBD]">
              <span className="text-[#4154F1] text-lg font-medium">
                Present{" "}
              </span>{" "}
              | Today
            </p>

            <div className="flex gap-4 mt-6">
              <img src="/images/div2.png" alt="" />

              <div className="flex flex-col gap-2">
                <p className="text-[#4154F1] font-bold text-3xl">145</p>
                <p className="text-sm ">
                  <span className="text-sm font-bold ">12%</span>
                  increase
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[230px] h-[148px] p-4 shadow rounded">
            <p className="text-sm text-[#899BBD]">
              <span className="text-[#4154F1] text-lg font-medium">
                Absent{" "}
              </span>{" "}
              | Today
            </p>

            <div className="flex gap-4 mt-6">
              <img src="/images/div2.png" alt="" />

              <div className="flex flex-col gap-2">
                <p className="text-[#4154F1] font-bold text-3xl">145</p>
                <p className="text-sm ">
                  <span className="text-sm font-bold ">12%</span>
                  increase
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[252px] h-[148px] p-4 shadow rounded">
            <p className="text-sm text-[#899BBD]">
              <span className="text-[#4154F1] text-lg font-medium">
                Attendance
              </span>{" "}
              | This Month
            </p>

            <div className="flex gap-4 mt-6">
              <img src="/images/div2.png" alt="" />

              <div className="flex flex-col gap-2">
                <p className="text-[#4154F1] font-bold text-3xl">145</p>
                <p className="text-sm ">
                  <span className="text-sm font-bold ">12%</span>
                  increase
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white h-[440px] ">
          <div className="p-6">
            <p className="text-sm text-[#899BBD]">
              <span className="text-[#27CDA5] text-lg font-medium">
                Reports/
              </span>{" "}
              Today
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="col-span-4 pt-20 space-y-10">
        <div className="p-6 bg-white rounded">
          <p className="text-sm text-[#899BBD]">
            <span className="text-[#27CDA5] text-lg font-medium">
              Recent Activities
            </span>{" "}
            | Today
          </p>

          <RadarChart />
        </div>

        <div className="p-6 bg-white rounded">
          <p className="text-sm text-[#899BBD]">
            <span className="text-[#27CDA5] text-lg font-medium">
              Attendance Report
            </span>{" "}
            | This Month
          </p>

          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
