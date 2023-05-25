import { About, Contacts, Education, Landing, Navbar, Projects, Skills } from '../../components'

import { Helmet } from 'react-helmet'
import React from 'react'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Pablo Paez - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Contacts />
        </div>
    )
}

export default Main
