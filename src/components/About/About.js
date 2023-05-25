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
                    Pablo/Pepe, un <b>Estudiante avanzado de la Lic. en Sistemas</b> en la Universidad de General Sarmiento, donde aprendí los fundamentos de la programacion.
                    <br/>Luego encontré el <b>Desarrollo Web Fullstack</b> estudiando con Coderhouse, EducacionIT y de forma autodidacta.
                    <br/>Al mismo tiempo que sigo absorbiendo nuevos conocimientos estoy trabajando como <b>Profesor en Robotica, Impresión y Diseño 3D y Programacion.</b>
                    
                    
                    <br/><br/><br/>
                    <b>Mi personalidad:</b> 🦝
                    <br/><br/>
                    Soy alguien aventurero, optimista, atleta y que cada dia se enamora mas de la naturaleza y el mundo.
                    <br/>
                    constantemente <b>aspiro a 
                    ser una mejor persona cada dia</b> por medio de la <b>filosofia estoica y enseñanzas budistas</b>, mi lema es que la verdadera sabiduria se logra cuando se encuentra a un maestro en todo a su alrededor.
                    <br/> Siempre estoy en busca de nuevas aventuras y desafíos. Mis pasatiempos son los videojuegos, series, tecnología y el rescate de animales en situaciones precarias en conjunto con mi vecina.</p>
                </div>

                
                <Blog />
            </div>
        </div>

    )
}

export default About
