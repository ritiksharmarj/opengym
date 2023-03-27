import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const WorkoutCard = ({ workout }) => {
  const workoutSlug = slugify(workout.name, { lower: true });
  const workoutUrl = `/workout/${workoutSlug}-${workout.id}`;

  return (
    <div className='w-full bg-brown hover:bg-brown-dark rounded-xl'>
      {/* <Link to={`/workout/${workout.id}`}> */}
      <Link to={workoutUrl}>
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
};

export default WorkoutCard;
