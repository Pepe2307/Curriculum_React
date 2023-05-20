import eleven from '../assets/svg/projects/eleven.svg'
import screenshot1 from '../assets/png/proyecto_screenshot_1.jpg'
import screenshot2 from '../assets/png/proyecto_screenshot_2.jpg'
import screenshot3 from '../assets/png/proyecto_screenshot_3.jpg'
import screenshot4 from '../assets/png/proyecto_screenshot_4.jpg'
import screenshot5 from '../assets/png/proyecto_screenshot_5.jpg'
import three from '../assets/svg/projects/three.svg'
import two from '../assets/svg/projects/two.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Web de la Academia Tecnologica de la Municipalidad San Miguel',
        projectDesc: 'Este proyecto se originó debido a que en las clases que dicto sobre diversas areas de la informatica (Programacion, Robotica, Impresion 3D etc) existen distintas presentaciones PDF para cada clase/materia por lo cual se me ocurrio solucionar esto poniendo toda la informacion necesaria en un solo lugar con un poco de estilo e informacion extra sobre el trabajo',
        tags: ['HTML' ,'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Finished_React-WebProfesor',
        demo: 'https://san-miguel-capacitaciones-pablo.vercel.app/',
        image: screenshot1,
    },
    {
        id: 2,
        projectName: 'E-commerce de vuelos',
        projectDesc: 'Aplicacion sobre e-commerce en venta de pasajes para viajes alrededor del mundo realizada en REACT para el curso de CoderHouse sobre React JS - Pablo Paez',
        tags: ['HTML' ,'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Finished_React-E-commerce',
        demo: 'https://github.com/Pepe2307/Finished_React-E-commerce',
        image: screenshot2
    },
    {
        id: 3,
        projectName: 'Calculadora de energias',
        projectDesc: 'Trabajo realizado a encargo de EducacionIt - Aplicacion para calculos y comparativas de fuentes energeticas',
        tags: ['HTML' ,'CSS', 'Javascript', 'Bootstrap'],
        code: 'https://github.com/Pepe2307/-Finished-CalculosEnergia',
        demo: 'https://github.com/Pepe2307/-Finished-CalculosEnergia',
        image: screenshot3
    },
    {
        id: 4,
        projectName: 'App de Clima',
        projectDesc: 'Aplicacion hecha con React, se incluye cambio de idoma, uso de la API OpenWeather, y cambio de fondo dependiendo los datos de la misma API',
        tags: ['HTML' ,'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307',
        demo: 'https://pablo-clima.vercel.app/',
        image: screenshot4
    },
    {
        id: 5,
        projectName: 'Esta Misma Pagina!',
        projectDesc: 'Pagina nacida para tener un CV mas personal y dinamico con la ayuda de mis habilidades de desarrollador web',
        tags: ['HTML' ,'CSS', 'Javascript', 'React', 'Vercel'],
        code: 'https://github.com/Pepe2307/Curriculum_Page',
        demo: 'https://github.com/Pepe2307/Curriculum_Page',
        image: screenshot5
    },
]