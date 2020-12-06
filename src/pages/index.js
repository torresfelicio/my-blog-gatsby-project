import React from 'react'
import GlobalStyle from '../components/global/global'
import Logo from '../components/logo/logo'
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
    <GlobalStyle/>
    <div className="">
      <div className="">
        <Logo/>
        <ul className="">
          {edges.map(({ node: { data: { title: { text } } , uid } }) => {
            return (
              <li key={uid}>
                <Link to={`/${uid}`} className="">
                  <h2>{text}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}
