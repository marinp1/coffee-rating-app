import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  faStar as faFullStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';

import {faStar as faEmptyStar} from '@fortawesome/free-regular-svg-icons';

import {Rating} from '../../types';

import styles from './RatingBlock.module.scss';

const ratingToIcons = (rating: number) => {
  const numberOfHalfStars = rating % 2;
  const numberOfFullStars = Math.floor(rating / 2);
  const numberOfEmptyStars = 5 - numberOfFullStars - numberOfHalfStars;

  const mapStarCountToIcon = (
    n: number,
    icon: typeof faFullStar | typeof faEmptyStar
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ) => [...new Array(n)].map(_ => <FontAwesomeIcon icon={icon} />);

  return (
    <>
      {mapStarCountToIcon(numberOfFullStars, faFullStar)}
      {mapStarCountToIcon(numberOfHalfStars, faStarHalfAlt)}
      {mapStarCountToIcon(numberOfEmptyStars, faEmptyStar)}
    </>
  );
};

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
  const stars = ratingToIcons(rating);

  const formattedPrice = String((price / bagSize).toFixed(2));
  const formattedDate = new Date(date).toLocaleDateString();

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
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.description}>
        <i>{notes}</i>
      </div>
    </div>
  );
};

export {RatingBlock};
