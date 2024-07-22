import './style.css';
import symbol from '../../assets/hero-img.svg';

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

                        <Link to='https://drive.google.com/file/d/1JSSCyZPYL7D6GV-ZFAVN-fT5ZoXN36ML/view?usp=sharing' className="btn-curriculo" target='_blank'> <FaLink size={20} /> Meu Currículo</Link>

                        <Link to='/certificados' target='_blank' className="btn-certificados">  <PiCertificate size={20} /> Certificados</Link>

                    </div>
                </div>

                <div className="hero-img">
                    <img src={symbol} alt="Símbolo de Tag HTML" />
                </div>

            </div>
        </section>
    )
}