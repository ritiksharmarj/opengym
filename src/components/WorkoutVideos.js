import React, { useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import Pagination from './Pagination';
import { RES_PER_PAGE } from '../utils/config';
import WorkoutVideoCard from './cards/WorkoutVideoCard';

const WorkoutVideos = ({ workoutVideos, name }) => {
  //Pagination state
  const [currentPage, setCurrentPage] = useState(0);

  // Pagination Calc
  const offset = currentPage * RES_PER_PAGE; // 0 * 6 = 0
  const currentWorkoutVideos = workoutVideos?.slice(
    offset,
    offset + RES_PER_PAGE
  );

  // Display Loader until workout videos fetch
  if (!currentWorkoutVideos.length)
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

  return (
    <section className='mx-auto max-w-7xl mt-28 mb-16'>
      <div className='flex flex-col px-4 sm:px-6 lg:px-8'>
        <h2 className='font-bold text-2xl sm:text-4xl sm:mb-10 mb-6 capitalize'>
          <span className='text-brown'>{name}</span> Workout Videos
        </h2>

        {/* Workout Video Card */}
        <div className='grid gap-7 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {currentWorkoutVideos.map((item) => (
            <WorkoutVideoCard key={item.video.videoId} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className='mt-10'>
          {workoutVideos.length > 9 && (
            <Pagination setCurrentPage={setCurrentPage} items={workoutVideos} />
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkoutVideos;
