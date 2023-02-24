import React from 'react';
import { BookCard, Form } from '../../components';

import styles from './Book.module.css';

const Book = () => (
  <div className={styles.container}>
    <BookCard title="The Hunger Game" author="Sydney" />
    <Form />
  </div>
);

export default Book;
