import './Metrics.css'

import React, { useContext, useEffect, useRef, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ui } from '../../data/translations'

// dispara una sola vez cuando el bloque entra en pantalla
function useInView(ref) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [ref]);

    return inView;
}

function useCountUp(target, start, duration = 1600) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        let frame;
        const t0 = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setValue(target * eased);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, start, duration]);

    return value;
}

const statsData = [
    { id: 1, value: 6, prefix: '', suffix: '+', labelKey: 'statYears' },
    { id: 2, value: 900, prefix: '', suffix: '+', labelKey: 'statStudents' },
    { id: 3, value: 2, prefix: '$', suffix: 'M USD', labelKey: 'statUsd' },
    { id: 4, value: 200, prefix: '', suffix: '+', labelKey: 'statEmployees' },
    { id: 5, value: 5, prefix: '', suffix: '', labelKey: 'statInstitutions' },
];

function StatCard({ stat, start, theme, tr }) {
    const current = useCountUp(stat.value, start);

    return (
        <div className="metric--card" style={{ backgroundColor: theme.primary30 }}>
            <span className="metric--value" style={{ color: theme.primary }}>
                {stat.prefix}{Math.round(current)}{stat.suffix}
            </span>
            <span className="metric--label" style={{ color: theme.tertiary80 }}>
                {tr[stat.labelKey]}
            </span>
        </div>
    );
}

function Metrics() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const tr = ui[lang];

    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <div className="metrics" ref={ref}>
            {statsData.map((stat) => (
                <StatCard key={stat.id} stat={stat} start={inView} theme={theme} tr={tr} />
            ))}
        </div>
    );
}

export default Metrics;
