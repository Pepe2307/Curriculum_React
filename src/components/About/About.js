import './About.css';

import React, { useContext } from 'react';

import {Blog} from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>¿Quien soy?</h2>
                    <p style={{color:theme.tertiary80}}>
                    <b>Mi viaje en el conocimiento:</b> 👨‍🎓
                    <br/><br/>
                    Pablo/Pepe, soy un <b>Estudiante avanzado de la Lic. en Sistemas</b> en la Universidad de General Sarmiento, donde aprendí los fundamentos de la programacion.
                    <br/>
                    <br/>
                    Luego encontré el <b>Desarrollo Web Backend</b> y me concentre en aprenderlo y especializarme en el.
                    <br/>
                    <br/>
                    
                    Fui becado para <b>Estudiar en Taiwán</b> en la Taiwan Ming Chi University of Technology

                    
                    </p>
                </div>

                
                <Blog />
            </div>
        </div>

    )
}

export default About
