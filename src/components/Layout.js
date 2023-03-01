import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from './Navbar/Navbar';
import { getBooks } from '../store/book/bookSlice';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
