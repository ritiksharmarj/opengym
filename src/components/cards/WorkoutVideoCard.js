import React from 'react';

const WorkoutVideoCard = ({ item }) => (
  <a
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
      <p className='text-slate-500 text-sm mt-2'>{item.video.channelName}</p>
    </div>
  </a>
);

export default WorkoutVideoCard;
