import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1> About me</h1>
            <p>Eu sou um aprendiz de frontend e estou estudando pesado para ser um developer de sucesso.</p>
            <p><Link to="/contact">Você quer trabalhar comigo?</Link></p>
        </Layout>
    )
}

export default AboutPage