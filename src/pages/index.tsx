import React from 'react';

import { Drink, Suggestion } from '@/components/drink-suggestion';
import { useRandomizer } from '@/components/drink-suggestion/hooks/useRandomizer';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage({ drinks }: { drinks: Array<Drink> }) {
  const { drink, art, bean, generate } = useRandomizer(drinks);

  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='mt-4'>Hi, Let&apos;s Make a Coffee ☕</h1>
            <Suggestion drinkType={drink} artDesign={art} beanVariant={bean} />
            <button
              type='button'
              className='mt-6 mr-2 mb-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'
              onClick={generate}
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

type DrinksData = {
  data: {
    drinks: Array<Drink>;
  };
};

export async function getServerSideProps() {
  const res = await fetch(
    'https://coffee-randomizer-backend.herokuapp.com/graphql',
    {
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
    }
  );

  const resJson: DrinksData = await res.json();

  return {
    props: { drinks: resJson.data.drinks },
  };
}
