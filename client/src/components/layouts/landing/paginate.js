import React from 'react';

const Pagination = ({totalPosts, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil (totalPosts / 10); i++) {
    pageNumbers.push (i);
  }
  return (
    <div>
      <ul className="pagination d-flex justify-content-center">
        {pageNumbers.map (number => (
          <li key={Math.random () * 1000000} className="page-item">
            <span onClick={() => paginate (number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
