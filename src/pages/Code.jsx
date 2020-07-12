import React from 'react'
import Header from '../../src/components/Header/Header'
import Footer from '../../src/components/Footer/Footer'
import '../../src/components/Layout/Layout'
import './Code.css'
import project01 from '../../assets/project01.png';
import project02 from '../../assets/project02.png';
import project03 from '../../assets/project03.png';


export default () => (
   <>
   <Header />
      <section className="cards">
         <div className="card">
            <div className="card_image">
            <img src={project01}></img>
            </div>
            <div className="card_content">
               <p>Projeto github explorer usando a api do github para listar repositorios, usando ReactJS e Typescript.</p>
            </div>
            <div className="card_link">
               <a href="https://project-github-explorer.netlify.app/" target="_blanck">Acessar Projeto</a>
            </div>
         </div>

         <div className="card">
            <div className="card_image">
            <img src={project02}></img>
            </div>
            <div className="card_content">
               <p>Projeto utilizando conceitos aprendidos nos estudos de Javascript, HTML e CSS.</p>
            </div>
            <div className="card_link">
               <a href="https://projeto-tetrisjs.netlify.app/" target="_blanck">Acessar Projeto</a>
            </div>
         </div>

         <div className="card">
            <div className="card_image">
            <img src={project03}></img>
            </div>
            <div className="card_content">
               <p>Projeto utilizando conceitos dos estudos da Rocktseat com HTM, CSS e javascript basico.</p>
            </div>
            <div className="card_link">
               <a href="https://project-nlw-casa-criativa.netlify.app/" target="_blanck">Acessar Projeto</a>
            </div>
         </div>

         
      </section>
   </>
)
