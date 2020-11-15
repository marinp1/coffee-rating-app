import React from 'react';
import styles from './Ratings.module.scss';

import {Button} from '../../components/Button';

const Ratings: React.FC<{}> = () => {
  return (
    <div>
      <div className={styles['new-rating']}>
        <Button>Add new rating</Button>
      </div>
    </div>
  );
};

export default Ratings;
