import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const WorkoutVideos = ({ workoutVideos, name }) => {
  // Display Loader until workouts videos fetch
  if (!workoutVideos.length)
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
    <section className='mx-auto max-w-7xl my-28'>
      <div className='flex flex-col px-4 sm:px-6 lg:px-8'>
        <h2 className='font-bold text-2xl sm:text-4xl sm:mb-10 mb-6 capitalize'>
          <span className='text-brown'>{name}</span> Workout Videos
        </h2>

        <div></div>
      </div>
    </section>
  );
};

export default WorkoutVideos;
