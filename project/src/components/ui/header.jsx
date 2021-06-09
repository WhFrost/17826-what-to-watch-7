import React from 'react';
import Logo from './logo';
import UserBlock from './user-block';

function Header() {
  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
}

export default Header;
