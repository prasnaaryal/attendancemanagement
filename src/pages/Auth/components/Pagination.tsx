// Pagination.js
import React, { useState } from "react";

const Pagination = ({ postsPerPage, length, handlePagination }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(length / postsPerPage);

  const handlePageChange = (pageNumber: any) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    handlePagination(pageNumber);
    console.log(pageNumber)
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2"
      >
        <p>less</p>
      </button>

      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2"
      >
        <p>More</p>{" "}
      </button>
    </div>
  );
};

export default Pagination;
