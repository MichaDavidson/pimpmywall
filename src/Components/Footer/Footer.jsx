import React from 'react'
import '../Footer/Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-anchors">
                <a href="#" class="anchor-inicio">Inicio</a>
                <a href="#" class="anchor-playa">Playa</a>
                <a href="#" class="anchor-bosque">Boho y Terra</a>
                <a href="#" class="anchor-montaña">Mundo</a>
                <a href="#" class="anchor-mundo">Sets</a>
            </div>
            <div class="footer-redes">
                <a href="https://www.instagram.com/accounts/login/" target="_blank" class="redes-instagram"><BsInstagram /></a>
                <a href="https://web.whatsapp.com/" target="_blank" class="redes-wp"><BsWhatsapp /></a>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
