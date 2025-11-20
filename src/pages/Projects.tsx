import { projectsData } from '../data/projectsData'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>Mis Proyectos</h1>
        <p className="projects-subtitle">
          Cada proyecto cuenta una historia única de creatividad e innovación
        </p>
      </section>

      <section className="projects-gallery">
        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
