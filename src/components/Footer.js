import React from 'react';

import GithubIcon from '../assets/icons/github-icon.svg';
import TwitterIcon from '../assets/icons/twitter-icon.svg';

const Footer = () => (
  <div className='mx-auto max-w-7xl'>
    <div className='px-4 sm:px-6 lg:px-8 py-16'>
      <footer className='flex items-center justify-between border-t border-gray-200 pt-10'>
        <p>
          A Project by{' '}
          <a
            href='https://www.linkedin.com/in/ritiksharmarj/'
            target='_blank'
            rel='noopener noreferrer'
            className='uppercase font-semibold text-slate-700 hover:text-brown-dark'
          >
            Ritik Sharma
          </a>
        </p>
      </footer>
    </div>
  </div>
);

export default Footer;
