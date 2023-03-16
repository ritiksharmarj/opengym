import React, { useEffect, useState } from 'react';

import WorkoutCard from './WorkoutCard';
import { fetchData, workoutOptions } from '../utils/fetchData';

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

  // Pagination
  const indexOfLastWorkout = currentPage * workoutsPerPage; // 1 * 6 = 6
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage; // 6 - 6 = 0
  const currentWorkouts = workouts.slice(
    indexOfFirstWorkout,
    indexOfLastWorkout
  ); // So it will give us array from 0 to 5

  return (
    <section className='mx-auto max-w-7xl'>
      <div className='grid gap-10 grid-cols-3 px-4 sm:px-6 lg:px-8 mt-28'>
        {currentWorkouts.map((workout, idx) => (
          <WorkoutCard key={idx} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;
