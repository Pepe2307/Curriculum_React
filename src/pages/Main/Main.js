import { About, Contacts, Education, Experience, Landing, Languages, Navbar, Projects, Skills } from '../../components'
import React, { useContext } from 'react'

import { Helmet } from 'react-helmet'
import { LanguageContext } from '../../contexts/LanguageContext'
import { ui } from '../../data/translations'

function Main() {

    const { lang } = useContext(LanguageContext)

    return (
        <div>
            <Helmet>
                <title>{ui[lang].pageTitle}</title>
            </Helmet>

            <Navbar />
            <Landing />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <About />
            <Languages />
            <Contacts />
        </div>
    )
}

export default Main
