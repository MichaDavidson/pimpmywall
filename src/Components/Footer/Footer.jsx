import React from 'react'
import '../Footer/Footer.css'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-anchors">
                <Link to="/" className='link-inicio'>Inicio</Link>
                <Link to="/categoria/playa" className='link-playa'>Playa</Link>
                <Link to="/categoria/bohoyterra" className='link-boho'>Boho y Terra</Link>
                <Link to="/categoria/mundo" className='link-mundo'>Mundo</Link>
                <Link to="/categoria/sets" className='link-sets'>Sets</Link>
            </div>
            <div className="footer-redes">
                <a href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank" className="redes-instagram"><BsInstagram /></a>
                <a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank" className="redes-wp"><BsWhatsapp /></a>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
