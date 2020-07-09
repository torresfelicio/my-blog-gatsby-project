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
        <div className="header_name">
          <Link to="/"><h1 class="text" data-text="Lucas Torres">{data.site.siteMetadata.title}</h1></Link>
        </div>
      </header>
      
    )}
    
  />
)
