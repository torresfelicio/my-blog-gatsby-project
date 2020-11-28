import React from 'react'
import {  graphql } from 'gatsby'

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost

  return (
    <>
      <div >
        <div style={{ maxWidth: '700px' }}>
          <div>
            <h1>{data.title.text}</h1>
            <h5>{`Postado em ${data.date} - Por Lucas Torres`}</h5>
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
