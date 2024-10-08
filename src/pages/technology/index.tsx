import './style.css'

import { FaReact, FaSass, FaFigma } from "react-icons/fa";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { LiaElementor, LiaWordpressSimple   } from "react-icons/lia";

export function Technology() {

    return (
        <section className="my-techs" id="techs">

            <div className="container-techs">

                <h1>Habilidades</h1>

                <div className="container-icons">

                    <div className="first-group">
                        <FaReact
                            className='techs-icon'
                        />
                        <TbBrandHtml5
                            className='techs-icon'
                        />
                        <TbBrandCss3
                            className='techs-icon'
                        />
                        <TbBrandJavascript
                            className='techs-icon'
                        />
                        <FaSass
                            className='techs-icon'
                        />
                        <FaFigma
                            className='techs-icon'
                        />
                        <LiaWordpressSimple  
                            className='techs-icon'
                        />
                        <LiaElementor
                            className='techs-icon'
                        />
                    </div>

                </div>

            </div>

        </section>
    )
}