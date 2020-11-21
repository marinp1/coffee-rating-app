import React from 'react';
import styles from './AppPage.module.scss';

const AppPage: React.FC<{}> = ({children}) => {
  return (
    <div className={styles['app-page']}>
      <div className={styles['app-page-wrapper']}>{children}</div>
    </div>
  );
};

export {AppPage};
