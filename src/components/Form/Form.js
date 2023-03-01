import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../store/book/bookSlice';

const Form = () => {
  const [form, setForm] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = nanoid();
    const category = 'Action';
    const data = {
      item_id: itemId, id: itemId, ...form, category,
    };
    dispatch(addBook(data));
    setForm({ title: '', author: '' });
  };

  return (
    <>
      <form>
        <input value={form.title} onChange={handleChange} name="title" placeholder="Title" />
        <input value={form.author} onChange={handleChange} name="author" placeholder="Author" />
        <button onClick={handleSubmit} type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Form;
