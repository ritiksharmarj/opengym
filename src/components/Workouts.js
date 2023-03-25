import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import WorkoutCard from './cards/WorkoutCard';
import { fetchData, workoutOptions } from '../utils/fetchData';
import Pagination from './Pagination';
import { WORKOUT_DATABASE_URL, RES_PER_PAGE } from '../utils/config';

const Workouts = ({ setWorkouts, workouts, searchNotFound }) => {
  //Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  // const [workoutsPerPage] = useState(6);

  // Fetch perfect workouts as soon as the page loads
  useEffect(() => {
    try {
      // IIFE
      (async () => {
        const workoutsData = await fetchData(
          `${WORKOUT_DATABASE_URL}/exercises`,
          workoutOptions
        );

        setWorkouts(workoutsData);
      })();
    } catch (error) {
      throw error;
    }
  }, [setWorkouts]);

  // Pagination Calc
  const offset = currentPage * RES_PER_PAGE; // 0 * 6 = 0
  const currentWorkouts = workouts?.slice(offset, offset + RES_PER_PAGE);

  // Display Loader until current workouts fetch
  if (!currentWorkouts.length)
    return (
      <div className='flex justify-center mt-28'>
        <MagnifyingGlass
          wrapperClass='magnifying-glass'
          height={60}
          width={60}
          glassColor='#c0efff'
          color='#9D4635'
        />
      </div>
    );

  // If there is no workouts based on the user's search input
  if (searchNotFound !== '')
    return (
      <p className='px-4 sm:px-6 lg:px-8 mt-28 mx-auto text-center text-slate-700'>
        {searchNotFound}
      </p>
    );

  return (
    <section className='mx-auto max-w-7xl'>
      <div className='px-4 sm:px-6 lg:px-8 mt-28 mb-16'>
        <h2 className='font-bold text-center text-3xl sm:text-5xl mb-10'>
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
            <Pagination setCurrentPage={setCurrentPage} items={workouts} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
