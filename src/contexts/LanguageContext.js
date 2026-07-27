import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()

const STORAGE_KEY = 'portfolio-lang'

function LanguageContextProvider(props) {

    const [lang, setLang] = useState(() => {
        const saved = window.localStorage.getItem(STORAGE_KEY)
        return saved === 'en' || saved === 'es' ? saved : 'es'
    })

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang)
        document.documentElement.lang = lang
    }, [lang])

    const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'))

    // Los campos traducibles de los data files vienen como { es, en }.
    // pick() devuelve la variante del idioma activo y deja pasar cualquier
    // otro valor (strings sueltos, arrays de tecnologias, JSX) sin tocarlo.
    const pick = (field) => {
        if (field && typeof field === 'object' && !Array.isArray(field)
            && !React.isValidElement(field) && ('es' in field || 'en' in field)) {
            return field[lang] !== undefined ? field[lang] : field.es
        }
        return field
    }

    const value = { lang, setLang, toggleLang, pick }

    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider
