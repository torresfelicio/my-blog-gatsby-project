import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";
import SEO from '../components/SEO/SEO';

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { fields } = data.markdownRemark;
    const { slug } = fields;
    const { title, tags, date, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      <Layout>
        <div style={{ backgroundColor: '#F2F3F4', width: '100%', padding: '1.5rem', borderRadius: '0.50rem', margin: '10px 15px'}}>
          <SEO title={title} url={slug} description={description} article />
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom:'20px' }}>{title}</h1>
          <p>{tags.map(tag => <Link style={{  marginRight: '20px' }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
          <p style={{ fontSize: '12px',marginTop:'15px' }}>{date}</p>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
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