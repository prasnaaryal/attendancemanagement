import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";

const YachtTable = () => {
  const [yachts, setYachts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchItem, setSearchItem] = useState("");

  const axiosConfig = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // Fetch data using axios
  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const response = await axiosConfig.get("/api/es/all_yachts");
        setYachts(response.data.items);
      } catch (error) {
        console.error("Failed to fetch yachts:", error);
      }
    };
    fetchYachts();
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  // Filter yachts based on search item
  const filteredYachts = yachts.filter((yacht) =>
    yacht.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  // Calculate the yachts to display
  const indexOfLastYacht = currentPage * postsPerPage;
  const indexOfFirstYacht = indexOfLastYacht - postsPerPage;
  const currentYachts = filteredYachts.slice(indexOfFirstYacht, indexOfLastYacht);

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
            <th className="px-6 py-3 text-left font-medium text-gray-900">Name</th>
            <th className="px-6 py-3 text-left font-medium text-gray-900">Yacht Type</th>
            <th className="px-6 py-3 text-left font-medium text-gray-900">Sailing Countries</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentYachts.length > 0 ? (
            currentYachts.map((yacht, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{yacht.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{yacht.yachtType?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {yacht.sailingCountries.map((country) => country.name).join(", ")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center py-4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
      {currentYachts.length > 0 && (
        <Pagination
          length={filteredYachts.length}
          postsPerPage={postsPerPage}
          handlePagination={setCurrentPage}
        />
      )}
    </div>
  );
};

export default YachtTable;
