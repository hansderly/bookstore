import React from 'react';
import { useSelector } from 'react-redux';

import { BookCard, Form } from '../../components';
import styles from './Book.module.css';

const Book = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <div className={styles.container}>
      {
        books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }
      <Form />
    </div>
  );
};

export default Book;
