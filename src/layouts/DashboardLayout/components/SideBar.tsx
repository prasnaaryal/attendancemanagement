import { ClipboardList, FileSpreadsheet, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
 
  return (
    <div className="container w-[250px] h-[841px] shadow-md space-y-4 p-6">
      <div className="">
        <p className="text-[#899BBD] text-xs font-semibold">TRACK</p>
        <Link to="/attendancesheet"  className="bg-[#F6F9FF] p-2">
          <p className="flex text-[#4154F1] font-semibold text-sm">
            <FileSpreadsheet className="text-[#012970] " /> Attendance Sheet
          </p>
        </Link>
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">ANALYZE</p>
        <Link to="/dashboard" className="flex p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 26 26"
          >
            <path
              stroke="#012970"
              stroke-width="1"
              d="M7.046 20.954q-.16-.16-.16-.354t.16-.354l4.718-4.723q.459-.46 1.136-.46t1.137.46l1.92 1.921q.174.173.443.173t.442-.173l4.38-4.379q.145-.146.344-.156q.198-.009.363.156q.165.166.165.357t-.165.357l-4.392 4.398q-.46.46-1.134.46t-1.134-.46l-1.927-1.927q-.173-.173-.442-.173t-.442.173l-4.704 4.704q-.14.14-.341.153t-.367-.153M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h12.77q.69 0 1.152.463T19 5.616v3.576q0 .349-.23.578t-.578.23H4v8.385q0 .23.192.423t.423.192zM4 9h14V5.616q0-.231-.192-.424T17.384 5H4.616q-.231 0-.424.192T4 5.616zm0 0V5z"
            ></path>
          </svg>
          <p className="text-[#012970] font-semibold text-sm">Dashboard</p>
        </Link>
        <Link to="/reports" className="flex p-2">
          <ClipboardList className="text-[#012970] " />
          <p className="text-[#012970] font-semibold text-sm">Report</p>
        </Link>
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">MANAGE</p>
        <Link to="/student"  className="flex p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 256 256"
          >
            <path
              fill="#012970"
              d="m227.79 52.62l-96-32a11.85 11.85 0 0 0-7.58 0l-96 32A12 12 0 0 0 20 63.37a6 6 0 0 0 0 .63v80a12 12 0 0 0 24 0V80.65l23.71 7.9a67.92 67.92 0 0 0 18.42 85A100.36 100.36 0 0 0 46 209.44a12 12 0 1 0 20.1 13.11C80.37 200.59 103 188 128 188s47.63 12.59 61.95 34.55a12 12 0 1 0 20.1-13.11a100.36 100.36 0 0 0-40.18-35.92a67.92 67.92 0 0 0 18.42-85l39.5-13.17a12 12 0 0 0 0-22.76Zm-99.79-8L186.05 64L128 83.35L70 64ZM172 120a44 44 0 1 1-81.06-23.71l33.27 11.09a11.9 11.9 0 0 0 7.58 0l33.27-11.09A43.85 43.85 0 0 1 172 120"
            />
          </svg>
          <p className="text-[#012970] font-semibold text-sm">Student</p>
        </Link>
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">CHAL CHLA NIKAL</p>
        <Link to="/logout"  className="flex p-2">
          <LogOut className="text-[#012970] " />
          <p className="text-[#012970] font-semibold text-sm">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
