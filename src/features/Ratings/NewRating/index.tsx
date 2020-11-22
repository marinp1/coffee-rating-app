import React from 'react';
import {useHistory} from 'react-router';

import {AppPage} from '../../../components/AppPage';
import {Button} from '../../../components/Button';
import {Input, TextArea} from '../../../components/Input';
import {SubHeader} from '../../../components/SubHeader';

import styles from './NewRating.module.scss';

import {Rating, GroundType} from '../../../types';

interface RatingForm {
  manufacturer: string;
  'coffee-name': string;
  'ground-type': typeof GroundType;
  'roast-level': string;
  price: string;
  'bag-size': string;
  rating: string;
  notes: string;
  'tasting-notes': string;
}

const mapFormToRating = (formData: FormData): Rating => {
  const asPairs = [...formData].reduce(
    (prev, [key, val]) => ({
      ...prev,
      [key]: val || '',
    }),
    {}
  ) as RatingForm;

  return {
    manufacturer: asPairs['manufacturer'],
    coffeeName: asPairs['coffee-name'],
    groundType: asPairs['ground-type'],
    roastLevel: Number(asPairs['roast-level'] || '-1'),
    price:
      Number(
        (
          (100 * Number(asPairs['price'] || '0')) /
          Number(asPairs['bag-size'] || '1')
        ).toFixed(2)
      ) * 100,
    rating: Number(asPairs['rating'] || '-1'),
    notes: asPairs['notes'],
    tastingNotes: asPairs['tasting-notes'].split(' '),
  };
};

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
          setSaving(true);
          e.preventDefault();
          if (ratingForm.current) {
            ratingForm.current.reportValidity();
          }
          if (!isFormValid || !ratingForm.current) {
            setSaving(false);
            return;
          }
          console.log(mapFormToRating(new FormData(ratingForm.current)));
          window.setTimeout(() => setSaving(false), 300);
        }}
      >
        <Input
          disabled={saving}
          label="Manufacturer"
          type="text"
          name="manufacturer"
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
        <select
          name="ground-type"
          required={true}
          style={{gridArea: 'ground-type'}}
        >
          <option value={GroundType.bean}>Bean</option>
          <option value={GroundType.ground}>Ground</option>
        </select>
        <Input
          label="Roast level"
          type="number"
          name="roast-level"
          required={true}
          min={1}
          max={7}
          step={1}
          pattern="\d+"
          groupStyles={{gridArea: 'roast-level'}}
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
          name="tasting-notes"
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
