import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/Logo/Logo'
import GlobalStyle from '../components/Global/index'

import {  graphql } from 'gatsby'

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  const dataPost = data.date.split('-').reverse().join('/');
  
  return (
    <>
    <GlobalStyle/>
    <Link to="/">
      <Logo/>
    </Link>
      <div className="page_post">
        <div style={{ maxWidth: '700px' }}>
          <div>
            <h1>{data.title.text}</h1>
            <h5 className="data_post">{`Postado em ${dataPost} - Por Lucas Torres`}</h5>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content.html }}></div>
        </div>
      </div>
    </>
  )
}

export default Post 

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        date
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
