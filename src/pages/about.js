import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
        <Header />
            <h1> About me</h1>
            <p>Eu sou um aprendiz de frontend e estou estudando pesado para ser um developer de sucesso.</p>
            <p><Link to="/contact">Você quer trabalhar comigo?</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage