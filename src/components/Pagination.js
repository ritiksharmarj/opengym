import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setCurrentPage, workoutsPerPage, workouts }) => {
  const pageCount = Math.ceil(workouts.length / workoutsPerPage);

  const handlePagination = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // https://www.npmjs.com/package/react-paginate?activeTab=readme
  // https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e

  return (
    <div className='overflow-hidden'>
      <ReactPaginate
        className='flex items-center justify-center gap-4'
        breakLabel='...'
        previousLabel={<ChevronLeftIcon className='h-5 w-5' />}
        nextLabel={<ChevronRightIcon className='h-5 w-5' />}
        onPageChange={handlePagination}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Pagination;
