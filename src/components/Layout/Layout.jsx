import React from 'react';
import { Link } from "gatsby"
import Header from '../Header';
import Container from '../Container';
import {Helmet} from 'react-helmet';
import favicon from '../../../static/favicon.png';
import me from '../../../static/me.jpg';
import config from '../../../data/config';
import Footer from '../Footer/Footer';
import './Layout.css';

export default ({ children }) => (
  <>
  <div>
    <Helmet>
      <title>Lucas Torres</title>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main role="main">
    <img src={me} style={{borderRadius: '500px', width: '200px', height: '200px', display: 'flex',
        marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', marginBottom: '50px',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box', padding: '1px'
      }} alt="imagem do criador do blog"></img>

        <div className="links">
          <Link to="/"><p>Home</p></Link>
          <Link to="/Code/"><p>Codes</p></Link>
          <Link to="/Contact"><p>Contact</p></Link>
        </div>
      <Container> 
        {children}
      </Container>
    </main>
  </div> 

  </>
);
