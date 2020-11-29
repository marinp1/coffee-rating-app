import React from 'react';
import styles from './Input.module.scss';

type OriginalInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type RequiredInputProps = Required<Pick<OriginalInputProps, 'name' | 'type'>>;
type OtherInputProps = Omit<OriginalInputProps, 'name' | 'type'>;

type CustomInputProps = {
  groupStyles?: React.CSSProperties;
  label: string;
  suffix?: string;
};

const Input: React.FC<
  OtherInputProps & RequiredInputProps & CustomInputProps
> = ({
  groupStyles,
  type,
  name,
  label,
  suffix,
  required,
  placeholder,
  ...rest
}) => {
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

interface RadioGroupProps {
  groupStyles?: React.CSSProperties;
  name: string;
  label: string;
  required?: boolean;
  options?: Array<{
    label: string;
    value: string;
  }>;
  min?: number;
  max?: number;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  groupStyles,
  name,
  label,
  required,
  options,
  min,
  max,
}) => {
  const radioOptions =
    min && max
      ? [...new Array(max - min + 1)].map((_, ind) => ({
          label: String(ind + 1),
          value: String(ind + 1),
        }))
      : options || [];

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
      <div className={`${styles['wrapper']} ${styles['radio']}`}>
        {radioOptions.map(({label, value}) => (
          <div key={`radio-${name}-${value}`}>
            <input
              id={`${name}-${value}`}
              name={name}
              required={required}
              type="radio"
              value={value}
            />
            <label htmlFor={`${name}-${value}`}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Input, TextArea, RadioGroup};
