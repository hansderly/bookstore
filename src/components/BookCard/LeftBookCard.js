import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './BookCard.module.css';
import { removeBook } from '../../store/book/bookSlice';
import Button from '../Button/Button';

const LeftBookCard = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.left}>
      <div>{category}</div>
      <div className={styles.bookNameAuthor}>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div className={styles.actions}>
        <Button type="button">Comments</Button>
        <Button onClick={() => dispatch(removeBook({ id }))} type="button">Remove</Button>
        <Button type="button">Edit</Button>
      </div>
    </div>
  );
};

LeftBookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default LeftBookCard;
