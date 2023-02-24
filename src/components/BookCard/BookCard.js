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
        <button type="button">Remove</button>
      </div>
    </div>
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookCard;
