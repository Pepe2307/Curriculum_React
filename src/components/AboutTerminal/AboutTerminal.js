import './AboutTerminal.css'

import React, { useContext, useEffect, useRef, useState } from 'react';

import { FiExternalLink } from 'react-icons/fi';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { contactsData } from '../../data/contactsData'
import { experienceData } from '../../data/experienceData'
import { skillsData } from '../../data/skillsData'
import { waLink } from '../../data/whatsappData'

// Intro que se "tipea" sola. Cada linea: { cmd }, { blank } o
// { seg: [...] } con segmentos {t: texto} o {h: texto resaltado}.
const intro = {
    es: [
        { cmd: 'whoami' },
        { seg: [{ t: 'Pablo "Pepe" Paez — ' }, { h: 'Laravel Developer @ OSOLE' }] },
        { blank: true },
        { cmd: 'cat quien-soy.md' },
        { seg: [{ h: 'Estudiante avanzado de la Lic. en Sistemas' }, { t: ' (UNGS),' }] },
        { seg: [{ t: 'especializado en ' }, { h: 'Desarrollo Web Backend' }, { t: '.' }] },
        { blank: true },
        { seg: [{ t: 'En OSOLE lidero una plataforma ' }, { h: 'ERP/MES' }, { t: ' (industria' }] },
        { seg: [{ t: 'plástica, ' }, { h: '+200 empleados' }, { t: ') y un sistema de ' }, { h: 'Supply Chain' }] },
        { seg: [{ t: 'que mueve ' }, { h: '+$2M USD' }, { t: ' al año.' }] },
        { blank: true },
        { seg: [{ h: '+6 años como Profesor IT' }, { t: ' en ' }, { h: '5 instituciones' }, { t: '.' }] },
        { seg: [{ t: 'Becario ' }, { h: 'TaiwánICDF' }, { t: '. Idiomas: ' }, { h: 'inglés C2' }, { t: ' 🌏' }] },
    ],
    en: [
        { cmd: 'whoami' },
        { seg: [{ t: 'Pablo "Pepe" Paez — ' }, { h: 'Laravel Developer @ OSOLE' }] },
        { blank: true },
        { cmd: 'cat about-me.md' },
        { seg: [{ h: 'Advanced Information Systems student' }, { t: ' (UNGS),' }] },
        { seg: [{ t: 'specialised in ' }, { h: 'Backend Web Development' }, { t: '.' }] },
        { blank: true },
        { seg: [{ t: 'At OSOLE I lead an ' }, { h: 'ERP/MES' }, { t: ' platform (plastics' }] },
        { seg: [{ t: 'manufacturer, ' }, { h: '200+ employees' }, { t: ') and a ' }, { h: 'Supply Chain' }] },
        { seg: [{ t: 'system handling ' }, { h: '+$2M USD' }, { t: ' a year.' }] },
        { blank: true },
        { seg: [{ h: '6+ years as an IT Teacher' }, { t: ' across ' }, { h: '5 institutions' }, { t: '.' }] },
        { seg: [{ t: 'Scholar at ' }, { h: 'TaiwanICDF' }, { t: '. Languages: ' }, { h: 'English C2' }, { t: ' 🌏' }] },
    ],
};

const chips = [
    { id: 'utec', label: 'utec' },
    { id: 'stack', label: 'stack' },
    { id: 'exp', label: 'exp' },
    { id: 'hire', label: 'sudo hire me' },
];

const copy = {
    es: { hint: '// probá los comandos:', stack: 'Tech stack principal', hire: 'Acceso concedido — ¿hablamos?' },
    en: { hint: '// try the commands:', stack: 'Core tech stack', hire: 'Access granted — shall we talk?' },
};

