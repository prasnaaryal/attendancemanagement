import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {yatchDataRequest} from "../../redux/api/Yatchtable/YatchActions"

import axios from "axios";
import Pagination from "./components/Pagination";

const YachtTable = () => {
  const [yachts, setYachts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const dispatch = useDispatch();
  const {yatch}=useSelector(
    
  )

  interface Yacht {
    name: string;
    yachtType: { name: string };
    sailingCountries: { name: string }[];
  }

  useEffect(() => {
    dispatch(yatchDataRequest())
  }, [dispatch]);

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
