import React from 'react'
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