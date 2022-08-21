import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

const arts = [
  { name: 'Heart', score: 1 },
  { name: 'Tulip', score: 5 },
  { name: 'Rosetta', score: 5 },
  { name: 'Winged Heart', score: 5 },
  { name: 'Rippled Heart', score: 3 },
  { name: 'Winged Tulip', score: 5 },
  { name: 'Slosetta', score: 5 },
  { name: 'Slow Rippled Heart', score: 4 },
];

const beans = [
  { name: 'arabica', score: 5 },
  { name: 'blend', score: 3 },
];

type Drink = {
  name: string;
  art: boolean;
  cups: Array<string>;
  score: number;
};

export default function HomePage({ drinks }: { drinks: Array<Drink> }) {
  const [drinkType, setDrinktype] = useState<Drink>();
  const [artDesign, setArtDesign] = useState<typeof arts[number]>();
  const [beanVariant, setBeanVariant] = useState<typeof beans[number]>();

  function getDrink() {
    setRandom(setDrinktype, drinks);
    setRandom(setBeanVariant, beans);
  }

  useEffect(() => {
    if (drinkType && drinkType.art) {
      setRandom(setArtDesign, arts);
    } else {
      setArtDesign(undefined);
    }
  }, [drinkType]);

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Hi, Let&apos;s Make a Coffee ☕</h1>
            <Suggestion
              drinkType={drinkType}
              artDesign={artDesign}
              beanVariant={beanVariant}
            />
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

function setRandom<T>(
  setFunction: React.Dispatch<React.SetStateAction<T | undefined>>,
  arrayToBeRandomized: T[]
) {
  setFunction(
    arrayToBeRandomized[Math.floor(Math.random() * arrayToBeRandomized.length)]
  );
}

type SuggestionProps = {
  drinkType?: Drink;
  beanVariant?: typeof beans[number];
  artDesign?: typeof arts[number];
};

function Suggestion({ drinkType, beanVariant, artDesign }: SuggestionProps) {
  if (!drinkType) return null;

  return (
    <div>
      Our Suggestion: <br />
      Drink: {drinkType.name} <br />
      Bean: {beanVariant?.name} <br />
      {artDesign && <span>Art: {artDesign.name}</span>}
    </div>
  );
}

type DrinksData = {
  data: {
    drinks: Array<Drink>;
  };
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          drinks {
            name
            art
            cups
            score
          }
        }
      `,
      variables: {},
    }),
  });

  const resJson: DrinksData = await res.json();

  return {
    props: { drinks: resJson.data.drinks },
  };
}
