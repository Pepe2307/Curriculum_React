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
        id: 6,
        projectName: 'Laravel - AdminDashboard-SRMS',
        projectDesc: 'Un sistema de manejo de estudiantes/clases/materias/calificaciones/combinacion de materias etc. Cada dato esta vinculado a una base de datos donde estos pueden agregarse/modificarse/eliminarse y los cambios pueden verse en tiempo real por medio de la interfaz del sistema a la cual se accede por medio de un LOGIN de admin o de alumno',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-AdminDashboard-SRMS',
        demo: 'https://github.com/Pepe2307/Laravel-AdminDashboard-SRMS',
        image: screenshot6
    },
    {
        id: 6,
        projectName: 'Laravel - REST API Events Management App',
        projectDesc: 'Se maneja el uso de Eventos/Fiestas por medio de esta RESTful API, se enviaran mails a los invitados 24 horas antes de que se lleve a cabo el evento, tambien cada usuario que sea creador de un evento editar detalles del evento creado y ver quienes son las personas que iran al mismo. Esto solo se podra hacer si el usuario es dueño de SU EVENTO, por lo tanto no podra editar eventos de otras personas',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-REST-API-EventsManagementApp',
        demo: 'https://github.com/Pepe2307/Laravel-REST-API-EventsManagementApp',
        image: screenshot7
    },
    {
        id: 6,
        projectName: 'Laravel - Livewire Poll CRUD',
        projectDesc: 'Aplicacion donde se crean Encuestas junto con todas sus posibles opciones para ser votadas, en esta misma apicacion veremos las encuestas y podremos votar en ellas. Al mismo tiempo, todos los datos de esta aplicacion seran guardadas en una base de datos (Enecuestas, Votos, Usuarios , Etc)',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Livewire-Poll',
        demo: 'https://github.com/Pepe2307/Laravel-Livewire-Poll',
        image: screenshot9
    },
    {
        id: 6,
        projectName: 'Laravel - Book Reviews',
        projectDesc: 'Aplicacion de reviews sobre libros al estilo Letterboxd donde los usuarios pueden buscar los libros mas populares entre "x" cantidades de tiempo o por ejemplo los ultimos libros publicados y posteriormente pueden calificarlos desde 1 a 5 estrellas ⭐ y escribirles una reseña.',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Book-Reviews',
        demo: 'https://github.com/Pepe2307/Laravel-Book-Reviews',
        image: screenshot8
    },
    
    {
        id: 6,
        projectName: 'Laravel-Task-List',
        projectDesc: 'aplicacion de Tast Lists donde se llevara un registro de las actividades por hacer, las ya hechas, y creacion y eliminacion de las mismas',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/Laravel-Task-List',
        demo: 'https://github.com/Pepe2307/Laravel-Task-List',
        image: screenshot10
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
        code: 'https://github.com/Pepe2307/Clima_React',
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
    
    
    {
        id: 6,
        projectName: 'React - To Do List',
        projectDesc: 'Aplicacion realizada por hobby con React, en la misma se anotan tareas para realizar y marcar como completadas clickeando en el texto de la tarea!',
        tags: ['PHP' ,'Laravel', 'MySQL'],
        code: 'https://github.com/Pepe2307/ToDoList_React',
        demo: 'https://github.com/Pepe2307/ToDoList_React',
        image: screenshot11
    },
]