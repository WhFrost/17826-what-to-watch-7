import React from 'react';
import HeaderLogo from '../logo/header-logo';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">Ошибка сервера 404</h1>
      </header>
      <div style={{
        marginBottom: '40px',
      }}
      >
        <p style={{
          textAlign: 'center',
          fontSize: '24px',
        }}
        >
        Страница не найдена
        </p>
        <Link className="breadcrumbs__link" to="/" style={{
          textAlign: 'center',
          fontSize: '24px',
        }}
        >
          <span>
            Вернуться на главную
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
