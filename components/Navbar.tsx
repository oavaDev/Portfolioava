'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'Projects',
  },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted && (
        <header
          className={`w-full sm:mx-auto sm:bg-dark animate-slideUpCubiBezier animation-delay-2  px-4 sm:px-20 fixed top-0 z-50 ${
            currentTheme === 'dark' ? 'bg-stone-900' : 'bg-white'
          } `}
        >
          <div className='justify-between md:items-center md:flex'>
            <div className='flex items-center justify-between py-3'>
              <div className='md:py-5 md:block'>
                <h2
                  className={`text-2xl font-bold text-${
                    currentTheme === 'dark' ? 'white' : 'black'
                  } hover:text-neutral-500  cursor-pointer`}
                >
                  Omar Vega
                </h2>
              </div>
              <div className='md:hidden'>
                <button onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <IoMdClose
                      size={30}
                      color={currentTheme !== 'dark' ? 'black' : 'white'}
                    />
                  ) : (
                    <IoMdMenu
                      size={30}
                      color={currentTheme !== 'dark' ? 'black' : 'white'}
                    />
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <div className='items-center md:items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                  {NAV_ITEMS.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        to={item.page}
                        className={`block lg:inline-block text-${
                          currentTheme === 'dark'
                            ? 'stone-900'
                            : 'text-neutral-100'
                        } hover:text-neutral-500 cursor-pointer`}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  {currentTheme === 'dark' ? (
                    <button
                      onClick={() => setTheme('light')}
                      className='bg-slate-100 p-2 rounded-xl'
                    >
                      <RiSunLine size={25} color='black' />
                    </button>
                  ) : (
                    <button
                      onClick={() => setTheme('dark')}
                      className='bg-slate-100 p-2 rounded-xl'
                    >
                      <RiMoonFill size={25} color='black' />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
