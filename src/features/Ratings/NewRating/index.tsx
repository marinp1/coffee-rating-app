import React from 'react';
import {SubHeader} from '../../../components/SubHeader';

import styles from './NewRating.module.scss';

const NewRating: React.FC<{}> = () => {
  return (
    <div className={styles['new-rating']}>
      <SubHeader>New rating</SubHeader>
      Hello
    </div>
  );
};

export default NewRating;
