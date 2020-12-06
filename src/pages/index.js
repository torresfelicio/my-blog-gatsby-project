import React from 'react'
import GlobalStyle from '../components/global/global'
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
        <div className="">
          <h1 className="">Lucas Torres</h1>
          <span className="">Ainda não comecei a escrever</span>
        </div>
        <ul className="">
          {edges.map(({ node: { data: { title: { text } } , uid } }) => {
            return (
              <li className="">
                <Link to={`/${uid}`} className="">
                  <h2>{text}</h2>
                </Link>
                <hr />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}
