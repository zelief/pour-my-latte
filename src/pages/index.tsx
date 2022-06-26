import React, { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const latteArtDrinks = ['Piccollo', 'Cappucino', 'Hot Latte'];
  const types = [
    ...latteArtDrinks,
    'Iced Latte',
    'Iced Americano',
    'Es Kopi Susu',
    'Espresso',
  ];
  const arts = [
    'Heart',
    'Tulip',
    'Rosetta',
    'Winged Heart',
    'Rippled Heart',
    'Winged Tulip',
  ];

  const esKopiSusuVariant = ['Coconut Delight', 'Stevia'];

  const [chosenType, setChosenType] = useState('');
  const [chosenArt, setChosenArt] = useState('');
  const [kopsusVariant, setKopsusVariant] = useState('');

  function getLatteArt() {
    const drink = types[Math.floor(Math.random() * types.length)];
    setChosenType(`Drink: ${drink}`);
    if (latteArtDrinks.includes(drink)) {
      setChosenArt(`Art: ${arts[Math.floor(Math.random() * arts.length)]}`);
    } else {
      setChosenArt('');
    }
    if (drink == 'Es Kopi Susu') {
      setKopsusVariant(
        `Varian: ${
          esKopiSusuVariant[
            Math.floor(Math.random() * esKopiSusuVariant.length)
          ]
        }`
      );
    }
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
                  {chosenType} <br />
                  {chosenArt} <br />
                  {kopsusVariant}
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
