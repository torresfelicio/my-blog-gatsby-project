import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello.</h1>
            <h2>Hello Im Lucas I am developer and student the enginer software. live in Brazil.</h2>
            <p> Precisa de um desenvolvedor? <Link to="/contact">Contact me</Link></p>
        </div>
    )
}

export default IndexPage