import './AboutTerminal.css'

import React, { useContext, useEffect, useRef, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { contactsData } from '../../data/contactsData'
import { waLink } from '../../data/whatsappData'

// Intro que se "tipea" sola, estilo `neofetch` (specs del sistema = tu perfil).
// Cada linea: { cmd }, { blank } o { seg: [...] } con {t: texto} o {h: resaltado}.
const intro = {
    es: [
        { cmd: 'neofetch' },
        { blank: true },
        { seg: [{ h: 'pablo@portfolio' }] },
        { seg: [{ t: '───────────────' }] },
        { seg: [{ t: 'user......: ' }, { h: 'Pablo "Pepe" Paez' }] },
        { seg: [{ t: 'role......: ' }, { h: 'Laravel Developer' }] },
        { seg: [{ t: 'uptime....: ' }, { h: '+6 años en IT' }] },
        { seg: [{ t: 'stack.....: ' }, { h: 'PHP · Laravel · Docker · AWS' }] },
        { seg: [{ t: 'deploy....: ' }, { h: 'deploy y hosting en servidores' }] },
        { seg: [{ t: 'edu.......: ' }, { h: 'Lic. en Sistemas — UNGS' }] },
        { seg: [{ t: 'systems...: ' }, { h: 'ERP/MES · Supply Chain · Líneas de Producción Continuas' }] },
        { seg: [{ t: 'teaching..: ' }, { h: 'Profesor IT · 5 instituciones' }] },
    ],
    en: [
        { cmd: 'neofetch' },
        { blank: true },
        { seg: [{ h: 'pablo@portfolio' }] },
        { seg: [{ t: '───────────────' }] },
        { seg: [{ t: 'user......: ' }, { h: 'Pablo "Pepe" Paez' }] },
        { seg: [{ t: 'role......: ' }, { h: 'Laravel Developer' }] },
        { seg: [{ t: 'uptime....: ' }, { h: '6+ years in IT' }] },
        { seg: [{ t: 'stack.....: ' }, { h: 'PHP · Laravel · Docker · AWS' }] },
        { seg: [{ t: 'deploy....: ' }, { h: 'deploy & hosting on servers' }] },
        { seg: [{ t: 'edu.......: ' }, { h: 'BSc Information Systems — UNGS' }] },
        { seg: [{ t: 'systems...: ' }, { h: 'ERP/MES · Supply Chain · Continuous Production Lines' }] },
        { seg: [{ t: 'teaching..: ' }, { h: 'IT Professor · 5 institutions' }] },
    ],
};

const chips = [
    { id: 'viaje', label: 'mi-viaje' },
    { id: 'hobbies', label: 'hobbies' },
    { id: 'como-trabajo', label: 'como-trabajo' },
    { id: 'objetivos', label: 'objetivos' },
    { id: 'fun-facts', label: 'fun-facts' },
    { id: 'hire', label: 'sudo hire me' },
];

const copy = {
    es: {
        hint: '// probá los comandos:',
        hire: 'Acceso concedido — ¿hablamos?',
        viajeTitle: 'Mi viaje en el conocimiento 👨‍🎓',
    },
    en: {
        hint: '// try the commands:',
        hire: 'Access granted — shall we talk?',
        viajeTitle: 'My journey through knowledge 👨‍🎓',
    },
};

// texto original del "¿Quién soy?" — solo vive acá, dentro de la consola
const viajeText = {
    es: [
        'Estudiante avanzado de la Lic. en Sistemas en la UNGS, donde aprendí los fundamentos de la programación.',
        'Luego encontré el Desarrollo Web Backend y me concentré en aprenderlo y especializarme en él.',
        'Fui becado para estudiar en Taiwán, en la Ming Chi University of Technology.',
    ],
    en: [
        'Advanced Information Systems student at UNGS, where I learned the fundamentals of programming.',
        'Then I found Backend Web Development and focused on learning and specialising in it.',
        'I was awarded a scholarship to study in Taiwan, at Ming Chi University of Technology.',
    ],
};

// Contenido personal (lo que NO está en el resto de la página).
// BORRADORES: 'como-trabajo' y 'objetivos' los inferí de tu perfil,
// 'fun-facts' salen de tu CV, y 'hobbies' lo tenés que completar vos.
const personal = {
    hobbies: {
        title: { es: 'Hobbies e intereses 🤿', en: 'Hobbies & interests 🤿' },
        es: [
            'Buceador con licencia de aguas abiertas.',
            'Me encanta viajar: estuve en Europa, Taiwán, Belice y México.',
        ],
        en: [
            'Open-water certified scuba diver.',
            'I love traveling: I have been to Europe, Taiwan, Belize and Mexico.',
        ],
    },
    'como-trabajo': {
        title: { es: 'Cómo trabajo ⚙️', en: 'How I work ⚙️' },
        es: [
            'Antes de escribir código me tomo el tiempo de entender el negocio y el problema real a resolver.',
            'Primero diseño y prototipo el sistema en Figma, y recién después lo llevo a código.',
            'Como también doy clases, documentar y explicar lo que construyo me sale natural.',
        ],
        en: [
            'Before writing code I take the time to understand the business and the real problem to solve.',
            'I first design and prototype the system in Figma, and only then I turn it into code.',
            'Since I also teach, documenting and explaining what I build comes naturally to me.',
        ],
    },
    objetivos: {
        title: { es: 'Objetivos 🎯', en: 'Goals 🎯' },
        es: [
            'Seguir creciendo en el desarrollo de sistemas backend complejos (ERP/MES, supply chain).',
            'Sumarme a proyectos internacionales y trabajo remoto, aprovechando el inglés y la experiencia con empresas del exterior.',
        ],
        en: [
            'Keep growing in the development of complex backend systems (ERP/MES, supply chain).',
            'Join international projects and remote work, leveraging my English and my experience with companies abroad.',
        ],
    },
    'fun-facts': {
        title: { es: 'Fun facts ✨', en: 'Fun facts ✨' },
        es: [
            'Estudié en Taiwán con una beca internacional.',
            'Aspirante a políglota: inglés C2, y arrancando con chino y francés.',
            'Enseño de todo: desde programación hasta robótica e impresión 3D.',
        ],
        en: [
            'I studied in Taiwan on an international scholarship.',
            'Aspiring polyglot: English C2, and starting with Chinese and French.',
            'I teach a bit of everything: from programming to robotics and 3D printing.',
        ],
    },
};

function AboutTerminal() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);

    const ref = useRef(null);
    const [live, setLive] = useState(false);
    const [active, setActive] = useState(null); // un solo comando a la vez
    const [input, setInput] = useState('');

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

    const inputRef = useRef(null);

    // click en un chip: muestra la salida, reemplazando la anterior (toggle)
    const toggle = (id) => setActive((prev) => (prev === id ? null : id));

    // ejecuta un comando tipeado: si coincide con un chip lo activa,
    // si no, guarda el texto crudo para mostrar "comando no encontrado"
    const runCommand = (raw) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;
        const match = chips.find(
            (c) => c.label.toLowerCase() === cmd || c.id === cmd
        );
        setActive(match ? match.id : cmd);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        runCommand(input);
        setInput('');
    };

    const lines = intro[lang];
    const t = copy[lang];
    const step = 0.14;

    // salida en texto plano, estilo terminal (sin fondo, sin título)
    const renderOutput = (id) => {
        const line = (txt, i) => (
            <p key={i} className="aboutTerm--line" style={{ color: '#9a9a9a' }}>{txt}</p>
        );
        if (id === 'viaje') return viajeText[lang].map(line);
        if (personal[id]) return personal[id][lang].map(line);
        if (id === 'hire') {
            return (
                <>
                    <p className="aboutTerm--line" style={{ color: '#9a9a9a' }}>{t.hire}</p>
                    <p className="aboutTerm--line">
                        <a href={`mailto:${contactsData.email}`} style={{ color: theme.primary }}>
                            {contactsData.email}
                        </a>
                    </p>
                    <p className="aboutTerm--line">
                        <a href={waLink(lang)} target="_blank" rel="noreferrer" style={{ color: theme.primary }}>
                            WhatsApp
                        </a>
                    </p>
                </>
            );
        }
        // comando no encontrado
        return (
            <p className="aboutTerm--line" style={{ color: '#9a9a9a' }}>
                {lang === 'es' ? 'comando no encontrado' : 'command not found'}
            </p>
        );
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

                {/* output del comando activo (uno a la vez), en texto plano */}
                {active && (
                    <div className="aboutTerm--run" key={active}>
                        <p className="aboutTerm--line">
                            <span style={{ color: theme.primary }}>$&nbsp;</span>
                            <span style={{ color: theme.tertiary }}>
                                {(chips.find((c) => c.id === active) || {}).label || active}
                            </span>
                        </p>
                        {renderOutput(active)}
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
                </div>

                {/* input: también se pueden tipear los comandos */}
                <form className="aboutTerm--promptForm aboutTerm--line" onSubmit={handleSubmit}>
                    <span style={{ color: theme.primary }}>$&nbsp;</span>
                    <input
                        ref={inputRef}
                        className="aboutTerm--input"
                        style={{ color: theme.tertiary }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        spellCheck="false"
                        autoComplete="off"
                        aria-label={lang === 'es' ? 'Escribí un comando' : 'Type a command'}
                        placeholder={lang === 'es' ? 'escribí un comando…' : 'type a command…'}
                    />
                </form>
            </div>
        </div>
    );
}

export default AboutTerminal;
