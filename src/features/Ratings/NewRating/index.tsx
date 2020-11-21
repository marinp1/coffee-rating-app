import React from 'react';
import {useHistory} from 'react-router';

import {AppPage} from '../../../components/AppPage';
import {Button} from '../../../components/Button';
import {Input, TextArea} from '../../../components/Input';
import {SubHeader} from '../../../components/SubHeader';

import styles from './NewRating.module.scss';

const NewRating: React.FC<{}> = () => {
  const ratingForm = React.useRef<HTMLFormElement>(null);
  const [isFormValid, setFormValidity] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const {goBack} = useHistory();

  const checkFormValidity = () => {
    if (ratingForm.current) {
      setFormValidity(ratingForm.current.checkValidity());
    }
  };

  return (
    <AppPage>
      <SubHeader>Add a new rating</SubHeader>
      <form
        ref={ratingForm}
        className={styles['new-rating']}
        onChange={checkFormValidity}
        onSubmit={e => {
          e.preventDefault();
          if (ratingForm.current) {
            ratingForm.current.reportValidity();
          }
          if (!isFormValid) {
            return;
          }
        }}
      >
        <Input
          disabled={saving}
          label="Company"
          type="text"
          name="company-name"
          required={true}
          minLength={2}
          groupStyles={{gridArea: 'company'}}
        />
        <Input
          disabled={saving}
          label="Coffee name"
          type="text"
          name="coffee-name"
          minLength={2}
          required={true}
          groupStyles={{gridArea: 'name'}}
        />
        <Input
          label="Price"
          type="number"
          name="price"
          min={0}
          max={100}
          step={0.01}
          suffix="€"
          pattern="\d+[\.,]\d{2}"
          groupStyles={{gridArea: 'price'}}
        />
        <Input
          disabled={saving}
          label="Bag size"
          type="number"
          name="bag-size"
          min={10}
          max={2000}
          suffix="g"
          groupStyles={{gridArea: 'size'}}
        />
        <Input
          label="Rating (1-10)"
          type="number"
          name="rating"
          required={true}
          min={1}
          max={10}
          step={1}
          groupStyles={{gridArea: 'rating'}}
        />
        <TextArea
          disabled={saving}
          name="notes"
          label="Notes"
          groupStyles={{gridArea: 'notes'}}
        />
        <TextArea
          disabled={saving}
          name="taste-notes"
          label="Tasting notes"
          groupStyles={{gridArea: 'taste-notes'}}
        />
        <Button disabled={saving} theme="primary" style={{gridArea: 'add-btn'}}>
          Add a tasting note
        </Button>
        <Button
          disabled={saving}
          type="button"
          theme="secondary"
          style={{gridArea: 'cancel-btn'}}
          onClick={() => goBack()}
        >
          Cancel
        </Button>
        <Button
          disabled={saving}
          type="submit"
          theme="success"
          style={{gridArea: 'save-btn'}}
        >
          Save rating
        </Button>
      </form>
    </AppPage>
  );
};

export default NewRating;
