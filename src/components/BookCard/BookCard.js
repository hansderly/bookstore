import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookCard.module.css';
import LeftBookCard from './LeftBookCard';
import RightCardBook from './RightCardBook';

const BookCard = ({
  id, title, author, category,
}) => (
  <div className={styles.container}>
    <LeftBookCard id={id} title={title} author={author} category={category} />
    <RightCardBook />
  </div>
);

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
