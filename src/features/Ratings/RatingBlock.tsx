import React from 'react';

import styles from './RatingBlock.module.scss';

const RatingBlock: React.FC<{}> = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.img} />
      <div className={styles.manufacturer}>Nordqvist</div>
      <div className={styles.name}>Jubileum</div>
      <div className={styles.price}>1.00€ / 100g</div>
      <div className={styles.notes}>fruity</div>
      <div className={styles.date}>2020-06-06</div>
      <div className={styles.description}>Oikein hyvä.</div>
    </div>
  );
};

export {RatingBlock};
