import React from 'react';
import HeaderLogo from '../logo/header-logo';
import UserBlock from '../user-block/user-block';

function Header() {
  return (
    <header className="page-header film-card__head">
      <HeaderLogo />
      <UserBlock />
    </header>
  );
}

export default Header;
