import 'maplibre-gl/dist/maplibre-gl.css'
import './ContactMap.css'

import { FaCloud, FaPlaneDeparture } from 'react-icons/fa';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import maplibregl from 'maplibre-gl';

// Buenos Aires, Argentina. MapLibre usa [lng, lat] (al reves que Leaflet).
const POSITION = [-58.3816, -34.6037];
const TZ = 'America/Argentina/Buenos_Aires';

// Estilo raster oscuro con tiles gratis de CARTO. Sin API key.
const darkStyle = {
    version: 8,
    sources: {
        carto: {
            type: 'raster',
            tiles: [
                'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
                'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
                'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
            ],
            tileSize: 256,
        },
    },
    layers: [{ id: 'carto', type: 'raster', source: 'carto' }],
};

function localTime() {
    return new Date().toLocaleTimeString('es-AR', {
        timeZone: TZ,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

function ContactMap() {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);

    const canvasRef = useRef(null);
    const mapRef = useRef(null);
    const [time, setTime] = useState(localTime());

    // reloj de la hora local de Buenos Aires
    useEffect(() => {
        const id = setInterval(() => setTime(localTime()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (mapRef.current || !canvasRef.current) return;

        const map = new maplibregl.Map({
            container: canvasRef.current,
            style: darkStyle,
            center: POSITION,
            zoom: 10.5,
            pitch: 52,          // inclinado, "mirando hacia arriba"
            bearing: -17,
            attributionControl: false, // se oculta el credito OSM/CARTO
        });
        mapRef.current = map;

        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
        map.scrollZoom.disable();

        const label = 'Buenos Aires, Argentina';
        new maplibregl.Marker({ color: theme.primary })
            .setLngLat(POSITION)
            .setPopup(new maplibregl.Popup({ offset: 25 }).setText(label))
            .addTo(map);

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, [theme.primary, lang]);

    const tzLabel = lang === 'es' ? 'Hora en Buenos Aires' : 'Buenos Aires time';

    return (
        <div className="contactMap" style={{ border: `2px solid ${theme.primary30}` }}>
            <div className="contactMap--canvas" ref={canvasRef} />

            {/* capa decorativa: nubes a la deriva + avion, sin bloquear el mapa */}
            <div className="contactMap--sky" aria-hidden="true">
                <FaCloud className="contactMap--cloud contactMap--cloud1" />
                <FaCloud className="contactMap--cloud contactMap--cloud2" />
                <FaCloud className="contactMap--cloud contactMap--cloud3" />
                <FaPlaneDeparture className="contactMap--plane" />
            </div>

            {/* reloj de hora local */}
            <div
                className="contactMap--clock"
                style={{ backgroundColor: 'rgba(22,22,22,0.82)', color: theme.tertiary }}
            >
                <span className="contactMap--time" style={{ color: theme.primary }}>{time}</span>
                <span className="contactMap--tz">{tzLabel}</span>
            </div>
        </div>
    );
}

export default ContactMap;
