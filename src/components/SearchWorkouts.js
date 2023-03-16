import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchExercises = ({ setWorkouts }) => {
  const [search, setSearch] = useState('');

  return (
    <div className='xl:w-2/5 md:w-2/4 w-full mt-8 sm:mt-10 flex items-center justify-between gap-3 bg-white border border-gray-300 rounded-xl p-2 pl-3'>
      <input
        type='text'
        placeholder='Search your perfect workouts...'
        className='bg-white w-full border-none focus:outline-none focus:shadow-none focus:ring-0 placeholder:italic text-base p-0'
      />
      <button className='flex items-center justify-center bg-brown hover:bg-brown-dark rounded-lg p-2 focus:outline-none focus:ring focus:ring-brown-light transition'>
        <MagnifyingGlassIcon className='h-5 w-5 text-white' />
      </button>
    </div>
  );
};

export default SearchExercises;
