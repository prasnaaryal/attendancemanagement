// Pagination.js
import React from 'react';

const Pagination = ({ length, postsPerPage, handlePagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => handlePagination(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
