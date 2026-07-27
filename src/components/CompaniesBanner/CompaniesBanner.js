import './CompaniesBanner.css'

import React, { useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../contexts/ThemeContext';

// Sin logos oficiales todavia: se muestran como "wordmarks" tipograficos.
// role marca a que se dedico en cada lugar (aparece como subtexto).
const companies = [
    { name: 'OSOLE', role: { es: 'Laravel Developer', en: 'Laravel Developer' } },
    { name: 'Plásticos Castro Hermanos', role: { es: 'ERP / MES', en: 'ERP / MES' } },
    { name: 'Idea Iluminación', role: { es: 'Supply Chain', en: 'Supply Chain' } },
    { name: 'UTEC', role: { es: 'Backend Developer', en: 'Backend Developer' } },
    { name: 'Municipalidad de San Miguel', role: { es: 'Backend Developer', en: 'Backend Developer' } },
    { name: 'Centro Loyola', role: { es: 'Formación docente', en: 'Teacher training' } },
    { name: 'Chalin Tech', role: { es: 'Profesor IT', en: 'IT Teacher' } },
    { name: 'C. Jorge Luis Borges', role: { es: 'Profesor IT', en: 'IT Teacher' } },
    { name: 'C. Tato', role: { es: 'Profesor IT', en: 'IT Teacher' } },
    { name: 'C. Divina Pastora', role: { es: 'Profesor IT', en: 'IT Teacher' } },
];

function CompaniesBanner() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);

    return (
        <div className="companiesBanner">
            <Marquee gradient={false} speed={55} pauseOnHover={true} play={true}>
                {companies.map((c, i) => (
                    <div
                        key={i}
                        className="companiesBanner--item"
                        style={{
                            backgroundColor: theme.primary30,
                            borderLeft: `3px solid ${theme.primary}`,
                        }}
                    >
                        <span className="companiesBanner--name" style={{ color: theme.tertiary }}>
                            {c.name}
                        </span>
                        <span className="companiesBanner--role" style={{ color: theme.primary }}>
                            {c.role[lang]}
                        </span>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default CompaniesBanner;
