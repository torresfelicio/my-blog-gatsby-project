import React from 'react'
import Logo from '../components/Logo/Logo'
import Social from '../components/Socials/index'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Home() {
  const { allPrismicPost: { edges } } = useStaticQuery(graphql`
    query TodosMeusPosts {
      allPrismicPost {
        edges {
          node {
            data {
              title {
                text
              }
            }
            uid
          }
        }
      }
    }
  `)

  return (
    <>
    <Logo/>
      <div className="postsContainer__post">
        <div style={{ maxWidth: '700px' }}>
          <ul>
            {edges.map(({ node: { data: { title: { text } } , uid } }) => {
              return (
                <li>
                  <Link to={`/${uid}`}>
                    <h2>{text}</h2>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Social
        linkedin="torresfelicio"
        github="torresfelicio"
      />
    </>
  )
}
