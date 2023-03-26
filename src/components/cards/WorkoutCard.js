import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => (
  <div className='w-full bg-brown hover:bg-brown-dark rounded-xl'>
    <Link to={`/workout/${workout.id}`}>
      <div className='p-4'>
        <img
          className='rounded-xl w-full'
          src={workout.gifUrl}
          alt={workout.name}
          loading='lazy'
        />
        <div className='text-white'>
          <h3 className='text-xl lg:text-2xl font-semibold mt-4 capitalize'>
            {workout.name}
          </h3>
          <p className='text-sm font-normal mt-2 capitalize'>
            Body Part - {workout.bodyPart}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default WorkoutCard;