function AboutTerminal() {
    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);

    const ref = useRef(null);
    const [live, setLive] = useState(false);
    const [active, setActive] = useState(null); // un solo comando a la vez

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLive(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // click en un chip: muestra su card, reemplazando la anterior (toggle)
    const toggle = (id) => setActive((prev) => (prev === id ? null : id));

    const lines = intro[lang];
    const t = copy[lang];
    const step = 0.14;

    const renderCard = (id) => {
        if (id === 'utec') {
            const b = blogData[0];
            return (
                <div className="aboutTerm--card">
                    <img className="aboutTerm--cardImg" src={b.image} alt="UTEC" />
                    <div className="aboutTerm--cardBody">
                        <h4 style={{ color: theme.tertiary }}>{pick(b.title)}</h4>
                        <p style={{ color: theme.tertiary70 }}>{pick(b.description)}</p>
                        <a href={b.url} target="_blank" rel="noreferrer" style={{ color: theme.primary }}>
                            utec.msm.gov.ar <FiExternalLink />
                        </a>
                    </div>
                </div>
            );
        }
        if (id === 'stack') {
            return (
                <div className="aboutTerm--card">
                    <div className="aboutTerm--cardBody">
                        <h4 style={{ color: theme.tertiary }}>{t.stack}</h4>
                        <div className="aboutTerm--stack">
                            {skillsData.map((s, i) => (
                                <span key={i} style={{ backgroundColor: theme.primary30, color: theme.tertiary }}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        if (id === 'exp') {
            return (
                <div className="aboutTerm--card">
                    <div className="aboutTerm--cardBody">
                        {experienceData.map((e) => (
                            <div className="aboutTerm--expRow" key={e.id}>
                                <span className="aboutTerm--expRole" style={{ color: theme.tertiary }}>
                                    {pick(e.role)}
                                </span>
                                <span className="aboutTerm--expMeta" style={{ color: theme.tertiary70 }}>
                                    {pick(e.company)} · {pick(e.period)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        if (id === 'hire') {
            return (
                <div className="aboutTerm--card aboutTerm--hire" style={{ borderColor: theme.primary }}>
                    <div className="aboutTerm--cardBody">
                        <h4 style={{ color: theme.primary }}>{t.hire} 🎉</h4>
                        <a href={`mailto:${contactsData.email}`} style={{ color: theme.tertiary }}>
                            {contactsData.email}
                        </a>
                        <a href={waLink(lang)} target="_blank" rel="noreferrer" style={{ color: theme.tertiary }}>
                            WhatsApp <FiExternalLink />
                        </a>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="aboutTerm" ref={ref}>
            <div className="aboutTerm--bar">
                <span className="aboutTerm--dot" style={{ backgroundColor: theme.primary }}></span>
                <span className="aboutTerm--dot" style={{ backgroundColor: '#5a5a5a' }}></span>
                <span className="aboutTerm--dot" style={{ backgroundColor: '#5a5a5a' }}></span>
                <span className="aboutTerm--barTitle">pablo@portfolio: ~/about</span>
            </div>

            <div className={`aboutTerm--body ${live ? 'is-live' : ''}`}>
                {lines.map((line, i) => (
                    <p key={i} className="aboutTerm--line" style={{ animationDelay: `${i * step}s` }}>
                        {line.blank && ' '}
                        {line.cmd && (
                            <>
                                <span style={{ color: theme.primary }}>$&nbsp;</span>
                                <span style={{ color: theme.tertiary }}>{line.cmd}</span>
                            </>
                        )}
                        {line.seg &&
                            line.seg.map((s, j) =>
                                s.h ? (
                                    <span key={j} className="aboutTerm--hl" style={{ color: theme.primary }}>{s.h}</span>
                                ) : (
                                    <span key={j} style={{ color: '#9a9a9a' }}>{s.t}</span>
                                )
                            )}
                    </p>
                ))}

                {/* output del comando activo (uno a la vez) */}
                {active && (
                    <div className="aboutTerm--run" key={active}>
                        <p className="aboutTerm--line">
                            <span style={{ color: theme.primary }}>$&nbsp;</span>
                            <span style={{ color: theme.tertiary }}>{chips.find((c) => c.id === active).label}</span>
                        </p>
                        {renderCard(active)}
                    </div>
                )}

                {/* chips clickeables */}
                <div
                    className="aboutTerm--chips aboutTerm--line"
                    style={{ animationDelay: `${lines.length * step}s` }}
                >
                    <span className="aboutTerm--hint" style={{ color: '#6a6a6a' }}>{t.hint}</span>
                    {chips.map((c) => {
                        const isActive = active === c.id;
                        return (
                            <button
                                key={c.id}
                                type="button"
                                className="aboutTerm--chip"
                                onClick={() => toggle(c.id)}
                                style={{
                                    backgroundColor: isActive ? theme.primary : 'transparent',
                                    color: isActive ? theme.secondary : theme.primary,
                                    borderColor: theme.primary,
                                }}
                            >
                                {c.label}
                            </button>
                        );
                    })}
                    <span className="aboutTerm--cursor" style={{ backgroundColor: theme.tertiary }}></span>
                </div>
            </div>
        </div>
    );
}

export default AboutTerminal;
