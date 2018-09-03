import React from 'react';
import { Button, Icon } from 'react-materialize';

const Pagination = ({ currentPage, totalPagesCount, goToNextPage, goToPreviousPage }) => {
  return (
    <div className="pagination">
      <Button
        onClick={() => goToPreviousPage()}
        disabled={currentPage === 1}
        className="btn_blue waves-effect"
      >
        <Icon left>keyboard_arrow_left</Icon>
        Previous Page
      </Button>
      <div className="pages-count">
        {currentPage} of {totalPagesCount} pages
      </div>
      <Button
        onClick={() => goToNextPage()}
        disabled={currentPage === totalPagesCount}
        className="btn_blue waves-effect"
      >
        Next Page
        <Icon right>keyboard_arrow_right</Icon>
      </Button>
    </div>
  );
};

export default Pagination;