import React from 'react'
import Header from '../../src/components/Header/Header'
import Footer from '../../src/components/Footer/Footer'
import '../../src/components/Layout/Layout';
import './Contact.css'


export default () => (
 <>
    <Header />
    <div className="cards">
<div className="services">
        <div className="content-0 content-1">
          <div className="fab fa-twitter">
</div>
<h2>
Twitter</h2>
<p>
É onde eu passo um tempo comentando e discutindo sobre as tecnologias do momento.</p>
<a href="https://twitter.com/torresfelicio">Acessar</a>
        </div>
<div className="content-0 content-2">
          <div className="fab fa-instagram">
</div>
<h2>
Instagram</h2>
<p>
Vem conferir meus histories, sempre coloco o que estou criando no momento.</p>
<a href="https://www.instagram.com/torresfellicio/">Acessar</a>
        </div>
<div className="content-0 content-3">
          <div className="fab fa-youtube">
</div>
<h2>
Github</h2>
<p>
Todos os meus códigos e projetos estão no github, vem dar uma olhada, talvez você pode me ajudar a mudar ou criar algo novo.</p>
<a href="https://github.com/torresfelicio">Acessar</a>
        </div>
</div>
</div>
<Footer/>
 </>
)