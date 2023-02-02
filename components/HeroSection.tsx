'use client';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
const HeroSection = () => {
  return (
    <section id='home'>
      <div className=' flex flex-col text-center items-center justify-center  my-10 py-16 sm:py32 md:flex-row md:space-x-4 md:text-left md:py-52 '>
        <div className='md:w-1/2 md:mt-2 '>
          <Image
            className='rounded-full shadow-2xl'
            loading='lazy'
            alt='omar vega'
            src={'https://avatars.githubusercontent.com/u/83027913?v=4'}
            width={300}
            height={300}
          />
        </div>
        <div className='md:w-3/5 md:mt-2 md:ml-200'>
          <h2 className='font-bold text-4xl mt-6 md:text-7xl '>
            Hi, I&#39;m Omar!
          </h2>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I&#39;m a{' '}
            <span className='font-semibold text-teal-600'>
              Systems Engineer student
            </span>{' '}
            and
            <span className='font-semibold text-teal-600'>
              {' '}
              Full stack developer
            </span>{' '}
            based in Barranquilla, Colombia. Learning new technlogies and
            improving my skills
          </p>
          <Link
            to='projects'
            className='cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
