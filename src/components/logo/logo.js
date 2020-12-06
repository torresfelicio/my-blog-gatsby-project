import React from 'react'
import { Link } from 'gatsby'
import GlobalStyle from '../global/global'

export default function Logo() {
    return(
        <>
        <GlobalStyle/>
            <Link to="/">
            <div className="headerContainer">
                <img src="https://unavatar.now.sh/github/torresfelicio" />
                <h1>Lucas Torrses</h1>
            </div>
            </Link>
            <span >
                <ul className="contatos">
                    <Link to="https://github.com/torresfelicio" className="links">
                    <li>Github</li>
                    </Link>
                    <Link to="https://www.linkedin.com/in/torresfelicio/" className="links">
                    <li>Linkedin</li>
                    </Link>
                </ul>
            </span>
        </>
    )
}
