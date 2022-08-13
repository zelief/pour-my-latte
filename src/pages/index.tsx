import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
const latteArtDrinks = [
  'Piccollo',
  'Brown Latte',
  'Hot Capucino',
  'Hot Mocha',
  'Cortado (Double shot)',
  'Flat White (Double shot)',
  'Cafe Latte (200/275ml) (Double Shot)',
  'Goth Latte',
];
const types = [
  ...latteArtDrinks,
  'Iced Latte',
  'Iced Americano',
  'Es Kopi Susu',
  'Espresso',
  'Iced Mocha',
  'Affogato',
  'Tubruk',
  'Filter Coffee',
];
const arts = [
  //'Heart',
  'Tulip',
  'Rosetta',
  'Winged Heart',
  'Rippled Heart',
  'Winged Tulip',
  'Slosetta',
  'Slow Rippled Heart',
];
const beans = ['arabica', 'blend'];

const esKopiSusuSweeteners = [
  'Coconut Delight',
  'Stevia',
  'Sari Tebu',
  'Brown Sugar',
];

export default function HomePage() {
  const [drinkType, setDrinktype] = useState('');
  const [artDesign, setArtDesign] = useState('');
  const [kopsusSweetener, setKopsusSweetener] = useState('');
  const [beanVariant, setBeanVariant] = useState('');

  function setString(
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    arrayToBeRandomized: string[]
  ) {
    setFunction(
      arrayToBeRandomized[
        Math.floor(Math.random() * arrayToBeRandomized.length)
      ]
    );
  }

  function getDrink() {
    setString(setDrinktype, types);
    setString(setBeanVariant, beans);
  }

  useEffect(() => {
    if (latteArtDrinks.includes(drinkType)) {
      setString(setArtDesign, arts);
    } else {
      setArtDesign('');
    }

    if (drinkType == 'Es Kopi Susu') {
      setString(setKopsusSweetener, esKopiSusuSweeteners);
    } else {
      setKopsusSweetener('');
    }
  }, [drinkType]);

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
                  Drink: {drinkType} <br />
                  Bean: {beanVariant} <br />
                  {artDesign && <span>Art: {artDesign}</span>} <br />
                  {kopsusSweetener && <span>Sweetener: {kopsusSweetener}</span>}
                </div>
              )}
            </div>
            <button
              type='button'
              className='mt-6 mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'
              onClick={getDrink}
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
