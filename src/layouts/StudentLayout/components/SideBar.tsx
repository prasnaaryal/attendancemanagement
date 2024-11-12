import { FileSpreadsheet, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <div className="container w-[250px] h-[841px] shadow-md space-y-2 p-6">
      <div className="flex p-2 gap-2">
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
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">ANALYSE</p>

        <div className="bg-[#F6F9FF] p-2">
          <p className="flex text-[#4154F1] font-semibold text-sm gap-2">
            <FileSpreadsheet className="text-[#012970]" /> Attendance
          </p>
        </div>
       
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">REQUEST</p>
        <div className="flex p-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 640 512"
          >
            <path
              fill="#012970"
              d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360s-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"
            />
          </svg>

          <p className="text-[#012970] font-semibold text-sm">Absent Application</p>
        </div>
        <div className="flex p-2 gap-2">
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
        </div>

      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">CHAL CHLA NIKAL</p>
        <div className="flex p-2 gap-2">
          <LogOut className="text-[#012970] " />
          <p className="text-[#012970] font-semibold text-sm">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
