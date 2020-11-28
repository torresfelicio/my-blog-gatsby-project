import React from 'react'
import Social from '../Socials/index'
import GlobalStyle from '../Global/index'

export default function Logo() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <header className="headerContainer">
          <img src="https://unavatar.now.sh/github/torresfelicio" />
          <h1>
            Lucas Torres
          </h1>
        </header>
      </div>
    </>
  )
}