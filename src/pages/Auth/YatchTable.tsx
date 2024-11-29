import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
// const users = [
//   { firstName: "John", id: 1 },
//   { firstName: "Emily", id: 2 },
//   { firstName: "Michael", id: 3 },
//   { firstName: "Sarah", id: 4 },
//   { firstName: "David", id: 5 },
//   { firstName: "Jessica", id: 6 },
//   { firstName: "Daniel", id: 7 },
//   { firstName: "Olivia", id: 8 },
//   { firstName: "Matthew", id: 9 },
//   { firstName: "Sophia", id: 10 }
// ]
const YachtTable = () => {
  const [yachts, setYachts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchItem, setSearchItem] = useState("");
  const [filteredYacht, setFilteredYacht] = useState([]);

  interface Yacht {
    name: string;
    yachtType: { name: string };
    sailingCountries: { name: string }[];
  }

  const axiosConfig = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // fetch data using axios

  const fetchYachts = async () => {
    try {
      const response = await axiosConfig.get("/api/es/all_yachts");
      setYachts(response.data.items);
      console.log(setYachts);
    } catch (error) {
      console.error("Failed to fetch yachts:", error);
    }
  };
  useEffect(() => {
    fetchYachts();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = yachts.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredYacht(filteredItems);
    setCurrentPage(1);
  };

  const getCurrentYacht = () => {
    const indexOfLastYacht = currentPage * postsPerPage;
    const indexOfFirstYacht = indexOfLastYacht - postsPerPage;
    const displayYacht = searchItem ? filteredYacht : yachts;
    return displayYacht.slice(indexOfFirstYacht, indexOfLastYacht);
  };

  const currentYachts = getCurrentYacht();

  return (
    <div className="overflow-x-auto">
      <div>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>

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
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.yachtType?.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.sailingCountries
                  .map((country) => country.name) // Extract country names
                  .join(", ")}{" "}
                {/* Join country names into a single string */}
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
