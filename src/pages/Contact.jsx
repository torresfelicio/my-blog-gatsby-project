import React from 'react'
import Header from '../../src/components/Header/Header'
import Footer from '../../src/components/Footer/Footer'
import '../../src/components/Layout/Layout';
import './Contact.css'


export default () => (
<>
   <Header />
   <div className="cards">
        <div className="card">

        <div className="card_image_container">
        <img src="" alt="Logo do Linkedin" />
        </div>
        <div class="card_content">
        <p>Recriando Interface do Twitter</p>
        </div>
        <div class="card_info">
        <p>57 min</p>
        <p class="card_price">FREE</p>
        </div>
        </div>
   </div>
</>
)