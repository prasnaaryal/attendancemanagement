import React, { useEffect, useState } from "react";

const YachtTable = () => {
  const [yachts, setYachts] = useState<any[]>([]);

  interface Yacht {
    name: string;
    yachtType: { name: string };
    sailingCountries: { name: string }[];
  }

  const fetchYachts = async () => {
    try {
      const response = await fetch(
        "https://api-pre-prod.exclusivegulets.com/api/es/all_yachts"
      );
      const data = await response.json();
      setYachts(data.items);
    } catch (error) {
      console.error("Failed to fetch yachts:", error);
    }
  };

  useEffect(() => {
    fetchYachts();
  }, []);

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
          {yachts.map((yacht, index) => (
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
                  .join(", ")} {/* Join country names into a single string */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YachtTable;