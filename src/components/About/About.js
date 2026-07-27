import './About.css';

import React, { useContext } from 'react';

import AboutTerminal from '../AboutTerminal/AboutTerminal';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ui } from '../../data/translations';

function About() {

    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const tr = ui[lang];

    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{tr.aboutTitle}</h2>
                    <AboutTerminal />
                </div>
            </div>
        </div>

    )
}

export default About
