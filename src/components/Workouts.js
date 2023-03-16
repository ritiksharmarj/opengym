import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';

import WorkoutCard from './WorkoutCard';
import { fetchData, workoutOptions } from '../utils/fetchData';
// import Pagination from './Pagination';

const Workouts = ({ setWorkouts, workouts }) => {
  //Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [workoutsPerPage] = useState(6);

  // Fetch perfect workouts as soon as the page loads
  useEffect(() => {
    // IIFE
    (async () => {
      const workoutsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        workoutOptions
      );

      setWorkouts(workoutsData);
    })();
  }, [setWorkouts]);

  // Pagination Calc
  const indexOfLastWorkout = currentPage * workoutsPerPage; // 1 * 6 = 6
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage; // 6 - 6 = 0
  const currentWorkouts = workouts.slice(
    indexOfFirstWorkout,
    indexOfLastWorkout
  ); // So it will give us array from 0 to 5

  const handlePagination = (event) => {
    const selectedPage = (event.selected * workoutsPerPage) % workouts.length;
    setCurrentPage(selectedPage);
  };

  return (
    <section className='mx-auto max-w-7xl'>
      <div className='px-4 sm:px-6 lg:px-8 mt-28'>
        <h2 className='font-bold text-center text-5xl mb-10'>
          Perfect Workouts
        </h2>

        {/* Workout Card */}
        <div className='grid gap-7 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {currentWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-10'>
          {workouts.length > 9 && (
            // <Pagination
            //   currentPage={currentPage}
            //   setCurrentPage={setCurrentPage}
            //   workoutsPerPage={workoutsPerPage}
            //   workouts={workouts}
            // />
            <ReactPaginate
              className='flex items-center justify-center gap-4'
              breakLabel='...'
              previousLabel={<ChevronLeftIcon className='h-5 w-5' />}
              nextLabel={<ChevronRightIcon className='h-5 w-5' />}
              onPageChange={handlePagination}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(workouts.length / workoutsPerPage)}
              renderOnZeroPageCount={null}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
