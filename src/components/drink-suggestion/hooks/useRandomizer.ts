import { useCallback, useEffect, useState } from 'react';

import { Drink } from '@/components/drink-suggestion';
import { arts } from '@/components/drink-suggestion/constants';
import { drinks } from '@/components/drink-suggestion/drinks';

export function useRandomizer() {
  const [drinkType, setDrinktype] = useState<Drink>();
  const [artDesign, setArtDesign] = useState<typeof arts[number]>();

  const generate = useCallback(() => {
    setRandom(setDrinktype, drinks);
  }, []);

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
    generate: generate,
  };
}

function setRandom<T extends { name: string }>(
  setFunction: React.Dispatch<React.SetStateAction<T | undefined>>,
  arrayToBeRandomized: T[]
) {
  const newArr: T[] = [];
  arrayToBeRandomized.forEach((item) => {
    for (let i = 0; i < 3; i++) {
      newArr.push(item);
    }
  });

  setFunction(newArr[Math.floor(Math.random() * newArr.length)]);
}
