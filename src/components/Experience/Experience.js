import './Experience.css'

import React, { useContext } from 'react';

import Fade from 'react-reveal/Fade';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData'
import { ui } from '../../data/translations'

function Experience() {

    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}>
            <div className="experience--header">
                <h1 style={{color: theme.primary}}>{tr.experienceTitle}</h1>
            </div>

            <div className="experience--timeline">
                <div className="experience--line" style={{backgroundColor: theme.primary30}}></div>

                {experienceData.map(exp => (
                    <Fade bottom key={exp.id}>
                        <div className="experience--item">
                            <div
                                className="experience--dot"
                                style={{backgroundColor: theme.primary, boxShadow: `0 0 0 6px ${theme.primary30}`}}
                            ></div>

                            <div
                                className="experience--card"
                                style={{backgroundColor: theme.primary30}}
                            >
                                <span className="experience--period" style={{color: theme.primary}}>
                                    {pick(exp.period)}
                                </span>
                                <h2 style={{color: theme.tertiary}}>{pick(exp.role)}</h2>
                                <h3 style={{color: theme.tertiary80}}>{pick(exp.company)}</h3>
                                <p className="experience--summary" style={{color: theme.tertiary70}}>
                                    {pick(exp.summary)}
                                </p>

                                <ul className="experience--highlights" style={{color: theme.tertiary80}}>
                                    {pick(exp.highlights).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="experience--stack">
                                    {pick(exp.stack).map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{backgroundColor: theme.secondary, color: theme.tertiary80}}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Experience
