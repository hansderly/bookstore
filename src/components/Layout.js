import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './Navbar/Navbar';
import { getBooks } from '../store/book/bookSlice';

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoaded } = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(getBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
