import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h3 className='header__title'>
        <a className='header__title-link' href='./'>
          My Sandbox
        </a>
      </h3>
    </header>
  );
};

export default Header;
