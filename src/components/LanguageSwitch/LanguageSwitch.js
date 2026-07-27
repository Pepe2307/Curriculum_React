import './LanguageSwitch.css'

import React, { useContext } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ui } from '../../data/translations';

function LanguageSwitch() {

    const { theme, drawerOpen } = useContext(ThemeContext);
    const { lang, setLang } = useContext(LanguageContext);

    const t = ui[lang];

    return (
        <div
            className="langSwitch"
            style={{
                backgroundColor: theme.secondary,
                border: `2px solid ${theme.primary}`,
                // se oculta cuando el drawer del menu esta abierto
                opacity: drawerOpen ? 0 : 1,
                pointerEvents: drawerOpen ? 'none' : 'auto',
            }}
            role="group"
            aria-label={t.langSwitchLabel}
        >
            {['es', 'en'].map((code) => {
                const isActive = lang === code;
                return (
                    <button
                        key={code}
                        type="button"
                        className="langSwitch--btn"
                        onClick={() => setLang(code)}
                        aria-pressed={isActive}
                        style={{
                            backgroundColor: isActive ? theme.primary : 'transparent',
                            color: isActive ? theme.secondary : theme.tertiary80,
                        }}
                    >
                        {code.toUpperCase()}
                    </button>
                );
            })}
        </div>
    )
}

export default LanguageSwitch
