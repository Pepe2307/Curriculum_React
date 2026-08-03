import React from 'react'

export const educationData = [
    /* ---- Universidad ---- */
    {
        id: 1,
        category: 'universidad',
        institution: {
            es: 'Universidad de General Sarmiento',
            en: 'Universidad de General Sarmiento',
        },
        course: {
            es: 'Lic. en Sistemas — Estudiante Avanzado (3er año)',
            en: 'BSc in Information Systems — Advanced Student (3rd year)',
        },
        startYear: '2019 ',
        endYear: { es: '- Presente', en: '- Present' },
    },
    {
        id: 2,
        category: 'universidad',
        institution: {
            es: 'Ming Chi University of Technology — Taiwán',
            en: 'Ming Chi University of Technology — Taiwan',
        },
        course: {
            es: 'Estudios Becados — Beca TaiwánICDF',
            en: 'Scholarship Studies — TaiwanICDF Scholarship',
        },
        startYear: '2024',
    },

    /* ---- Developer ---- */
    {
        id: 3,
        category: 'developer',
        institution: {
            es: 'Amazon Web Services',
            en: 'Amazon Web Services',
        },
        course: {
            es: 'AWS Certified Cloud Practitioner (CLF-C02)',
            en: 'AWS Certified Cloud Practitioner (CLF-C02)',
        },
        startYear: '2024',
    },
    {
        id: 9,
        category: 'developer',
        institution: {
            es: 'University of Helsinki - Finlandia',
            en: 'University of Helsinki - Finland',
        },
        course: {
            es: 'Docker Containers & CI/CD — Full Stack Open',
            en: 'Docker Containers & CI/CD — Full Stack Open',
        },
        startYear: '2026',
    },
    {
        id: 6,
        category: 'developer',
        institution: { es: 'Coderhouse', en: 'Coderhouse' },
        course: {
            es: 'Carrera Desarrollo Web Fullstack',
            en: 'Fullstack Web Development Program',
        },
        startYear: '2021',
    },
    {
        // UTN + Udemy + EducacionIT fusionados en una sola card
        id: 4,
        category: 'developer',
        institution: {
            es: <p>+ UTN - Desarrollo BackEnd Avanzado en PHP/SQL<br/>+ Udemy - 3 Certificados en Backend PHP Laravel<br/>+ EducacionIT - Bases de Datos / Backend</p>,
            en: <p>+ UTN - Advanced BackEnd Development in PHP/SQL<br/>+ Udemy - 3 Certificates in Backend PHP Laravel<br/>+ EducacionIT - Databases / Backend</p>,
        },
        course: {
            es: 'Certificaciones en Backend Development',
            en: 'Backend Development Certifications',
        },
        startYear: '2023-2024',
    },

    /* ---- Docencia ---- */
    {
        id: 7,
        category: 'profesor',
        institution: {
            es: 'Formacion en Centro Loyola',
            en: 'Training at Centro Loyola',
        },
        course: {
            es: 'Formacion Docente IT',
            en: 'IT Teacher Training',
        },
        startYear: '2021',
    },

    /* ---- Técnico de PC ---- */
    {
        id: 8,
        category: 'tecnico',
        institution: { es: 'C.F.P del S.E.C.', en: 'C.F.P del S.E.C.' },
        course: {
            es: 'Tecnico de PC Certificado',
            en: 'Certified PC Technician',
        },
        startYear: '2019',
    },
]
