import React from 'react';

import styles from './BookCard.module.css';
import Button from '../Button/Button';

const RightCardBook = () => (
  <div className={styles.right}>
    <div className={styles.completed}>
      <div className={styles.circle} />
      <div className={styles.pourcentage}>
        <h2>80%</h2>
        <p>Completed</p>
      </div>
    </div>
    <div>
      <div className={styles.chapterInfos}>
        <div>Current Chapter</div>
        <div>Chapter 12</div>
      </div>
      <Button btnType="primary" type="button">Update progress</Button>
    </div>
  </div>
);

export default RightCardBook;
