// Numero en formato internacional para wa.me: 54 (Argentina) + 9 (movil)
// + 11 (area) + 68654369. Fuente unica para el boton flotante y el link
// del telefono en Contacto.
export const WA_NUMBER = '5491168654369';

export const waPrefill = {
    es: 'Hola Pablo! Vi tu portfolio y me gustaría hablar con vos.',
    en: 'Hi Pablo! I saw your portfolio and I would like to get in touch.',
};

export function waLink(lang) {
    const text = waPrefill[lang] || waPrefill.es;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
