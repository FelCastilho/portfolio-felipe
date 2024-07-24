import './style.css'

import tagLogo from '../../assets/sites-icon.svg';
import figma from '../../assets/figma-icon.svg';
import responsive from '../../assets/responsive-icon.svg';

export default function Services() {
    return (

        <section className="services" id="services">

            <h1>Serviços</h1>

            <div className="services-container">

                <div className="service-box">

                    <img src={tagLogo} alt="logo de tag" className='services-tag'/>
                    <h2>Criação de <br /> sites</h2>

                </div>

                <div className="service-box">

                    <img src={figma} alt="logo de tag" className='services-figma'/>
                   
                    <h2>UI Design</h2>
                    <br />
                </div>

                <div className="service-box">

                    <img src={responsive} alt="logo de tag" className='services-responsive'/>
                    <h2>Sites <br />
                    responsivos</h2>

                </div>

            </div>

        </section>

    )
}