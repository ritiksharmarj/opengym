import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarWorkouts = ({ targetMuscleWorkouts, equipmentWorkouts }) => (
  <>
    {/* Target Muscle Workouts */}
    <section className='mx-auto max-w-7xl'>
      <div className='flex flex-col px-4 sm:px-6 lg:px-8'>
        <h2 className='font-bold text-2xl sm:text-4xl sm:mb-10 mb-6 capitalize'>
          Similar <span className='text-brown'>Target Muscle</span> Workouts
        </h2>
        <div>
          {targetMuscleWorkouts.length !== 0 ? (
            <HorizontalScrollbar data={targetMuscleWorkouts} />
          ) : (
            <MagnifyingGlass
              height={60}
              width={60}
              glassColor='#c0efff'
              color='#9D4635'
            />
          )}
        </div>
      </div>
    </section>

    {/* Equipment Workouts */}
    <section className='mx-auto max-w-7xl'>
      <div className='flex flex-col px-4 sm:px-6 lg:px-8'>
        <h2 className='font-bold text-2xl sm:text-4xl sm:mb-10 mb-6 capitalize'>
          Similar <span className='text-brown'>Equipment</span> Workouts
        </h2>
        {equipmentWorkouts.length !== 0 ? (
          <HorizontalScrollbar data={equipmentWorkouts} />
        ) : (
          <MagnifyingGlass
            height={60}
            width={60}
            glassColor='#c0efff'
            color='#9D4635'
          />
        )}
      </div>
    </section>
  </>
);

export default SimilarWorkouts;
