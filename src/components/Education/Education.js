import './Education.css'

import React, { useContext } from 'react';

import EducationCard from './EducationCard';
import { ThemeContext } from '../../contexts/ThemeContext';
import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Educación/Formación</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>


                <div class="row">
                <div class="example-2 card">
                    <div class="wrapper">
                    <div class="data">
                        <div class="content">
                        <h1 class="title"><a href="#">Equipo de Profesores IT</a></h1>
                        </div>
                    </div>
                    </div>
                </div>
                </div>     
                
                      
            </div>
        </div>
    )
}

export default Education
