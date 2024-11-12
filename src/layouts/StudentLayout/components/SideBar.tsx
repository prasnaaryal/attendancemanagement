import { ClipboardList, FileSpreadsheet, LogOut } from "lucide-react";

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
        <div className="flex p-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="#012970"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8.25 14.25h-5.5V1.75h10.5v6.5m1 2.5l-3.5 3.5m-5-6.5h4.5m-4.5 3h1.5m-1.5-6h4.5m.5 6l3.5 3.5"
            />
          </svg>
          <p className="text-[#012970] font-semibold text-sm">Absence</p>
        </div>
        <div className="flex p-2 gap-2">
          <ClipboardList className="text-[#012970] " />
          <p className="text-[#012970] font-semibold text-sm">Report</p>
        </div>
      </div>

      <div>
        <p className="text-[#899BBD] text-xs font-semibold">MANAGE</p>
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

          <p className="text-[#012970] font-semibold text-sm">Teacher</p>
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
        <div className="flex p-2 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#012970"
              d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98z"
            />
            <path
              fill="currentColor"
              d="M13.98 11.01c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.54-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39c-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52c-.13-.39.09-.82.48-.94c1.53-.5 3.53-.66 5.36-.45c.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03"
            />
          </svg>
          <p className="text-[#012970] font-semibold text-sm">Subject</p>
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
