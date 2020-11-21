import React from 'react';
import styles from './Input.module.scss';

type OriginalInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type RequiredInputProps = Required<Pick<OriginalInputProps, 'name' | 'type'>>;
type OtherInputProps = Omit<OriginalInputProps, 'name' | 'type'>;

type CustomInputProps = {
  label: string;
  suffix?: string;
};

const Input: React.FC<
  OtherInputProps & RequiredInputProps & CustomInputProps
> = ({type, name, label, suffix, required, placeholder, ...rest}) => {
  return (
    <div className={`custom-input-group ${styles['group']}`}>
      <label
        htmlFor={name}
        className={required ? styles['required-input'] : ''}
      >
        {label}
      </label>
      <div className={styles['wrapper']}>
        <input
          {...rest}
          name={name}
          className={styles[type]}
          required={required}
          type={type}
          placeholder={placeholder || '...'}
        />
        {suffix && <div className={styles['suffix']}>{suffix}</div>}
      </div>
    </div>
  );
};

type OriginalTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type RequiredTextAreaProps = Required<Pick<OriginalTextAreaProps, 'name'>>;
type OtherTextAreaProps = Omit<OriginalTextAreaProps, 'name'>;

const TextArea: React.FC<
  OtherTextAreaProps & RequiredTextAreaProps & CustomInputProps
> = ({name, label, suffix, required, placeholder, ...rest}) => {
  return (
    <div className={`custom-input-group ${styles['group']}`}>
      <label
        htmlFor={name}
        className={required ? styles['required-input'] : ''}
      >
        {label}
      </label>
      <div className={styles['wrapper']}>
        <textarea
          {...rest}
          name={name}
          required={required}
          className={styles['textarea']}
          placeholder={placeholder || '...'}
        />
        {suffix && <div className={styles['suffix']}>{suffix}</div>}
      </div>
    </div>
  );
};

export {Input, TextArea};
