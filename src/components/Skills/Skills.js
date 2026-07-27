import './Skills.css'

import React,{ useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'
import { ui } from '../../data/translations'

function Skills() {

    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const tr = ui[lang];

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div id ="skills"className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>{tr.skillsTitle}</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={120} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
