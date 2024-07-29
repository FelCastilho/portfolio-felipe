import './style.css';
import photo from '../../assets/foto-perfil.svg';

import { Link } from 'react-router-dom';

import { FaBehance, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function About() {
    return (
        <section className="about">

            <div className="about-container">
                
                <div className="about-text">

                    <h1>Sobre mim</h1>
                    <h3>São Gonçalo, Rio de Janeiro</h3>
                    
                    <p>Me chamo Felipe Coutinho e tenho 22 anos, sou formado <br />
                        em Sistemas de informação. Atualmente sou freelancer como <br />
                        desenvolvedor web e UI designer. Busco criar projetos com <br />
                        máxima qualidade criando uma identidade única e eficiente.
                    </p>

                    <div className="about-icons">
                        <Link to="https://www.behance.net/felipecoutinho10" target='_blank' className='icon-behance'>
                            <FaBehance color='#FF7300' size={25}/>
                        </Link>

                        <Link to="https://www.linkedin.com/in/felipe-coutinho-/" target='_blank' className='icon-linkedin'>
                            <FaLinkedinIn color='#FF7300' size={20}/>
                        </Link>

                        <Link to="https://github.com/FelCastilho" target='_blank' className='icon-github'>
                            <FiGithub color='#FF7300' size={20}/>
                        </Link>

                        <Link to="https://www.instagram.com/felipec_castilho/" target='_blank' className='icon-instagram'>
                            <FaInstagram color='#FF7300' size={20}/>
                        </Link>
                        
                    </div>
                </div>

                <div className="about-image">
                    <img src={photo} alt="Foto Felipe Castilho" />
                </div>
            </div>

        </section>
    )
}
