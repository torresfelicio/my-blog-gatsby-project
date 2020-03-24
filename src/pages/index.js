import React from "react"
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello.</h1>
            <h2>Hello Im Lucas I am developer and student the enginer software. live in Brazil.</h2>
            <p> Precisa de um desenvolvedor? <Link to="/contact">Contact me</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage