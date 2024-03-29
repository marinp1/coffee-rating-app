import React from 'react';
import {useHistory} from 'react-router';

import {Button} from '../../../components/Button';
import {Input, TextArea, RadioGroup} from '../../../components/Input';
import {Select} from '../../../components/Select';

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

  React.useEffect(() => {
    if (!ratingsReference) {
      push('/ratings');
    }
  }, [ratingsReference]);

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
        <Select
          name="ground-type"
          label="Ground type"
          required={true}
          groupStyles={{gridArea: 'ground-type'}}
        >
          <option value={GroundType.bean}>Bean</option>
          <option value={GroundType.ground}>Ground</option>
        </Select>
        <RadioGroup
          label="Roast level"
          required={true}
          name="roast-level"
          min={1}
          max={5}
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
        <RadioGroup
          label="Rating (1-10)"
          required={true}
          name="rating"
          min={1}
          max={10}
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
        <Button
          disabled={saving || true}
          theme="primary"
          style={{gridArea: 'add-btn'}}
        >
          (TBA)
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
