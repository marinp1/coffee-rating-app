import React from 'react';
import styles from './SubHeader.module.scss';

const SubHeader: React.FC<{}> = ({children}) => {
  return <div className={styles['sub-header']}>{children}</div>;
};

export {SubHeader};
