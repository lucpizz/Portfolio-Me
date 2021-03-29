import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data-set/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Portfolio-Me'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Portfolio-Me'} />
      </Helmet>
      <App />
    </>
  );
};