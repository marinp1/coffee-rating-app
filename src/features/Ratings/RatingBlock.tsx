import React from 'react';
import {Rating} from '../../types';

import styles from './RatingBlock.module.scss';

const RatingBlock: React.FC<Rating> = ({
  manufacturer,
  rating,
  coffeeName,
  price,
  tastingNotes,
  notes,
  groundType,
  roastLevel,
  date,
  bagSize,
}) => {
  const stars = [...new Array(10)]
    .map((_, ind) => (rating > ind ? '★' : '☆'))
    .join(' ');

  const formattedPrice = String((price / bagSize).toFixed(2));

  return (
    <div className={styles['rating-block']} key={`${manufacturer}-${name}`}>
      <div className={styles.img}></div>
      <div className={styles.manufacturer}>{manufacturer}</div>
      <div className={styles.rating}>{stars}</div>
      <div className={styles.name}>{coffeeName}</div>
      <div className={styles['extra-info']}>
        <div className={styles['roast-level']}>
          {formattedPrice}€ / 100g | {`${groundType} (${roastLevel})`}
        </div>
      </div>
      <div className={styles.notes}>{tastingNotes.join(' | ')}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.description}>
        <i>{notes}</i>
      </div>
    </div>
  );
};

export {RatingBlock};
