import './style.css';

import { Link } from 'react-router-dom';

import { FaLink } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-container">

                <div className="hero-text">

                    <p className='small-hero'>Olá, eu sou</p>
                    <h1>Felipe Castilho</h1>
                    <p>Desenvolvedor Front end & UI designer</p>

                    <div className="container-btn-hero">

                        <Link to='https://drive.google.com/file/d/1tFXTwQSEl6sDZ1zea8OgBE1q7mFRUSzQ/view?usp=drive_link' className="btn-curriculo" target='_blank'> <FaLink size={20} /> Meu Currículo</Link>

                        <Link to='/certificados' target='_blank' className="btn-certificados">  <PiCertificate size={20} /> Certificados</Link>

                    </div>
                </div>

                <div className='hero-logo'>
                    <span className="icon-left">&lt;</span>
                    <span className="icon-bar">/</span>
                    <span className="icon-right">&gt;</span>
                </div>

            </div>
        </section>
    )
}