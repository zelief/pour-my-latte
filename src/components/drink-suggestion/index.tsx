import { arts, beans } from '@/components/drink-suggestion/constants';

export type Drink = {
  name: string;
  art: boolean;
};

type SuggestionProps = {
  drinkType?: Drink;
  beanVariant?: typeof beans[number];
  artDesign?: typeof arts[number];
};

export function Suggestion({ drinkType, artDesign }: SuggestionProps) {
  if (!drinkType) return null;

  return (
    <div>
      Our Suggestion: <br />
      Drink: {drinkType.name} <br />
      {artDesign && <span>Art: {artDesign.name}</span>}
    </div>
  );
}
