import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import './Header.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header >
        <nav>
          <ul className="content">
          <li class="text" data-text="Lucas Torres"><Link to="/">{data.site.siteMetadata.title}</Link></li>
          </ul>
        </nav>
      </header>
      
    )}
    
  />
)
