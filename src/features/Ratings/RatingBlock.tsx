import React from 'react';

import styles from './RatingBlock.module.scss';

export interface CoffeeRating {
  manufacturer: string;
  rating: number;
  name: string;
  bagPrice: number;
  bagWeight: number;
  notes: string[];
  date: string;
  description: string;
}

const RatingBlock: React.FC<CoffeeRating> = ({
  manufacturer,
  rating,
  name,
  bagPrice,
  bagWeight,
  notes,
  date,
  description,
}) => {
  const stars = [...new Array(10)]
    .map((val, ind) => (rating > ind ? '★' : '☆'))
    .join(' ');

  const price = String((bagPrice / bagWeight).toFixed(2));

  return (
    <div
      className={styles['rating-block']}
      key={`${date}-${manufacturer}-${name}`}
    >
      <div className={styles.img}></div>
      <div className={styles.manufacturer}>{manufacturer}</div>
      <div className={styles.rating}>{stars}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}€ / 100g</div>
      <div className={styles.notes}>{notes}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>
        <i>{description}</i>
      </div>
    </div>
  );
};

export {RatingBlock};
