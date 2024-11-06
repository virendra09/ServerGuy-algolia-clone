import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page > 0 ? page - 1 : 0)} disabled={page === 0}>
        Previous
      </button>
      <span>Page {page + 1}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
