import React, { useState } from 'react';

import SquigglyLines from '../components/SquigglyLines';
import SearchWorkouts from '../components/SearchWorkouts';
import Workouts from '../components/Workouts';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <>
      <main className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-24'>
          <p className='text-sm text-slate-500 border border-gray-200 rounded-2xl py-1 px-4 mb-5'>
            Access more than <span className='font-semibold'>1000</span>{' '}
            workouts
          </p>

          <h1 className='mx-auto max-w-5xl text-5xl sm:text-7xl font-bold text-center sm:leading-tight'>
            Get Your Perfect Workout With{' '}
            <span className='relative whitespace-nowrap text-brown'>
              <SquigglyLines />
              <span className='relative'>No Time</span>
            </span>
          </h1>

          <p className='mx-auto max-w-2xl mt-12 text-lg leading-7 text-slate-700 text-center'>
            This app provides a library of exercises with step-by-step
            instructions and videos to help users perform each exercise
            correctly.
          </p>

          <SearchWorkouts setWorkouts={setWorkouts} />
        </div>
      </main>

      <Workouts setWorkouts={setWorkouts} workouts={workouts} />
    </>
  );
};

export default Home;
