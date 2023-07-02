import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import './style.css'

const Contact = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`component ${theme}`}>
      <h1>Contact Component</h1>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Contact;