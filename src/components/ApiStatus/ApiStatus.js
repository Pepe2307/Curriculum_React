import './ApiStatus.css'

import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';

// Endpoint publico con CORS habilitado: devuelve 200 real y permite medir
// la latencia round-trip de verdad. La API sin autenticar limita a 60 req/h
// por IP, por eso NO auto-refrescamos por defecto (el usuario lo activa).
const ENDPOINT = 'https://api.github.com/users/Pepe2307';
const HISTORY = 16;
const AUTO_INTERVAL = 20000;

const copy = {
    es: {
        title: 'API health check',
        subtitle: 'Petición real medida en tu navegador',
        checking: 'Consultando…',
        online: 'ONLINE',
        offline: 'SIN RESPUESTA',
        latency: 'Latencia',
        status: 'Estado',
        endpoint: 'Endpoint',
        refresh: 'Actualizar',
        auto: 'Auto',
        note: 'Nota: hace un fetch real a una API pública (GitHub) para demostrar el concepto. No refleja el estado de los sistemas privados ERP/MES.',
    },
    en: {
        title: 'API health check',
        subtitle: 'Real request measured in your browser',
        checking: 'Checking…',
        online: 'ONLINE',
        offline: 'NO RESPONSE',
        latency: 'Latency',
        status: 'Status',
        endpoint: 'Endpoint',
        refresh: 'Refresh',
        auto: 'Auto',
        note: 'Note: it makes a real fetch to a public API (GitHub) to demo the concept. It does not reflect the status of the private ERP/MES systems.',
    },
};

function ApiStatus() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const t = copy[lang];

    const [state, setState] = useState({ phase: 'idle', status: null, latency: null });
    const [history, setHistory] = useState([]);
    const [auto, setAuto] = useState(false);
    const mounted = useRef(true);

    useEffect(() => () => { mounted.current = false; }, []);

    const ping = useCallback(async () => {
        setState((prev) => ({ ...prev, phase: 'loading' }));
        const start = performance.now();
        try {
            const res = await fetch(ENDPOINT, { cache: 'no-store' });
            const latency = Math.round(performance.now() - start);
            if (!mounted.current) return;
            setState({ phase: 'done', status: res.status, latency });
            setHistory((h) => [...h.slice(-(HISTORY - 1)), latency]);
        } catch (err) {
            if (!mounted.current) return;
            setState({ phase: 'error', status: null, latency: null });
        }
    }, []);

    useEffect(() => { ping(); }, [ping]);

    useEffect(() => {
        if (!auto) return;
        const id = setInterval(ping, AUTO_INTERVAL);
        return () => clearInterval(id);
    }, [auto, ping]);

    const isOk = state.phase === 'done' && state.status >= 200 && state.status < 400;
    const dotColor = state.phase === 'error' ? '#e74c3c' : isOk ? '#3ecf6b' : '#f0b429';
    const maxLat = Math.max(...history, 1);

    return (
        <div className="apiStatus" style={{ backgroundColor: '#161616' }}>
            <div className="apiStatus--head">
                <div>
                    <h4 style={{ color: theme.tertiary }}>{t.title}</h4>
                    <span className="apiStatus--sub" style={{ color: theme.tertiary70 }}>
                        {t.subtitle}
                    </span>
                </div>
                <div className="apiStatus--badge" style={{ borderColor: dotColor }}>
                    <span className="apiStatus--dot" style={{ backgroundColor: dotColor }}></span>
                    <span style={{ color: dotColor }}>
                        {state.phase === 'loading' && history.length === 0
                            ? t.checking
                            : state.phase === 'error'
                            ? t.offline
                            : t.online}
                    </span>
                </div>
            </div>

            <div className="apiStatus--metrics">
                <div className="apiStatus--metric">
                    <span className="apiStatus--metricLabel" style={{ color: theme.tertiary70 }}>
                        {t.status}
                    </span>
                    <span className="apiStatus--metricValue" style={{ color: isOk ? '#3ecf6b' : theme.tertiary }}>
                        {state.status ? `${state.status} OK` : '—'}
                    </span>
                </div>
                <div className="apiStatus--metric">
                    <span className="apiStatus--metricLabel" style={{ color: theme.tertiary70 }}>
                        {t.latency}
                    </span>
                    <span className="apiStatus--metricValue" style={{ color: theme.primary }}>
                        {state.latency != null ? `${state.latency} ms` : '—'}
                    </span>
                </div>
            </div>

            <div className="apiStatus--spark" aria-hidden="true">
                {history.map((lat, i) => (
                    <span
                        key={i}
                        className="apiStatus--bar"
                        style={{
                            height: `${Math.max((lat / maxLat) * 100, 8)}%`,
                            backgroundColor: theme.primary,
                        }}
                    ></span>
                ))}
            </div>

            <div className="apiStatus--foot">
                <code className="apiStatus--endpoint" style={{ color: theme.tertiary70 }}>
                    GET {ENDPOINT.replace('https://', '')}
                </code>
                <div className="apiStatus--controls">
                    <button
                        type="button"
                        className="apiStatus--btn"
                        onClick={ping}
                        style={{ borderColor: theme.primary, color: theme.primary }}
                    >
                        {t.refresh}
                    </button>
                    <button
                        type="button"
                        className="apiStatus--btn"
                        onClick={() => setAuto((a) => !a)}
                        style={{
                            borderColor: theme.primary,
                            backgroundColor: auto ? theme.primary : 'transparent',
                            color: auto ? theme.secondary : theme.primary,
                        }}
                    >
                        {t.auto}
                    </button>
                </div>
            </div>

            <p className="apiStatus--note" style={{ color: theme.tertiary50 }}>
                {t.note}
            </p>
        </div>
    );
}

export default ApiStatus;
