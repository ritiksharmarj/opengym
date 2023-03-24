import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';
import { RES_PER_PAGE } from '../utils/config';

const Pagination = ({ setCurrentPage, workouts }) => {
  const pageCount = Math.ceil(workouts.length / RES_PER_PAGE);

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
        activeClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Pagination;
