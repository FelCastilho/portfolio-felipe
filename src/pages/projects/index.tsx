import './style.css';

import logoAlex from '../../assets/logo-alex.svg';
import logoCodelab from '../../assets/logo-codelab.svg';

import { Link } from 'react-router-dom';


export default function Projects(){
    return(
        <section className="projects">

            <h1>Projetos</h1>

            <div className="projects-container">

                <div className='card'>
                    <div className='card-background' id='banner-alex'>
                        <img src={logoAlex} />
                    </div>

                    <div className='card-text'>
                        <h2>Portfólio Alex Oliveira</h2>
                        <p>Site desenvolvido para o designer Alexandre Oliveira, buscando ressaltar os traços de design e seguindo com fidelidade a identidade visual. </p>

                        <p className='project-techs' id='alex-techs'>Vite | React | Typescript | GIT | Figma</p>
                    </div>

                    <div className="container-btn">
                        <Link to="#" target='_blank' id='alex-btn'>Acessar projeto</Link>
                    </div>
                    
                </div>

                <div className='card'>
                    <div className='card-background' id='banner-codelab'>
                        <img src={logoCodelab} />
                    </div>

                    <div className='card-text'>

                        <h2>Desafios Codelab</h2>

                        <p>A CodeLab é uma comunidade para desafios de desenvolvimento frontend, onde os usuários podem treinar os seus conhecimentos em programação. </p>
                        
                        <p className='project-techs' id='codelab-techs'>Vite | React | Typescript | GIT | Figma</p>
                    </div>

                    <div className="container-btn">
                        <Link to="#" id='codelab-btn'>Acessar projeto</Link>
                    </div>
                </div>

            </div>

        </section>
    )
}