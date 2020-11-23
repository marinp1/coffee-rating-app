import React from 'react';
import {useHistory} from 'react-router';

import {Button} from '../../../components/Button';
import {Input, TextArea} from '../../../components/Input';
import {SubHeader} from '../../../components/SubHeader';

import styles from './NewRating.module.scss';

import {Rating, GroundType, AppProps} from '../../../types';
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
    date: new Date().toISOString(),
    manufacturer: asPairs['manufacturer'],
    coffeeName: asPairs['coffee-name'],
    groundType: asPairs['ground-type'],
    roastLevel: Number(asPairs['roast-level'] || '-1'),
    price: Math.round(Number(asPairs['price'] || '0') * 100),
    bagSize: Number(asPairs['bag-size'] || '1'),
    rating: Number(asPairs['rating'] || '-1'),
    notes: asPairs['notes'],
    tastingNotes: asPairs['tasting-notes'].split(' '),
  };
};

const NewRating: React.FC<AppProps> = ({store}) => {
  const ratingForm = React.useRef<HTMLFormElement>(null);
  const [isFormValid, setFormValidity] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const {push} = useHistory();

  const {ratingsReference} = store;

  const checkFormValidity = () => {
    if (ratingForm.current) {
      setFormValidity(ratingForm.current.checkValidity());
    }
  };

  const handleSubmit = () => {
    if (!ratingsReference) {
      return;
    }
    setSaving(true);
    if (ratingForm.current) {
      ratingForm.current.reportValidity();
    }
    if (!isFormValid || !ratingForm.current) {
      setSaving(false);
      return;
    }

    const rating = mapFormToRating(new FormData(ratingForm.current));

    const newRatingRef = ratingsReference.push();
    newRatingRef.set(rating, err => {
      if (err) {
        console.log(err);
        setSaving(false);
        return;
      }
      setSaving(false);
      push('/ratings');
    });
  };

  return (
    <>
      <SubHeader>Add a new rating</SubHeader>
      <form
        ref={ratingForm}
        className={styles['new-rating']}
        onChange={checkFormValidity}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
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
          href={{type: 'internal', to: '/ratings'}}
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
    </>
  );
};

export default NewRating;
