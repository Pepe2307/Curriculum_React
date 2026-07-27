import './Sketches.css'

import React, { useContext, useState } from 'react';

import CompaniesBanner from '../CompaniesBanner/CompaniesBanner';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { ui } from '../../data/translations'

/* ------------------------------------------------------------------ */
/* boceto - filtro de proyectos por tecnologia                         */
/* ------------------------------------------------------------------ */

function FilterSketch({ theme, tr, pick }) {
    const [active, setActive] = useState(null);

    const tags = Array.from(new Set(projectsData.flatMap((p) => p.tags)));
    const filtered = active === null
        ? projectsData
        : projectsData.filter((p) => p.tags.includes(active));

    return (
        <div className="sketch--filter">
            <div className="sketch--chips">
                <button
                    type="button"
                    className="sketch--chip"
                    onClick={() => setActive(null)}
                    style={{
                        backgroundColor: active === null ? theme.primary : 'transparent',
                        color: active === null ? theme.secondary : theme.tertiary80,
                        borderColor: active === null ? theme.primary : theme.tertiary50,
                    }}
                >
                    {tr.filterAll}
                </button>

                {tags.map((tag) => {
                    const isActive = tag === active;
                    return (
                        <button
                            key={tag}
                            type="button"
                            className="sketch--chip"
                            onClick={() => setActive(tag)}
                            style={{
                                backgroundColor: isActive ? theme.primary : 'transparent',
                                color: isActive ? theme.secondary : theme.tertiary80,
                                borderColor: isActive ? theme.primary : theme.tertiary50,
                            }}
                        >
                            {tag}
                        </button>
                    );
                })}
            </div>

            <p className="sketch--filterCount" style={{ color: theme.tertiary70 }}>
                {filtered.length}{' '}
                {filtered.length === 1 ? tr.filterCountOne : tr.filterCountMany}
            </p>

            <div className="sketch--filterGrid">
                {filtered.map((p) => (
                    <div
                        key={p.id}
                        className="sketch--filterCard"
                        style={{ backgroundColor: theme.primary30 }}
                    >
                        <h4 style={{ color: theme.tertiary }}>{pick(p.projectName)}</h4>
                        <div className="sketch--filterTags">
                            {p.tags.map((t, i) => (
                                <span
                                    key={i}
                                    style={{ backgroundColor: theme.secondary, color: theme.tertiary80 }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* contenedor                                                          */
/* ------------------------------------------------------------------ */

function Sketches() {
    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    const sketches = [
        {
            id: 1,
            title: tr.sketchFilterTitle,
            why: tr.sketchFilterWhy,
            node: <FilterSketch theme={theme} tr={tr} pick={pick} />,
        },
        {
            id: 2,
            title: tr.sketchCompaniesTitle,
            why: tr.sketchCompaniesWhy,
            node: <CompaniesBanner />,
        },
    ];

    return (
        <div className="sketches" id="sketches" style={{ backgroundColor: theme.secondary }}>
            <div className="sketches--header">
                <h1 style={{ color: theme.primary }}>{tr.sketchesTitle}</h1>
                <p style={{ color: theme.tertiary70 }}>{tr.sketchesSubtitle}</p>
            </div>

            {sketches.map((sketch) => (
                <div key={sketch.id} className="sketch">
                    <div className="sketch--label">
                        <span
                            className="sketch--number"
                            style={{ backgroundColor: theme.primary, color: theme.secondary }}
                        >
                            {sketch.id}
                        </span>
                        <div>
                            <h3 style={{ color: theme.tertiary }}>{sketch.title}</h3>
                            <p style={{ color: theme.tertiary70 }}>{sketch.why}</p>
                        </div>
                    </div>

                    <div className="sketch--stage">{sketch.node}</div>
                </div>
            ))}
        </div>
    );
}

export default Sketches
