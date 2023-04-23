import './About.css';

import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

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
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>
                    Pablo/Pepe, un <b>Estudiante avanzado de la Lic. en Sistemas</b> en la Universidad de General Sarmiento donde aprendi los fundamentos de la programacion para luego poder dedicarme a estudiar el <b>Desarrollo Web Fullstack</b> por medio de clases con Coderhouse, EducacionIt y de forma autodidacta
                    <br/><br/>Soy alguien que se considera aventurera, optimista, atleta y que <b>aspira a 
                    ser una mejor persona cada dia</b>. Siempre estoy en busca de nuevas aventuras y desafíos, me encanta conocer gente 
                    nueva y hacer amigos, disfruto perdiéndome en los videojuegos, series, tecnología y cuidando de animales de la calle. Siempre listo para vivir al máximo y <b>disfrutar de todo lo que la vida tiene para ofrecer.</b></p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
