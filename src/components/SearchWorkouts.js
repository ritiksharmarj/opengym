import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { fetchData, workoutOptions } from '../utils/fetchData';

const SearchExercises = ({ setWorkouts }) => {
  const [search, setSearch] = useState('');
  // let searchedWorkoutsNotFound;

  // Handler function for search field
  const handleSearch = async () => {
    try {
      // If there is any input in the search field
      if (search) {
        const workoutsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          workoutOptions
        );

        // Filter the workouts data based on the user's input
        const searchedWorkouts = workoutsData.filter(
          (workout) =>
            workout.name.toLowerCase().includes(search) ||
            workout.target.toLowerCase().includes(search) ||
            workout.equipment.toLowerCase().includes(search) ||
            workout.bodyPart.toLowerCase().includes(search)
        );

        // Empty the search field after click the search button
        setSearch('');

        console.log(searchedWorkouts);
        setWorkouts(searchedWorkouts);
        // searchedWorkouts.length === 0
        //   ? (searchedWorkoutsNotFound = 'Workouts Not Found. Try Again!')
        //   : setWorkouts(searchedWorkouts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='xl:w-2/5 md:w-2/4 w-full mt-8 sm:mt-10 flex items-center justify-between gap-3 bg-white border border-gray-300 rounded-xl p-2 pl-3'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search your perfect workouts...'
        className='bg-white w-full border-none focus:outline-none focus:shadow-none focus:ring-0 placeholder:italic text-base p-0'
      />
      <button
        onClick={handleSearch}
        className='flex items-center justify-center bg-brown hover:bg-brown-dark rounded-lg p-2 focus:outline-none focus:ring focus:ring-brown-light transition'
      >
        <MagnifyingGlassIcon className='h-5 w-5 text-white' />
      </button>
    </div>
  );
};

export default SearchExercises;
