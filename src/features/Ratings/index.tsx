import React from 'react';
import styles from './Ratings.module.scss';

import {Button} from '../../components/Button';
import {SubHeader} from '../../components/SubHeader';

import {RatingBlock, CoffeeRating} from './RatingBlock';
import {Store} from '../../types';

const coffeeRatings: CoffeeRating[] = [
  {
    manufacturer: 'Nordqvist',
    rating: 5,
    name: 'Jubileum',
    bagPrice: 339,
    bagWeight: 500,
    notes: ['fruity'],
    date: '2020-06-06',
    description: 'Hyvä.',
  },
  {
    manufacturer: 'Nordqvist 2',
    rating: 5,
    name: 'Jubileum 1',
    bagPrice: 339,
    bagWeight: 500,
    notes: ['fruity'],
    date: '2020-06-06',
    description: 'Hyvä.',
  },
];

const RATING_ORDERS = ['latest', 'best'] as const;
const RATING_TITLES: Record<typeof RATING_ORDERS[number], string> = {
  best: 'Best reviews',
  latest: 'Latest reviews',
};

const SubHeaderComponent: React.FC<{
  order: typeof RATING_ORDERS[number];
  onClick: (order: typeof RATING_ORDERS[number]) => void;
  selected?: boolean;
}> = ({order, onClick, selected}) => (
  <span
    onClick={() => onClick(order)}
    className={`${styles['rating-selector']} ${selected && styles['selected']}`}
  >
    {RATING_TITLES[order]}
  </span>
);

const Ratings: React.FC<{store: Store}> = () => {
  const [ratingOrder, setRatingOrder] = React.useState<
    typeof RATING_ORDERS[number]
  >('latest');

  return (
    <>
      <SubHeader>
        {RATING_ORDERS.map(o => (
          <SubHeaderComponent
            order={o}
            key={o}
            onClick={setRatingOrder}
            selected={o === ratingOrder}
          />
        ))}
      </SubHeader>
      <div className={styles['ratings']}>{coffeeRatings.map(RatingBlock)}</div>
      <div className={styles['new-rating']}>
        <Button href={{type: 'internal', to: '/ratings/new'}}>
          Add new rating
        </Button>
      </div>
    </>
  );
};

export default Ratings;
