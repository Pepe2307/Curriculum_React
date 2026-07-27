import './Landing.css';

import {
    FaChevronDown,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ThemeContext } from '../../contexts/ThemeContext';
import cvEs from '../../assets/pdf/PabloPaez_Curriculum.pdf'
import { makeStyles } from '@material-ui/core/styles';
import profilepic from '../../assets/png/profile.jpg'
import { ui } from '../../data/translations'

// TODO: cuando exista el CV en ingles, agregar el archivo a src/assets/pdf/
// e importarlo aca en lugar de reutilizar el castellano.
const cvEn = cvEs;

const landingIntro = {
    es: (
        <>Desarrollador Backend con +6 años en IT. Actualmente a cargo de plataformas <b>ERP/MES</b> industriales y sistemas de <b>Supply Chain Management</b> para empresas internacionales, con operaciones de más de <b>$2M USD</b> anuales.<br/><br/>Becario TaiwánICDF 2024 y estudiante avanzado de la Lic. en Sistemas (UNGS).</>
    ),
    en: (
        <>Backend Developer with 6+ years in IT. Currently leading industrial <b>ERP/MES</b> platforms and <b>Supply Chain Management</b> systems for international companies, handling over <b>$2M USD</b> in annual operations.<br/><br/>TaiwanICDF 2024 scholar and advanced Information Systems student (UNGS).</>
    ),
};

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const tr = ui[lang];

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: 'auto',
            minWidth: '160px',
            padding: '0 1.3rem',
            whiteSpace: 'nowrap',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    const [cvOpen, setCvOpen] = useState(false);
    const cvMenuRef = useRef(null);

    // cierra el menu del CV al hacer click fuera o al presionar Escape
    useEffect(() => {
        if (!cvOpen) return;

        const handleClick = (e) => {
            if (cvMenuRef.current && !cvMenuRef.current.contains(e.target)) {
                setCvOpen(false);
            }
        };
        const handleKey = (e) => {
            if (e.key === 'Escape') setCvOpen(false);
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [cvOpen]);

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {"https://www.linkedin.com/in/pablo-paez-t/" && (
                            <a
                                href={"https://www.linkedin.com/in/pablo-paez-t/"}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {"https://github.com/Pepe2307" && (
                            <a
                                href={"https://github.com/Pepe2307"}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        
                    </div>
                </div>
                <div
                    className='landing--imgWrap'
                    style={{ opacity: `${drawerOpen ? '0' : '1'}` }}
                >
                    <img
                        src={profilepic}
                        alt=''
                        className='landing--img'
                        style={{ borderColor: theme.secondary }}
                    />
                </div>
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6 className='skills_landing'>{tr.landingRole1}</h6>
                        <h6 className='skills_landing'>{tr.landingRole2}</h6>
                        <h6 className='skills_landing'>{tr.landingRole3}</h6>
                        <h1>Pablo "Pepe" Paez💻</h1>
                        <p>{landingIntro[lang]}</p>

                        <div className='lcr-buttonContainer'>

                            <div className='cvMenu' ref={cvMenuRef}>
                                <Button
                                    className={classes.resumeBtn}
                                    onClick={() => setCvOpen((prev) => !prev)}
                                    aria-haspopup='true'
                                    aria-expanded={cvOpen}
                                >
                                    {tr.landingDownload}
                                    <FaChevronDown className='cvMenu--caret' />
                                </Button>

                                {cvOpen && (
                                    <div
                                        className='cvMenu--list'
                                        style={{
                                            backgroundColor: theme.secondary,
                                            border: `2px solid ${theme.primary}`,
                                        }}
                                    >
                                        <a
                                            href={cvEs}
                                            download='PabloPaez_CV_ES.pdf'
                                            className='cvMenu--item'
                                            style={{ color: theme.tertiary }}
                                            onClick={() => setCvOpen(false)}
                                        >
                                            {tr.landingDownloadEs}
                                        </a>
                                        <a
                                            href={cvEn}
                                            download='PabloPaez_Resume_EN.pdf'
                                            className='cvMenu--item'
                                            style={{ color: theme.tertiary }}
                                            onClick={() => setCvOpen(false)}
                                        >
                                            {tr.landingDownloadEn}
                                        </a>
                                    </div>
                                )}
                            </div>

                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    {tr.landingContact}
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
