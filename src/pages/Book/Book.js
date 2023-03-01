import React from 'react';
import { useSelector } from 'react-redux';

import { BookCard, Form } from '../../components';
import styles from './Book.module.css';

const Book = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <div className={styles.container}>
      {
        Object.keys(books).map((key) => {
          const currBook = books[key][0];
          return (
            <BookCard
              key={key}
              id={key}
              title={currBook.title}
              author={currBook.author}
              category={currBook.category}
            />
          );
        })
      }
      <Form />
    </div>
  );
};

export default Book;
