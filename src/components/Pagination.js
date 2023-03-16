import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({
  currentPage,
  setCurrentPage,
  workoutsPerPage,
  workouts,
}) => {
  const handlePagination = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= workouts.length / workoutsPerPage &&
      selectedPage !== currentPage
    )
      setCurrentPage(selectedPage);
  };

  return (
    <div className='flex items-center justify-center gap-4'>
      <button
        onClick={() => handlePagination(currentPage - 1)}
        className={currentPage > 1 ? 'inline-block' : 'hidden'}
      >
        <ChevronLeftIcon className='h-5 w-5' />
      </button>

      {[...Array(Math.ceil(workouts.length / 30))].map((_, idx) => (
        <button
          className={
            currentPage === idx + 1
              ? 'flex items-center justify-center bg-brown hover:bg-brown-dark rounded-lg w-9 p-2 focus:outline-none focus:ring focus:ring-brown-light transition text-white'
              : 'inline-block'
          }
          onClick={() => handlePagination(idx + 1)}
          key={idx}
        >
          {idx + 1}
        </button>
      ))}

      <button
        onClick={() => handlePagination(currentPage + 1)}
        className={
          currentPage < workouts.length / 30 ? 'inline-block' : 'hidden'
        }
      >
        <ChevronRightIcon className='h-5 w-5' />
      </button>
    </div>
  );
};

export default Pagination;
