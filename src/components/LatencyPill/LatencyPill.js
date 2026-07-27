import './LatencyPill.css'

import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';

// Se pingea el PROPIO sitio (mismo origen) => sin limite de rate y con
// status legible. En dev es localhost; en produccion, el dominio de Vercel.
// Un asset chico y cacheable-busteado para medir round-trip real.
const TARGET = `${window.location.origin}/favicon.ico`;
const INTERVAL = 1000;

const copy = {
    es: { offline: 'sin señal', paused: 'en pausa', tip: 'Latencia a tu sitio · click para pausar' },
    en: { offline: 'no signal', paused: 'paused', tip: 'Latency to your site · click to pause' },
};

function LatencyPill() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const t = copy[lang];

    const [latency, setLatency] = useState(null);
    const [status, setStatus] = useState(null);
    const [ok, setOk] = useState(null); // null=aun no, true=ok, false=error
    const [running, setRunning] = useState(true);
    const mounted = useRef(true);

    useEffect(() => () => { mounted.current = false; }, []);

    const ping = useCallback(async () => {
        // no gasta pedidos si la pestaña esta oculta
        if (document.hidden) return;

        const start = performance.now();
        try {
            const res = await fetch(`${TARGET}?_=${Date.now()}`, { cache: 'no-store' });
            if (!mounted.current) return;
            setLatency(Math.round(performance.now() - start));
            setStatus(res.status);
            setOk(res.ok);
        } catch (err) {
            if (!mounted.current) return;
            setOk(false);
            setStatus(null);
            setLatency(null);
        }
    }, []);

    useEffect(() => {
        if (!running) return;
        ping();
        const id = setInterval(ping, INTERVAL);
        return () => clearInterval(id);
    }, [running, ping]);

    const dotColor = !running
        ? theme.tertiary50
        : ok === false
        ? '#e74c3c'
        : ok
        ? '#3ecf6b'
        : '#f0b429';

    let label;
    if (!running) label = t.paused;
    else if (ok === false) label = t.offline;
    else if (latency != null) label = `${status || 200} · ${latency}ms`;
    else label = '…';

    return (
        <button
            type="button"
            className="latencyPill"
            onClick={() => setRunning((r) => !r)}
            title={t.tip}
            aria-label={t.tip}
            style={{
                backgroundColor: theme.secondary,
                border: `2px solid ${theme.primary}`,
                color: theme.tertiary80,
                opacity: drawerOpen ? 0 : 1,
                pointerEvents: drawerOpen ? 'none' : 'auto',
            }}
        >
            <span
                className={`latencyPill--dot ${running && ok !== false ? 'is-live' : ''}`}
                style={{ backgroundColor: dotColor }}
            ></span>
            <span className="latencyPill--label">{label}</span>
        </button>
    )
}

export default LatencyPill;
