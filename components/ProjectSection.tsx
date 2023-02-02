import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';
const projects = [
  {
    name: 'Latam Airlines Clone',
    description:
      'A web app where you can search flights around Colombia, select luggage, your seats and book your flight',
    image:
      'https://res.cloudinary.com/dj80e8qqp/image/upload/v1669396136/1668785708715_qngpxz.jpg',
    github: 'https://github.com/Cieth/latam-airline-frontend-clone',
    link: 'https://latamairlines.vercel.app',
  },
  {
    name: 'Hifility',
    description:
      'An E-commerce web app built with NextJs and styled with NextUI where you can find many headphones, register,login, change your info and buy headphones. You may have to refresh twice if seeing demo',
    image:
      'https://res.cloudinary.com/dj80e8qqp/image/upload/v1669396043/Captura_de_pantalla_20221123_113659_zau7j2.png',
    github: 'https://github.com/Cieth/Hifility',
    link: 'https://hifility.vercel.app/',
  },
  {
    name: 'Multi-step Form',
    description:
      "It's a showcase of a multi-step form, made with react and using redux to manage states, completely responsive",
    image:
      'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674870621/steps_ortyqq.png',
    github: 'https://github.com/Cieth/multi-step-form',
    link: 'https://multi-step-form-beige.vercel.app/',
  },
  {
    name: 'Rest API countries',
    description:
      'A web app where you can search countries all around the world and get detailed information aboutit, made with react and consuming an API with axios',
    image:
      'https://res.cloudinary.com/dj80e8qqp/image/upload/v1674870460/restapi_uhjck8.png',
    github: 'https://github.com/Cieth/Rest-Countries',
    link: 'https://rest-countries-woad.vercel.app/',
  },
];

const ProjectSection = () => {
  return (
    <section id='projects'>
      <h3 className='text-center font-bold text-4xl'>
        Projects
        <hr className=' w-6 h-1 mx-auto  my-4 bg-teal-500 border-0 rounded' />
      </h3>
      <div className=' flex flex-col space-y-28'>
        {projects.map((item, i) => {
          return (
            <div key={i}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12'>
                  <div className=' mt-8 md:w-1/2'>
                    <Link href={item.link} target='_blank'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow.xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className=' mt-12 md:w-1/2'>
                    <h6 className='text-4xl font-bold mb-6'>{item.name}</h6>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {item.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4  '>
                      <Link href={item.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={item.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
