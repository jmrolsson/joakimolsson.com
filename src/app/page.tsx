import React from 'react';
import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center flex-grow p-4 md:p-24'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        <div className='relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-slate-700 dark:border-white'>
          <Image
            src='/profile.jpg'
            alt='Joakim Olsson'
            layout='fill' // Keep the 'fill' layout for responsive sizing
            objectFit='cover' // Ensure the image covers the container
            className='rounded-full'
          />
        </div>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>
            Hi, I'm Joakim Olsson
          </h1>
          <p className='text-md md:text-lg mb-4'>
            I'm a Machine Learning Engineer and Physics PhD.
          </p>
          <a
            href='/joakim-olsson-resume.pdf'
            download
            className='flex items-center justify-center px-3 py-2 border-2 border-slate-700 dark:border-white text-sm md:text-base font-medium rounded-md text-slate-700 dark:text-white hover:bg-slate-700 hover:text-white dark:hover:bg-white dark:hover:text-slate-700'
          >
            <FaArrowDown className='mr-2' /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}
