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
          <Link to="/"><li class="text" data-text="Lucas Torres">{data.site.siteMetadata.title}</li></Link>
          </ul>
        </nav>
      </header>
      
    )}
    
  />
)
