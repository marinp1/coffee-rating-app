import React from 'react';
import styles from './Ratings.module.scss';

import {Button} from '../../components/Button';

import {RatingBlock, CoffeeRating} from './RatingBlock';

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
    manufacturer: 'Nordqvist',
    rating: 5,
    name: 'Jubileum',
    bagPrice: 339,
    bagWeight: 500,
    notes: ['fruity'],
    date: '2020-06-06',
    description: 'Hyvä.',
  },
];

const Ratings: React.FC<{}> = () => {
  return (
    <div>
      <div className={styles['ratings']}>{coffeeRatings.map(RatingBlock)}</div>
      <div className={styles['new-rating']}>
        <Button>Add new rating</Button>
      </div>
    </div>
  );
};

export default Ratings;
