import React, { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const latteArtDrinks = [
    'Piccollo',
    'Cappucino',
    'Hot Latte',
    'Hot Mocha',
    'Flat White',
  ];
  const types = [
    ...latteArtDrinks,
    'Iced Latte',
    'Iced Americano',
    'Es Kopi Susu',
    'Espresso',
    'Iced Mocha',
  ];
  const arts = [
    'Heart',
    'Tulip',
    'Rosetta',
    'Winged Heart',
    'Rippled Heart',
    'Winged Tulip',
  ];
  const beans = ['arabica', 'blend'];

  const esKopiSusuVariant = ['Coconut Delight', 'Stevia', 'Sari Tebu'];

  const [drinkType, setDrinktype] = useState('');
  const [artDesign, setArtDesign] = useState('');
  const [kopsusVariant, setKopsusVariant] = useState('');
  const [beanVariant, setBeanVariant] = useState('');

  function getLatteArt() {
    const drink = types[Math.floor(Math.random() * types.length)];
    setDrinktype(`Drink: ${drink}`);
    setBeanVariant(`Bean: ${beans[Math.floor(Math.random() * beans.length)]}`);
    if (latteArtDrinks.includes(drink)) {
      setArtDesign(`Art: ${arts[Math.floor(Math.random() * arts.length)]}`);
    } else {
      setArtDesign('');
    }
    if (drink == 'Es Kopi Susu') {
      setKopsusVariant(
        `Varian: ${
          esKopiSusuVariant[
            Math.floor(Math.random() * esKopiSusuVariant.length)
          ]
        }`
      );
      return;
    }
    setKopsusVariant('');
  }

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Hi, Let&apos;s Make a Coffee ☕</h1>
            <div>
              {drinkType == '' ? (
                ''
              ) : (
                <div>
                  Our Suggestion: <br />
                  {drinkType} <br />
                  {beanVariant} <br />
                  {artDesign} <br />
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
