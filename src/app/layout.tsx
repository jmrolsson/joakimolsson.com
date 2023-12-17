import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from './components/Navbar';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joakim Olsson',
  description: 'Personal blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-slate-800`}
      >
        <Providers>
          <Navbar />
          <main className='flex-grow flex items-center justify-center px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
