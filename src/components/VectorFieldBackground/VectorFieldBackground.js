import React, { useEffect, useRef } from 'react';

/**
 * VectorFieldBackground
 * Grilla uniforme de lineas que rotan en tiempo real apuntando hacia el
 * puntero (Math.atan2). Dibujada en un Canvas 2D, con soporte de Retina
 * (devicePixelRatio) y sin interceptar el mouse (pointer-events: none).
 *
 * Props:
 *   spacing    distancia entre lineas de la grilla (px)         default 34
 *   lineLength largo de cada linea (px)                          default 16
 *   colors     paleta; el angulo elige el color de cada linea    default rojos
 *   background color de fondo del canvas (o 'transparent')       default 'transparent'
 *   dotSize    radio del punto de origen de cada linea (px)      default 1.2
 */
function VectorFieldBackground({
    spacing = 34,
    lineLength = 16,
    colors = ['#f03939', '#dd4d4d', '#ea2424', '#8a2020'],
    background = 'transparent',
    dotSize = 1.2,
}) {
    const canvasRef = useRef(null);
    // el puntero vive en un ref para no re-renderizar en cada mousemove
    const pointer = useRef({ x: -9999, y: -9999 });
    const sizeRef = useRef({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        // ajusta el buffer del canvas al tamano del contenedor y al DPR
        const resize = () => {
            const parent = canvas.parentElement;
            const rect = parent.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            sizeRef.current = { width: rect.width, height: rect.height };

            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            // trabajamos en unidades CSS; el escalado por DPR se hace una sola vez
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        // el canvas no recibe eventos (pointer-events:none), asi que
        // escuchamos el mouse a nivel window y convertimos a coords locales
        const handlePointer = (e) => {
            const rect = canvas.getBoundingClientRect();
            pointer.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        const handleLeave = () => {
            pointer.current = { x: -9999, y: -9999 };
        };

        const draw = () => {
            const { width, height } = sizeRef.current;
            ctx.clearRect(0, 0, width, height);

            if (background !== 'transparent') {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
            }

            const { x: px, y: py } = pointer.current;
            const half = lineLength / 2;

            for (let y = spacing / 2; y < height; y += spacing) {
                for (let x = spacing / 2; x < width; x += spacing) {
                    const angle = Math.atan2(py - y, px - x);

                    // color segun el angulo, mapeado sobre la paleta
                    const idx = Math.floor(
                        ((angle + Math.PI) / (2 * Math.PI)) * colors.length
                    ) % colors.length;

                    const dx = Math.cos(angle) * half;
                    const dy = Math.sin(angle) * half;

                    ctx.strokeStyle = colors[idx];
                    ctx.lineWidth = 1.4;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(x - dx, y - dy);
                    ctx.lineTo(x + dx, y + dy);
                    ctx.stroke();

                    if (dotSize > 0) {
                        ctx.fillStyle = colors[idx];
                        ctx.beginPath();
                        ctx.arc(x - dx, y - dy, dotSize, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handlePointer);
        window.addEventListener('mouseleave', handleLeave);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handlePointer);
            window.removeEventListener('mouseleave', handleLeave);
        };
    }, [spacing, lineLength, colors, background, dotSize]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: 'block',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            }}
        />
    );
}

export default VectorFieldBackground;
