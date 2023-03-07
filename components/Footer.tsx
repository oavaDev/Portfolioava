import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0' />
      <div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div
          className={`flex flex-row items-center justify-center space-x-1 text-${
            currentTheme === 'dark' ? 'white' : 'black'
          }`}
        >
          Omar Vega<a href='/' className='hover:underline'></a>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
          <a
            href='https://github.com/oavaDev'
            target={'_blank'}
            rel='noreferrer'
          >
            <AiOutlineGithub
              size={30}
              color={currentTheme === 'dark' ? 'white' : 'black'}
              className='hover:-translate-y-1 transition-transform dark:text-neutral-800 cursor-pointer text-neutral'
            />
          </a>
          <a href='https://www.linkedin.com/in/oavega/' target={'_blank'}>
            <AiOutlineLinkedin
              color={currentTheme === 'dark' ? 'white' : 'black'}
              className='hover:-translate-y-1 transition-transform  dark:text-neutral-800 cursor-pointer text-neutral'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
