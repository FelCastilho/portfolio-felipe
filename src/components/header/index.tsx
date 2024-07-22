import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg'

export function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} className="logo-header"/>
                </div>
                <div className={`hamburguer ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
                <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><Link to="https://vercel.com/felipe-coutinhos-projects/portfolio-felipe/4o2D6ozPrAEv46PRAAuhLkUNqguj" target='_blank'>Sobre mim</Link></li>
                    <li><Link to="#">Serviços</Link></li>
                    <li><Link to="#">Projetos</Link></li>
                    <li><Link to="#">Tecnologias</Link></li>
                </ul>
            </div>
        </header>
    );
}
