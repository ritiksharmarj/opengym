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

        <div className='grid gap-7 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {workoutVideos?.slice(0, 3)?.map((item) => (
            <a
              key={item.video.videoId}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >
              <div className='hover:text-brown'>
                <img
                  className='w-full h-52 object-cover rounded-xl'
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  loading='lazy'
                />
                <h3 className='sm:text-xl text-lg font-semibold sm:mt-4 mt-3'>
                  {item.video.title}
                </h3>
                <p className='text-slate-500 text-sm mt-2'>
                  {item.video.channelName}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutVideos;
