import React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

const WorkoutVideoCard = ({ item }) => (
  <a
    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    target='_blank'
    rel='noreferrer'
  >
    <div className='workout__video--card hover:text-brown'>
      <div className='relative'>
        <img
          className='w-full h-52 object-cover rounded-xl'
          src={item.video.thumbnails[0].url}
          alt={item.video.title}
          loading='lazy'
        />
        <PlayCircleIcon className='play__circle--icon w-12 h-12 text-white fill-[#ffffff60] absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transition' />
      </div>
      <h3 className='sm:text-xl text-lg font-semibold sm:mt-4 mt-3 transition'>
        {item.video.title}
      </h3>
      <p className='text-slate-500 text-sm mt-2'>{item.video.channelName}</p>
    </div>
  </a>
);

export default WorkoutVideoCard;
