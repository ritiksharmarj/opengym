import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/opengym-logo.svg';
import GithubIcon from '../assets/icons/github-icon.svg';

const Header = () => (
  <header className='sticky top-0 z-30 bg-white bg-opacity-50 backdrop-blur backdrop-filter'>
    <div className='mx-auto max-w-7xl xl:px-8'>
      <div className='flex items-center justify-between border-b border-gray-200 py-5 px-4 sm:px-6 lg:px-8 xl:px-0'>
        <Link to='/'>
          <img src={Logo} alt='OpenGYM Logo' className='h-8' />
        </Link>
        <a
          className='flex max-w-fit items-center justify-center gap-2 rounded-full px-5 py-2 text-sm text-white shadow-md bg-brown hover:bg-brown-dark focus:outline-none focus:ring focus:ring-brown-light font-medium transition'
          href='https://github.com/ritiksharmarj/opengym'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GithubIcon} alt='GitHub Icon' />
          <p>Star on GitHub</p>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
