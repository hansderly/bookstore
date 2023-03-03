import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import styles from './Form.module.css';
import { addBook } from '../../store/book/bookSlice';
import Button from '../Button/Button';

const Form = () => {
  const [form, setForm] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = nanoid();
    const data = { item_id: itemId, id: itemId, ...form };
    dispatch(addBook(data));
    setForm({ title: '', author: '', category: '' });
  };

  return (
    <section className={styles.container}>
      <span className={styles.title}>Add a new book</span>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" required value={form.title} onChange={handleChange} name="title" placeholder="Title" />
        <input type="text" required value={form.author} onChange={handleChange} name="author" placeholder="Author" />
        <select className={styles.select} name="category" required onChange={handleChange}>
          <option value="">Category</option>
          <option value="SI-FI">SI-FI</option>
          <option value="Action">Action</option>
          <option value="Mistery">Mistery</option>
          <option value="Thriller">Thriller</option>
          <option value="Documentary">Documentary</option>
        </select>
        <Button btnType="primary">Add Book</Button>
      </form>
    </section>
  );
};

export default Form;
