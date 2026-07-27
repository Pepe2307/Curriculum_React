import './FontLab.css'

import React, { useContext, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';

const fonts = [
    { id: 'orbitron', label: 'Orbitron', stack: "'Orbitron', sans-serif" },
    { id: 'bebas', label: 'Bebas Neue', stack: "'Bebas Neue', sans-serif" },
    { id: 'space', label: 'Space Grotesk', stack: "'Space Grotesk', sans-serif" },
    { id: 'playfair', label: 'Playfair Display', stack: "'Playfair Display', serif" },
    { id: 'righteous', label: 'Righteous', stack: "'Righteous', cursive" },
    { id: 'jetbrains', label: 'JetBrains Mono', stack: "'JetBrains Mono', monospace" },
    { id: 'caveat', label: 'Caveat', stack: "'Caveat', cursive" },
];

const effects = [
    { id: 'none', label: { es: 'Normal', en: 'Plain' } },
    { id: 'gradient', label: { es: 'Degradado', en: 'Gradient' } },
    { id: 'shimmer', label: { es: 'Brillo animado', en: 'Shimmer' } },
    { id: 'neon', label: { es: 'Neón', en: 'Neon' } },
    { id: 'outline', label: { es: 'Contorno', en: 'Outline' } },
    { id: 'glitch', label: { es: 'Glitch', en: 'Glitch' } },
];

const copy = {
    es: { fontLabel: 'Fuente', effectLabel: 'Efecto', typeHint: 'Escribí para probar…' },
    en: { fontLabel: 'Font', effectLabel: 'Effect', typeHint: 'Type to preview…' },
};

function FontLab() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const t = copy[lang];

    const [font, setFont] = useState(fonts[0]);
    const [effect, setEffect] = useState('gradient');
    const [text, setText] = useState('Pablo Paez');

    // el efecto glitch necesita el texto duplicado en data-attr
    const previewText = text || 'Pablo Paez';

    // los efectos que pintan el texto ignoran el color base
    const paintsOwnColor = effect === 'gradient' || effect === 'shimmer';

    return (
        <div className="fontLab">
            <div className="fontLab--controls">
                <div className="fontLab--group">
                    <span className="fontLab--groupLabel" style={{ color: theme.tertiary70 }}>
                        {t.fontLabel}
                    </span>
                    <div className="fontLab--chips">
                        {fonts.map((f) => {
                            const active = f.id === font.id;
                            return (
                                <button
                                    key={f.id}
                                    type="button"
                                    className="fontLab--chip"
                                    onClick={() => setFont(f)}
                                    style={{
                                        fontFamily: f.stack,
                                        backgroundColor: active ? theme.primary : 'transparent',
                                        color: active ? theme.secondary : theme.tertiary80,
                                        borderColor: active ? theme.primary : theme.tertiary50,
                                    }}
                                >
                                    {f.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="fontLab--group">
                    <span className="fontLab--groupLabel" style={{ color: theme.tertiary70 }}>
                        {t.effectLabel}
                    </span>
                    <div className="fontLab--chips">
                        {effects.map((e) => {
                            const active = e.id === effect;
                            return (
                                <button
                                    key={e.id}
                                    type="button"
                                    className="fontLab--chip"
                                    onClick={() => setEffect(e.id)}
                                    style={{
                                        backgroundColor: active ? theme.primary : 'transparent',
                                        color: active ? theme.secondary : theme.tertiary80,
                                        borderColor: active ? theme.primary : theme.tertiary50,
                                    }}
                                >
                                    {e.label[lang]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className={`fontLab--preview fontLab--fx-${effect}`}
                style={{
                    backgroundColor: theme.primary30,
                    // variables que consumen los efectos en el CSS
                    '--fx-primary': theme.primary,
                    '--fx-secondary': theme.secondary,
                    '--fx-tertiary': theme.tertiary,
                }}
            >
                <span
                    className="fontLab--text"
                    data-text={previewText}
                    style={{
                        fontFamily: font.stack,
                        color: paintsOwnColor ? undefined : theme.tertiary,
                    }}
                >
                    {previewText}
                </span>
            </div>

            <input
                className="fontLab--input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.typeHint}
                aria-label={t.typeHint}
                style={{
                    backgroundColor: theme.secondary,
                    color: theme.tertiary,
                    borderColor: theme.primary30,
                }}
            />
        </div>
    );
}

export default FontLab;
