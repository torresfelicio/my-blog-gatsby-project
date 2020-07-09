import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import './post.css';

import SEO from '../components/SEO/SEO';
import { DiscussionEmbed} from 'disqus-react' ;


export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { fields } = data.markdownRemark;
    const { slug } = fields;
    const { title, tags, date, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    
    const post = this.props.data.markdownRemark;
    const disqusShortname = "https-lucastorres-dev";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
//page
    return ( 
      <>
      <Layout>
        <div className="article">
          <SEO title={title} url={slug} description={description} article />
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom:'20px' }}>{title}</h1>
          <p className="tags">{tags.map(tag => <Link style={{  marginRight: '20px', color: '#fff', opacity: '0.2'  }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
          <p style={{ fontSize: '12px',margin:'15px 0 15px'}}>{date}</p>
          <div className="content-post">
            <p dangerouslySetInnerHTML={{ __html: html }} />  
          </div> 
          </div>
      </Layout>
      <div className="disqus">
          <DiscussionEmbed className="disqusComent" shortname={disqusShortname} config={disqusConfig} />
          </div>
          
      </>
    )
  }
};


export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
