import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookCard.module.css';

const BookCard = ({ title, author }) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <div>Action</div>
      <div className={styles.bookNameAuthor}>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div className={styles.actions}>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
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
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
