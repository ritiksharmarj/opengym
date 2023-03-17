import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import WorkoutCard from './cards/WorkoutCard';
import { fetchData, workoutOptions } from '../utils/fetchData';
import Pagination from './Pagination';

const Workouts = ({ setWorkouts, workouts }) => {
  //Pagination state
  const [currentPage, setCurrentPage] = useState(0);
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
  const offset = currentPage * workoutsPerPage; // 0 * 6 = 0
  const currentWorkouts = workouts.slice(offset, offset + workoutsPerPage);

  // Display Loader until current workouts fetch
  if (!currentWorkouts.length)
    return (
      <div className='flex justify-center mt-28'>
        <MagnifyingGlass
          height={60}
          width={60}
          glassColor='#c0efff'
          color='#9D4635'
        />
      </div>
    );

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
            <Pagination
              setCurrentPage={setCurrentPage}
              workoutsPerPage={workoutsPerPage}
              workouts={workouts}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
