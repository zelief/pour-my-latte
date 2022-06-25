import React, { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const types = ['piccolo', 'cappucino', 'latte'];
  const arts = [
    'heart',
    'tulip',
    'rosetta',
    'winged heart',
    'rippled heart',
    'winged tulip',
  ];

  const [chosenType, setChosenType] = useState('');
  const [chosenArt, setChosenArt] = useState('');

  function getLatteArt() {
    setChosenType(types[Math.floor(Math.random() * types.length)]);
    setChosenArt(arts[Math.floor(Math.random() * arts.length)]);
  }

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Hi, Let&apos;s Make a Coffee ☕</h1>
            <div>
              {chosenType == '' ? (
                ''
              ) : (
                <div>
                  Our Suggestion: <br />
                  Drink: {chosenType} <br />
                  Art: {chosenArt} <br />
                </div>
              )}
            </div>
            <button
              type='button'
              className='mt-6 mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'
              onClick={getLatteArt}
            >
              Go!
            </button>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/zelief/pour-my-latte'>
                Ziya El Arief
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
