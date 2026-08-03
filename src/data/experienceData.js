import React from 'react'

export const experienceData = [
    {
        id: 1,
        category: 'developer',
        role: {
            es: 'Laravel Developer',
            en: 'Laravel Developer',
        },
        company: { es: 'OSOLE', en: 'OSOLE' },
        period: { es: 'Ene 2024 - Presente', en: 'Jan 2024 - Present' },
        summary: {
            es: 'A cargo de 4 sistemas enterprise completados para empresas nacionales e internacionales.',
            en: 'In charge of 4 completed enterprise systems for national and international companies.',
        },
        highlights: {
            es: [
                <><b>Plásticos Castro Hermanos</b> — Plataforma ERP/MES para manufactura de plásticos (+200 empleados): producción en tiempo real, inventario multi-depósito con trazabilidad, control de calidad, despacho, RBAC y RR.HH.</>,
                <><b>Idea Iluminación</b> — Supply Chain para importación y exportación de iluminación (+$2M USD/año): órdenes de compra, consolidación de envíos, portal de proveedores y motor de reglas de negocio.</>,
                <><b>Fleb</b> — Sistema de gestión para distribuidora de productos industriales: ciclo completo de pedido a entrega (recolección, fraccionamiento, control y embalaje, reparto por zonas y transportistas), gestión comercial (presupuestos, cobranzas, recibos) y planificación de visitas con objetivos por vendedor.</>,
                <><b>Talleres IPAM</b> — Plataforma de gestión para distribuidora industrial: administra el flujo desde el pedido hasta la entrega (armado, fraccionado, control de calidad y embalaje, logística de reparto por zonas y transportistas), el área comercial (presupuestos, recibos y cobranzas) y la agenda de visitas con metas por vendedor.</>,
            ],
            en: [
                <><b>Plásticos Castro Hermanos</b> — ERP/MES platform for plastics manufacturing (200+ employees): real-time production, multi-warehouse inventory with traceability, quality control, dispatch, RBAC and HR.</>,
                <><b>Idea Iluminación</b> — Supply Chain for lighting import & export (+$2M USD/yr): purchase orders, shipment consolidation, supplier portal and a business rules engine.</>,
                <><b>Fleb</b> — Management system for an industrial products distributor: full order-to-delivery cycle (picking, splitting, quality control and packaging, zone- and carrier-based dispatch), sales management (quotes, collections, receipts) and visit planning with per-salesperson targets.</>,
                <><b>Talleres IPAM</b> — Management platform for an industrial distributor: handles the flow from order to delivery (assembly, splitting, quality control and packaging, zone- and carrier-based dispatch logistics), the sales area (quotes, receipts and collections) and the visit schedule with per-salesperson goals.</>,
            ],
        },
        stack: {
            es: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Linux', 'Manejo de servidores'],
            en: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Linux', 'Server management'],
        },
    },
    {
        id: 2,
        category: 'docente',
        role: {
            es: 'Profesor IT — Trayectoria en 5 instituciones',
            en: 'IT Professor — Track record across 5 institutions',
        },
        company: {
            es: 'UTEC · Chalin Tech · C. Jorge Luis Borges · C. Tato · C. Divina Pastora',
            en: 'UTEC · Chalin Tech · C. Jorge Luis Borges · C. Tato · C. Divina Pastora',
        },
        period: { es: 'Dic 2021 - Presente', en: 'Dec 2021 - Present' },
        summary: {
            es: <b>Project Manager de Contenidos Curriculares en Centro Loyola y UTEC.</b>,
            en: <b>Curriculum Content Project Manager at Centro Loyola and UTEC.</b>,
        },
        highlights: {
            es: [
                'Creación del programa de estudios de SolidWorks en la UTEC, en cooperación con la Municipalidad de San Miguel, alcanzando a más de 900 estudiantes anualmente.',
                'Materias dictadas: Programación, Diseño Web, Diseño 3D y Robótica.',
                'Aplicación directa de los conocimientos adquiridos durante la beca en Taiwán.',
            ],
            en: [
                'Created the SolidWorks syllabus at UTEC, in cooperation with the Municipality of San Miguel, reaching more than 900 students annually.',
                'Subjects taught: Programming, Web Design, 3D Design and Robotics.',
                'Direct application of the knowledge acquired during the scholarship in Taiwan.',
            ],
        },
        stack: {
            es: ['Programación', 'Diseño Web', 'Diseño 3D', 'Robótica'],
            en: ['Programming', 'Web Design', '3D Design', 'Robotics'],
        },
    },
    {
        id: 3,
        category: 'developer',
        role: { es: 'Backend Developer', en: 'Backend Developer' },
        company: {
            es: 'UTEC - Usina Tecnológica San Miguel',
            en: 'UTEC - Usina Tecnológica San Miguel',
        },
        period: { es: 'Ene 2022 - 2024', en: 'Jan 2022 - 2024' },
        summary: {
            es: 'Integrante del equipo de Desarrollo Backend.',
            en: 'Member of the Backend Development team.',
        },
        highlights: {
            es: [
                'Desarrollo y mantenimiento de aplicaciones web del área con stack MySQL, Laravel y PHP.',
            ],
            en: [
                'Development and maintenance of the area web applications with a MySQL, Laravel and PHP stack.',
            ],
        },
        stack: ['Laravel', 'PHP', 'MySQL'],
    },
    {
        id: 4,
        category: 'developer',
        role: { es: 'Backend Developer', en: 'Backend Developer' },
        company: {
            es: 'Municipalidad de San Miguel — Departamento Tecnológico',
            en: 'Municipality of San Miguel — Technology Department',
        },
        period: { es: 'Dic 2020 - 2023', en: 'Dec 2020 - 2023' },
        summary: {
            es: 'Desarrollo de aplicaciones web con funciones administrativas.',
            en: 'Development of web applications with administrative features.',
        },
        highlights: {
            es: [
                'Aplicaciones web con funciones administrativas y control de Big Data.',
            ],
            en: [
                'Web applications with administrative features and Big Data control.',
            ],
        },
        stack: ['Laravel', 'PHP', 'MySQL'],
    },
]
