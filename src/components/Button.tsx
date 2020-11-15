import React from 'react';
import styles from './Button.module.scss';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'primary' | 'success' | 'secondary';
  }
> = ({children, theme, ...rest}) => {
  return (
    <button {...rest} className={styles[theme || 'primary']}>
      {children}
    </button>
  );
};

export {Button};
