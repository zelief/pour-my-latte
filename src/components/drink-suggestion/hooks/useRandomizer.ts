import { useCallback, useEffect, useState } from 'react';

import { Drink } from '@/components/drink-suggestion';
import { arts, beans } from '@/components/drink-suggestion/constants';

export function useRandomizer(drinks: Array<Drink>) {
  const [drinkType, setDrinktype] = useState<Drink>();
  const [artDesign, setArtDesign] = useState<typeof arts[number]>();
  const [beanVariant, setBeanVariant] = useState<typeof beans[number]>();

  const generate = useCallback(() => {
    setRandom(setDrinktype, drinks);
    setRandom(setBeanVariant, beans);
  }, [drinks]);

  useEffect(() => {
    if (drinkType && drinkType.art) {
      setRandom(setArtDesign, arts);
    } else {
      setArtDesign(undefined);
    }
  }, [drinkType]);

  return {
    drink: drinkType,
    art: artDesign,
    bean: beanVariant,
    generate: generate,
  };
}

function setRandom<T>(
  setFunction: React.Dispatch<React.SetStateAction<T | undefined>>,
  arrayToBeRandomized: T[]
) {
  setFunction(
    arrayToBeRandomized[Math.floor(Math.random() * arrayToBeRandomized.length)]
  );
}
