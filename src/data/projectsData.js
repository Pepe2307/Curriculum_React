import screenshot1 from '../assets/png/proyecto_screenshot_1.jpg'
import screenshot10 from '../assets/png/laravel_1.jpg'
import screenshot11 from '../assets/png/react_1.jpg'
import screenshot2 from '../assets/png/proyecto_screenshot_2.jpg'
import screenshot3 from '../assets/png/proyecto_screenshot_3.jpg'
import screenshot4 from '../assets/png/proyecto_screenshot_4.jpg'
import screenshot5 from '../assets/png/proyecto_screenshot_5.jpg'
import screenshot6 from '../assets/png/laravel_2_3.png'
import screenshot7 from '../assets/png/laravel_5.jpg'
import screenshot8 from '../assets/png/laravel_4.jpg'
import screenshot9 from '../assets/png/laravel_3_2.jpg'

// Sistemas (capturas reales): screenshot + logo + foto de contexto
import plasticoFabrica from '../assets/png/plasticos_castro_fabrica.jpg'
import plasticoLogo from '../assets/png/plasticos_castro_logo.jpg'
import plasticoSistema from '../assets/png/plasticos_castro_sistema.jpg'
import ideaFabrica from '../assets/png/idea_fabrica.jpeg'
import ideaLogo from '../assets/png/idea_logo.png'
import ideaSistema from '../assets/png/idea_sistema.jpg'
import flebFabrica from '../assets/png/fleb_fabrica.jpg'
import flebLogo from '../assets/png/fleb_logo.png'
import flebSistema from '../assets/png/fleb_sistema.jpg'
import ipamFabrica from '../assets/png/ipam_fabrica.webp'
import ipamLogo from '../assets/png/ipam_logo.png'
import ipamSistema from '../assets/png/ipam_sistema.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: {
            es: 'Plásticos Castro Hnos — ERP / MES',
            en: 'Plásticos Castro Hnos — ERP / MES',
        },
        subtitle: {
            es: 'Industria de manufactura plástica',
            en: 'Plastics manufacturing company',
        },
        projectDesc: {
            es: 'Arquitecto y desarrollador full-stack de un sistema ERP/MES para manufactura de plásticos con más de 200 empleados. Incluye seguimiento en tiempo real de líneas de producción duales, integración de planificación con monitoreo de maquinaria, gestión de inventario multi-depósito con trazabilidad por lotes, tableros de control de calidad con seguimiento de defectos, logística de despacho, flujos de trabajo de autorización basados en roles (RBAC) y gestión de RR.HH.',
            en: 'Architect and full-stack developer of an ERP/MES system for plastics manufacturing with more than 200 employees. It includes real-time tracking of dual production lines, planning integration with machinery monitoring, multi-warehouse inventory management with batch traceability, quality control dashboards with defect tracking, dispatch logistics, role-based authorization workflows (RBAC) and HR management.',
        },
        tags: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Docker'],
        code: '',
        demo: '',
        repo: 'https://github.com/Pepe2307/plasticoscastro',
        image: plasticoSistema,
        logo: plasticoLogo,
        contextImage: plasticoFabrica,
    },
    {
        id: 2,
        projectName: {
            es: 'Idea Iluminación — Supply Chain',
            en: 'Idea Iluminación — Supply Chain',
        },
        subtitle: {
            es: 'Importación y exportación de iluminación',
            en: 'Lighting import & export company',
        },
        projectDesc: {
            es: 'Plataforma integral de Supply Chain Management para operaciones de importación y exportación de tecnologías de iluminación desde el exterior hacia Argentina, gestionando transacciones anuales de más de $2M USD. Desarrollé el ciclo de vida de las Órdenes de Compra, consolidación de envíos, portal de proveedores e integración con agentes de carga, junto con un motor de reglas de negocio para flujos de trabajo personalizados por cliente.',
            en: 'Comprehensive Supply Chain Management platform for import and export operations of lighting technologies from abroad into Argentina, handling more than $2M USD in annual transactions. I built the Purchase Order lifecycle, shipment consolidation, supplier portal and freight forwarder integration, along with a business rules engine for client-specific workflows.',
        },
        tags: ['Laravel', 'PHP', 'MySQL', 'APIs'],
        code: '',
        demo: '',
        repo: 'https://github.com/Pepe2307/idea-iluminacion-sistema',
        image: ideaSistema,
        logo: ideaLogo,
        contextImage: ideaFabrica,
    },
    {
        id: 14,
        projectName: {
            es: 'Fleb — Sistema Web',
            en: 'Fleb — Web System',
        },
        subtitle: {
            es: 'Productos industriales',
            en: 'Industrial products company',
        },
        projectDesc: {
            es: 'Sistema de gestión para distribuidora de productos industriales: ciclo completo de pedido a entrega (recolección, fraccionamiento, control y embalaje, reparto por zonas y transportistas), gestión comercial (presupuestos, cobranzas, recibos) y planificación de visitas con objetivos por vendedor.',
            en: 'Management system for an industrial products distributor: full order-to-delivery cycle (picking, splitting, quality control and packaging, zone- and carrier-based dispatch), sales management (quotes, collections, receipts) and visit planning with per-salesperson targets.',
        },
        tags: ['Laravel', 'PHP', 'MySQL'],
        code: '',
        demo: '',
        repo: 'https://github.com/Pepe2307/fleb-productos-industriales',
        image: flebSistema,
        logo: flebLogo,
        contextImage: flebFabrica,
    },
    {
        id: 15,
        projectName: {
            es: 'Talleres IPAM — Sistema Web',
            en: 'Talleres IPAM — Web System',
        },
        subtitle: {
            es: 'Talleres y servicios industriales',
            en: 'Industrial workshops & services',
        },
        projectDesc: {
            es: 'Plataforma de gestión para distribuidora industrial: administra el flujo desde el pedido hasta la entrega (armado, fraccionado, control de calidad y embalaje, logística de reparto por zonas y transportistas), el área comercial (presupuestos, recibos y cobranzas) y la agenda de visitas con metas por vendedor.',
            en: 'Management platform for an industrial distributor: handles the flow from order to delivery (assembly, splitting, quality control and packaging, zone- and carrier-based dispatch logistics), the sales area (quotes, receipts and collections) and the visit schedule with per-salesperson goals.',
        },
        tags: ['Laravel', 'PHP', 'MySQL'],
        code: '',
        demo: '',
        repo: 'https://github.com/Pepe2307/sistema-talleres-ipam',
        image: ipamSistema,
        logo: ipamLogo,
        contextImage: ipamFabrica,
    },
    {
        id: 3,
        projectName: {
            es: 'Web de la Academia Tecnologica de la Municipalidad San Miguel',
            en: 'Website for the Technology Academy of the San Miguel Municipality',
        },
        projectDesc: {
            es: 'Este proyecto se originó debido a que en las clases que dicto sobre diversas areas de la informatica (Programacion, Robotica, Impresion 3D etc) existen distintas presentaciones PDF para cada clase/materia por lo cual se me ocurrio solucionar esto poniendo toda la informacion necesaria en un solo lugar con un poco de estilo e informacion extra sobre el trabajo',
            en: 'This project came out of the classes I teach across several IT areas (Programming, Robotics, 3D Printing, etc.), where each class or subject had its own separate PDF presentation. I solved it by putting all the necessary information in a single place, with some styling and extra information about the work.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Finished_React-WebProfesor',
        demo: 'https://san-miguel-capacitaciones-pablo.vercel.app/',
        image: screenshot1,
    },
    {
        id: 4,
        projectName: {
            es: 'Laravel - AdminDashboard-SRMS',
            en: 'Laravel - AdminDashboard-SRMS',
        },
        projectDesc: {
            es: 'Un sistema de manejo de estudiantes/clases/materias/calificaciones/combinacion de materias etc. Cada dato esta vinculado a una base de datos donde estos pueden agregarse/modificarse/eliminarse y los cambios pueden verse en tiempo real por medio de la interfaz del sistema a la cual se accede por medio de un LOGIN de admin o de alumno',
            en: 'A management system for students, classes, subjects, grades, subject combinations and more. Every record is linked to a database where it can be created, edited or deleted, and the changes are visible in real time through the system interface, accessed via an admin or student login.',
        },
        tags: ['PHP', 'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-AdminDashboard-SRMS',
        demo: 'https://github.com/Pepe2307/Laravel-AdminDashboard-SRMS',
        image: screenshot6,
    },
    {
        id: 5,
        projectName: {
            es: 'Laravel - REST API Events Management App',
            en: 'Laravel - REST API Events Management App',
        },
        projectDesc: {
            es: 'Se maneja el uso de Eventos/Fiestas por medio de esta RESTful API, se enviaran mails a los invitados 24 horas antes de que se lleve a cabo el evento, tambien cada usuario que sea creador de un evento editar detalles del evento creado y ver quienes son las personas que iran al mismo. Esto solo se podra hacer si el usuario es dueño de SU EVENTO, por lo tanto no podra editar eventos de otras personas',
            en: 'Events and parties are managed through this RESTful API. Emails are sent to guests 24 hours before the event takes place, and any user who created an event can edit its details and see who is attending. This is only allowed if the user owns THAT event, so nobody can edit other people\'s events.',
        },
        tags: ['PHP', 'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-REST-API-EventsManagementApp',
        demo: 'https://github.com/Pepe2307/Laravel-REST-API-EventsManagementApp',
        image: screenshot7,
    },
    {
        id: 6,
        projectName: {
            es: 'Laravel - Livewire Poll CRUD',
            en: 'Laravel - Livewire Poll CRUD',
        },
        projectDesc: {
            es: 'Aplicacion donde se crean Encuestas junto con todas sus posibles opciones para ser votadas, en esta misma apicacion veremos las encuestas y podremos votar en ellas. Al mismo tiempo, todos los datos de esta aplicacion seran guardadas en una base de datos (Enecuestas, Votos, Usuarios , Etc)',
            en: 'An application where polls are created along with all their votable options. In the same app you can browse the polls and vote on them. All of the application data (polls, votes, users, etc.) is stored in a database.',
        },
        tags: ['PHP', 'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Livewire-Poll',
        demo: 'https://github.com/Pepe2307/Laravel-Livewire-Poll',
        image: screenshot9,
    },
    {
        id: 7,
        projectName: {
            es: 'Laravel - Book Reviews',
            en: 'Laravel - Book Reviews',
        },
        projectDesc: {
            es: 'Aplicacion de reviews sobre libros al estilo Letterboxd donde los usuarios pueden buscar los libros mas populares entre "x" cantidades de tiempo o por ejemplo los ultimos libros publicados y posteriormente pueden calificarlos desde 1 a 5 estrellas ⭐ y escribirles una reseña.',
            en: 'A Letterboxd-style book review application where users can search for the most popular books within a given time range, or the latest published books, and then rate them from 1 to 5 stars ⭐ and write a review.',
        },
        tags: ['PHP', 'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Book-Reviews',
        demo: 'https://github.com/Pepe2307/Laravel-Book-Reviews',
        image: screenshot8,
    },
    {
        id: 8,
        projectName: {
            es: 'Laravel-Task-List',
            en: 'Laravel-Task-List',
        },
        projectDesc: {
            es: 'aplicacion de Tast Lists donde se llevara un registro de las actividades por hacer, las ya hechas, y creacion y eliminacion de las mismas',
            en: 'A task list application that keeps track of pending and completed activities, including creating and deleting them.',
        },
        tags: ['PHP', 'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Task-List',
        demo: 'https://github.com/Pepe2307/Laravel-Task-List',
        image: screenshot10,
    },
    {
        id: 9,
        projectName: {
            es: 'E-commerce de vuelos',
            en: 'Flights E-commerce',
        },
        projectDesc: {
            es: 'Aplicacion sobre e-commerce en venta de pasajes para viajes alrededor del mundo realizada en REACT para el curso de CoderHouse sobre React JS - Pablo Paez',
            en: 'An e-commerce application selling tickets for trips around the world, built in React for the CoderHouse React JS course - Pablo Paez.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Finished_React-E-commerce',
        demo: 'https://github.com/Pepe2307/Finished_React-E-commerce',
        image: screenshot2,
    },
    {
        id: 10,
        projectName: {
            es: 'Calculadora de energias',
            en: 'Energy Calculator',
        },
        projectDesc: {
            es: 'Trabajo realizado a encargo de EducacionIt - Aplicacion para calculos y comparativas de fuentes energeticas',
            en: 'Commissioned by EducacionIT - An application for calculating and comparing energy sources.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
        code: 'https://github.com/Pepe2307/-Finished-CalculosEnergia',
        demo: 'https://github.com/Pepe2307/-Finished-CalculosEnergia',
        image: screenshot3,
    },
    {
        id: 11,
        projectName: {
            es: 'App de Clima',
            en: 'Weather App',
        },
        projectDesc: {
            es: 'Aplicacion hecha con React, se incluye cambio de idoma, uso de la API OpenWeather, y cambio de fondo dependiendo los datos de la misma API',
            en: 'An application built with React, including language switching, use of the OpenWeather API, and a background that changes based on the data returned by that API.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Clima_React',
        demo: 'https://pablo-clima.vercel.app/',
        image: screenshot4,
    },
    {
        id: 12,
        projectName: {
            es: 'Esta Misma Pagina!',
            en: 'This Very Page!',
        },
        projectDesc: {
            es: 'Pagina nacida para tener un CV mas personal y dinamico con la ayuda de mis habilidades de desarrollador web',
            en: 'A page born out of the idea of having a more personal and dynamic CV, built with my web development skills.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Curriculum_Page',
        demo: 'https://github.com/Pepe2307/Curriculum_Page',
        image: screenshot5,
    },
    {
        id: 13,
        projectName: {
            es: 'React - To Do List',
            en: 'React - To Do List',
        },
        projectDesc: {
            es: 'Aplicacion realizada por hobby con React, en la misma se anotan tareas para realizar y marcar como completadas clickeando en el texto de la tarea!',
            en: 'A hobby application built with React where you write down tasks to do and mark them as completed by clicking on the task text.',
        },
        tags: ['HTML', 'CSS', 'Javascript', 'React'],
        code: 'https://github.com/Pepe2307/ToDoList_React',
        demo: 'https://github.com/Pepe2307/ToDoList_React',
        image: screenshot11,
    },
]
