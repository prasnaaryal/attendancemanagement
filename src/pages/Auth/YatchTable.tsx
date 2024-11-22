import React, { useEffect, useState } from "react";

interface Yacht {
  name: string;
  type: string;

  sailingCountries: string;
}

const YachtTable = () => {
  const [yachts, setYachts] = useState<any[]>([]);

  const fetchYachts = async () => {
    try {
      const response = await fetch(
        "https://api-pre-prod.exclusivegulets.com/api/es/all_yachts"
      );
      const data = await response.json();
      console.log("data", data);
      setYachts(data);
    } catch (error) {
      console.error("Failed to fetch yachts:", error); // Error handling
    }
  };

  useEffect(() => {
    fetchYachts(); // Execute fetchYachts function on component mount
  }, []);

  console.log("yachts", yachts); // The empty dependency array means this effect runs only once after the initial render

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
              Sailing Country
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {yachts.items.map((yacht, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.yachtType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                {yacht.sailingCountries}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YachtTable;
