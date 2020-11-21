import React from 'react';

import {AppPage} from '../../../components/AppPage';
import {Input, TextArea} from '../../../components/Input';
import {SubHeader} from '../../../components/SubHeader';

import styles from './NewRating.module.scss';

const NewRating: React.FC<{}> = () => {
  return (
    <AppPage>
      <SubHeader>New rating</SubHeader>
      <div className={styles['new-rating']}>
        <Input
          label="Company"
          type="text"
          name="company-name"
          required={true}
        />
        <Input
          label="Coffee name"
          type="text"
          name="coffee-name"
          required={true}
        />
        <Input
          label="Price"
          type="number"
          name="price"
          min={0}
          max={100}
          step={0.01}
          suffix="€"
        />
        <Input
          label="Bag size"
          type="number"
          name="bag-size"
          min={10}
          max={2000}
          step={5}
          suffix="g"
        />
        <TextArea name="notes" label="Notes" />
      </div>
    </AppPage>
  );
};

export default NewRating;
