import Image from 'next/image';
import React from 'react';

const skills = [
  { skill: 'Html' },
  { skill: 'Css' },
  { skill: 'Javascript' },
  { skill: 'Typescript' },
  { skill: 'React' },
  { skill: 'Redux' },
  { skill: 'Next.js' },
  { skill: 'Node.js' },
  { skill: 'Git' },
  { skill: 'MongoDB' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48 '>
        <h3 className='text-center font-bold text-4xl'>
          About me
          <hr className=' w-6 h-1 mx-auto  my-4 bg-teal-500 border-0 rounded' />
        </h3>
        <div className='sm:flex sm:flex-column  items-stretch justify-center align-top md:flex md:flex-row md:text-left md:p-4 md-0 md:space-x-10'>
          <div className='md:w-1/2'>
            <h4 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h4>
            <p>
              Hi, my name is Omar and I&#39;m a{' '}
              <span className='font-bold'>passionate </span>
              <span className='font-bold'>self-learner </span>
              and
              <span className='font-bold'> team-worker </span>Systems Engineer
              student and full stack developer based in Barranquilla, Colombia.
            </p>
            <br />
            <p>
              I&#39;m currently studying at Politécnico de la costa atlántica
              university and i&#39;ve also been in the Full Stack Make It Real
              Bootcamp learning Front and Back end development. I&#39;m
              Currently looking for growth opportunities
            </p>
            <br />
            <p>
              In my free time I like to learn new skills and also practice the
              ones I&#39;m familiar with, starting from little websites to full
              stack projects.
            </p>
          </div>
          <div className='m-0 md:w-1/2'>
            <h5 className='text-center text-2xl font-bold mb-6 md:text-left'>
              My skills
            </h5>
            <div className='flex flex-wrap flex-row justify-center md:justify-start '>
              {skills.map((item, i) => {
                return (
                  <p
                    key={i}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              loading='lazy'
              src={
                'https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif'
              }
              className=' hidden md:block md:rounded-lg sm:py-4 md:py-4 sm:hidden'
              width={300}
              height={300}
              alt={'code'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
