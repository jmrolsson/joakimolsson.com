import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='p-4 sticky top-0 drop-shadow-xl z-10 border-b'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 md:px-6 prose prose-xl flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='no-underline hover-theme-color text-slate-700 dark:text-white'
          >
            Joakim Olsson
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-4xl lg:text-5xl'>
          <Link
            href='https://github.com/jmrolsson'
            className='hover-theme-color'
          >
            <FaGithub size={36} className='text-slate-700 dark:text-white' />
          </Link>
          <Link
            href='https://linkedin.com/in/jmrolsson'
            className='hover-theme-color'
          >
            <FaLinkedin size={36} className='text-slate-700 dark:text-white' />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
