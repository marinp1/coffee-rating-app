import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Button.module.scss';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    theme?: 'primary' | 'success' | 'secondary';
    href?: {
      type: 'internal' | 'external';
      to: string;
    };
  }
> = ({children, href, theme, onClick, ...rest}) => {
  return (
    <button
      {...rest}
      className={styles[theme || 'primary']}
      onClick={
        href
          ? e => {
              e.preventDefault();
            }
          : onClick
      }
    >
      {href ? (
        href.type === 'internal' ? (
          <Link to={href.to}>{children}</Link>
        ) : (
          <a href={href.to}>{children}</a>
        )
      ) : (
        children
      )}
    </button>
  );
};

export {Button};
