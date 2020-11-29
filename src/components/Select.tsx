import React from 'react';
import styles from './Input.module.scss';

type OriginalSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type RequiredInputProps = Required<Pick<OriginalSelectProps, 'name'>>;
type OtherInputProps = Omit<OriginalSelectProps, 'name'>;

type CustomInputProps = {
  groupStyles?: React.CSSProperties;
  label: string;
  suffix?: string;
};

const Select: React.FC<
  OtherInputProps & RequiredInputProps & CustomInputProps
> = ({groupStyles, name, label, suffix, required, placeholder, ...rest}) => {
  return (
    <div
      className={`custom-input-group ${styles['group']}`}
      style={groupStyles || {}}
    >
      <label
        htmlFor={name}
        className={required ? styles['required-input'] : ''}
      >
        {label}
      </label>
      <div className={styles['wrapper']}>
        <select
          {...rest}
          name={name}
          className={styles['select']}
          required={required}
          placeholder={placeholder || '...'}
        />
        {suffix && <div className={styles['suffix']}>{suffix}</div>}
      </div>
    </div>
  );
};

export {Select};
