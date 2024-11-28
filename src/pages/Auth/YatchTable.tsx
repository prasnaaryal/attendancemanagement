// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Pagination from "./component/Pagination";

// const YachtTable = () => {
//   const [yachts, setYachts] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage, setPostsPerPage] = useState(5);

//   interface Yacht {
//     name: string;
//     yachtType: { name: string };
//     sailingCountries: { name: string }[];
//   }

//   //   const fetchYachts = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         "https://api-pre-prod.exclusivegulets.com/api/es/all_yachts"
//   //       );
//   //       const data = await response.json();
//   //       setYachts(data.items);
//   //     } catch (error) {
//   //       console.error("Failed to fetch yachts:", error);
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     fetchYachts();
//   //   }, []);

//   // creating axios instance with base config

//   const axiosConfig = axios.create({
//     baseURL: `${import.meta.env.VITE_BASE_URL}`,
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });

//   // fetch data using axios

//   const fetchYachts = async () => {
//     try {
//       const response = await axiosConfig.get("/api/es/all_yachts");
//       setYachts(response.data.items);
//       console.log(setYachts);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch yachts:", error);
//     }
//   };
//   useEffect(() => {
//     fetchYachts();
//   }, []);

// //   pagination log
//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full text-sm divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left font-medium text-gray-900">
//               Name
//             </th>
//             <th className="px-6 py-3 text-left font-medium text-gray-900">
//               Yacht Type
//             </th>
//             <th className="px-6 py-3 text-left font-medium text-gray-900">
//               Sailing Countries
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {yachts.map((yacht, index) => (
//             <tr key={index}>
//               <td className="px-6 py-4 whitespace-nowrap text-gray-900">
//                 {yacht.name}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-gray-900">
//                 {yacht.yachtType?.name}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-gray-900">
//                 {yacht.sailingCountries
//                   .map((country) => country.name) // Extract country names
//                   .join(", ")}{" "}
//                 {/* Join country names into a single string */}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         length={yachts.length}
//         postsPerPage={postsPerPage}
//         handlePagination={handlePagination}
//       />
//     </div>
//   );
// };

// export default YachtTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";

const YachtTable = () => {
  interface Yacht {
    name: string;
    yachtType: { name: string };
    sailingCountries: { name: string }[];
  }
  const [yachts, setYachts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const fetchYachts = async () => {
    try {
      const response = await axios.get("/api/es/all_yachts");
      setYachts(response.data.items || []);
    } catch (error) {
      console.error("Failed to fetch yachts:", error);
    }
  };

  useEffect(() => {
    fetchYachts();
  }, []);

  // Calculate the current yachts to display
  const indexOfLastYacht = currentPage * postsPerPage;
  const indexOfFirstYacht = indexOfLastYacht - postsPerPage;
  const currentYachts = yachts.slice(indexOfFirstYacht, indexOfLastYacht);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-900">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-900">
              Yacht Type
            </th>
            <th className="px-6 py-3 text-left font-medium text-gray-900">
              Sailing Countries
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentYachts.map((yacht, index) => (
            <tr key={index}>
              <td>{yacht.name}</td>
              <td>{yacht.yachtType?.name}</td>
              <td>
                {yacht.sailingCountries
                  .map((country) => country.name)
                  .join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        length={yachts.length}
        postsPerPage={postsPerPage}
        handlePagination={setCurrentPage}
      />
    </div>
  );
};

export default YachtTable;
