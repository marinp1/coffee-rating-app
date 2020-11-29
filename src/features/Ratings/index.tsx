import React from 'react';

import styles from './Ratings.module.scss';

import {Button} from '../../components/Button';
import {SubHeader} from '../../components/SubHeader';

import {RatingBlock} from './RatingBlock';
import {AppProps, Rating} from '../../types';

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

const Ratings: React.FC<AppProps> = ({store, dispatch}) => {
  const [ratingOrder, setRatingOrder] = React.useState<
    typeof RATING_ORDERS[number]
  >('latest');

  const {ratings, firebase, currentUser, ratingsReference} = store;

  React.useEffect(() => {
    if (currentUser && firebase && !ratingsReference) {
      const ref = firebase.database.ref(`ratings/${currentUser.uid}`);

      dispatch({
        type: 'INITIALISE_RATINGS_DATABASE',
        ref,
      });

      ref.on('value', snapshot => {
        const dbRatings = snapshot.val() as
          | {
              [id: string]: Rating;
            }
          | undefined;

        if (dbRatings) {
          dispatch({
            type: 'SET_RATINGS',
            ratings: Object.values(dbRatings),
          });
        }
      });
    }
  }, [currentUser, firebase, ratingsReference]);

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
      <div className={styles['ratings']}>{ratings.map(RatingBlock)}</div>
      <div className={styles['new-rating']}>
        <Button href={{type: 'internal', to: '/ratings/new'}}>
          Add new rating
        </Button>
      </div>
    </>
  );
};

export default Ratings;
