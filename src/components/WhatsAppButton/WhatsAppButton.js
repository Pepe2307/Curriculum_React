import './WhatsAppButton.css'

import React, { useContext } from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { LanguageContext } from '../../contexts/LanguageContext';
import { waLink } from '../../data/whatsappData';

function WhatsAppButton() {
    const { lang } = useContext(LanguageContext);

    const href = waLink(lang);
    const label = lang === 'es' ? 'Escribime por WhatsApp' : 'Message me on WhatsApp';

    return (
        <a
            className='whatsappBtn'
            href={href}
            target='_blank'
            rel='noreferrer'
            aria-label={label}
            title={label}
        >
            <FaWhatsapp className='whatsappBtn--icon' />
        </a>
    );
}

export default WhatsAppButton;
