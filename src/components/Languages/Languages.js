import './Languages.css'

import React, { useContext } from 'react';

import Fade from 'react-reveal/Fade';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { languagesData } from '../../data/languagesData'
import { ui } from '../../data/translations'

function Languages() {

    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    return (
        <div className="languages" id="languages" style={{backgroundColor: theme.secondary}}>
            <div className="languages--header">
                <h1 style={{color: theme.primary}}>{tr.languagesTitle}</h1>
            </div>

            <div className="languages--container">
                {languagesData.map(item => (
                    <Fade bottom key={item.id}>
                        <div
                            className="language--card"
                            style={{
                                backgroundColor: theme.primary30,
                                borderTop: `3px solid ${theme.primary}`,
                            }}
                        >
                            <span
                                className="language--badge"
                                style={{backgroundColor: theme.secondary, color: theme.primary}}
                            >
                                {pick(item.badge)}
                            </span>

                            <h2 style={{color: theme.tertiary}}>{pick(item.language)}</h2>

                            <span className="language--descriptor" style={{color: theme.tertiary80}}>
                                {pick(item.descriptor)}
                            </span>

                            {item.source && (
                                <span className="language--source" style={{color: theme.tertiary50}}>
                                    {pick(item.source)}
                                </span>
                            )}
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Languages
