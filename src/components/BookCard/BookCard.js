import React from 'react';

import styles from './BookCard.module.css';

const BookCard = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <div>Action</div>
      <div className={styles.bookNameAuthor}>
        <h2>The Hunger Games</h2>
        <p>Suzanne Collins</p>
      </div>
      <div className={styles.actions}>
        <div>Comments</div>
        <div>Remove</div>
        <div>Edit</div>
      </div>
    </div>
    <div>
      <div>
        <div>cirle</div>
        <div>80%</div>
      </div>
      <div>
        <div>current chapter</div>
        <div>Chapter 12</div>
        <div>button update progress</div>
      </div>
    </div>
  </div>
);

export default BookCard;
