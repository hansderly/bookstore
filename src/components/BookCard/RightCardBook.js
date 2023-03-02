import React from 'react';

import styles from './BookCard.module.css';

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
      <button type="button">Update progress</button>
    </div>
  </div>
);

export default RightCardBook;
