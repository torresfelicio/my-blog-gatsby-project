import React from 'react'
import GlobalStyle from '../components/global/global'
import Logo from '../components/logo/logo.jsx'
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
              time 
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
        <ul className="titlePost">
          {edges.map(({ node: { data: { title: { text }, time}, uid } }) => {
            return (
              <li key={uid}>
                <Link to={`/${uid}`} className="title_post">
                  <h2>{text}</h2>
                </Link>
                <p className="time_post">{time}min</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}
