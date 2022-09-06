import React from 'react'
import '../Footer/Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-anchors">
                <a href="#" className="anchor-inicio">Inicio</a>
                <a href="#" className="anchor-playa">Playa</a>
                <a href="#" className="anchor-bosque">Boho y Terra</a>
                <a href="#" className="anchor-montaña">Mundo</a>
                <a href="#" className="anchor-mundo">Sets</a>
            </div>
            <div className="footer-redes">
                <a href="https://www.instagram.com/accounts/login/" target="_blank" className="redes-instagram"><BsInstagram /></a>
                <a href="https://web.whatsapp.com/" target="_blank" className="redes-wp"><BsWhatsapp /></a>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
