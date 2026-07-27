import './Education.css'

import React, { useContext } from 'react';

import EducationCard from './EducationCard';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { educationData } from '../../data/educationData'
import educationPhoto from '../../assets/png/Profesor.jpg'
import { ui } from '../../data/translations'

const catLabels = {
    developer: 'eduCatDeveloper',
    universidad: 'eduCatUniversity',
    profesor: 'eduCatTeaching',
    tecnico: 'eduCatTechnician',
};

function Education() {

    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    const renderGroup = (catId) => {
        const items = educationData.filter(e => e.category === catId);
        if (!items.length) return null;
        return (
            <div className="education-group" key={catId}>
                <h3 className="education-catTitle" style={{color: theme.primary}}>
                    <span style={{color: theme.tertiary50}}>#</span> {tr[catLabels[catId]]}
                    <span className="education-catCount" style={{color: theme.tertiary50}}>
                        {items.length}
                    </span>
                </h3>
                <div className="education-grid">
                    {items.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={pick(edu.institution)}
                            course={pick(edu.course)}
                            startYear={pick(edu.startYear)}
                            endYear={pick(edu.endYear)}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
            <h1 className="education-title" style={{color:theme.primary}}>{tr.educationTitle}</h1>

            <div className="education-columns">
                {/* columna izquierda: certificaciones de developer */}
                <div className="education-col">
                    {renderGroup('developer')}
                </div>

                {/* columna derecha: foto + universidad + docencia + tecnico */}
                <div className="education-col">
                    <div className="education-photo">
                        <img src={educationPhoto} alt="Pablo Paez" style={{ borderColor: theme.primary }} />
                    </div>
                    {renderGroup('universidad')}
                    {renderGroup('profesor')}
                    {renderGroup('tecnico')}
                </div>
            </div>
        </div>
    )
}

export default Education
