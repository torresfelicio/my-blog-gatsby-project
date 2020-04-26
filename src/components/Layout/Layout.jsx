import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {Helmet} from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';
import './Layout.css';

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main role="main">
      <Container>
        {children}
      </Container>
    </main>
  </div>
);
