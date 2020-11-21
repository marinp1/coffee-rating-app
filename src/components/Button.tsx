import React from 'react';
import {useHistory} from 'react-router';
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
  const history = useHistory();

  return (
    <button
      {...rest}
      className={styles[theme || 'primary']}
      onClick={
        href
          ? e => {
              e.preventDefault();
              href.type === 'internal'
                ? history.push(href.to)
                : window.location.assign(href.to);
            }
          : onClick
      }
    >
      {children}
    </button>
  );
};

export {Button};
