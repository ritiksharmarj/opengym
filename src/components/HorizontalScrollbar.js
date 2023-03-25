import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import WorkoutCard from './cards/WorkoutCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollPrev()}
      className='flex items-center justify-center bg-brown hover:bg-brown-dark rounded-lg p-2 focus:outline-none focus:ring focus:ring-brown-light transition absolute z-50 '
    >
      <ChevronLeftIcon className='h-5 w-5 text-white' />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollNext()}
      className='flex items-center justify-center bg-brown hover:bg-brown-dark rounded-lg p-2 focus:outline-none focus:ring focus:ring-brown-light transition absolute top-0'
    >
      <ChevronRightIcon className='h-5 w-5 text-white' />
    </button>
  );
};

const HorizontalScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <WorkoutCard
        workout={item}
        title={item.id}
        itemId={item.id}
        key={item.id}
      />
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
