import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Proyecto Ejemplo 1",
    description: "Breve descripción del proyecto que aparece en la tarjeta",
    fullDescription: "Descripción completa y narrativa del proyecto. Aquí cuentas la historia detrás del trabajo, los retos, las soluciones creativas y el impacto.",
    image: "/images/project1.jpg",
    tags: ["React", "TypeScript", "Diseño UX"],
    link: "https://ejemplo.com"
  },
  {
    id: 2,
    title: "Proyecto Ejemplo 2",
    description: "Otra breve descripción creativa",
    fullDescription: "Historia narrativa del segundo proyecto con detalles inmersivos.",
    image: "/images/project2.jpg",
    tags: ["Vite", "CSS", "Animaciones"],
    link: "https://ejemplo2.com"
  },
  {
    id: 3,
    title: "Proyecto Ejemplo 3",
    description: "Descripción del tercer proyecto",
    fullDescription: "Relato visual del proyecto, proceso creativo y resultados obtenidos.",
    image: "/images/project3.jpg",
    tags: ["Web Design", "Frontend", "Arte Digital"]
  }
];
