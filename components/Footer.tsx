import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
      <div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
          Omar Vega<a href='/' className='hover:underline'></a>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <a href='https://github.com/cieth' target={'_blank'} rel='noreferrer'>
            <AiOutlineGithub
              size={30}
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral'
            />
          </a>
          <a href='https://linkedin.com/oavega' target={'_blank'}>
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
