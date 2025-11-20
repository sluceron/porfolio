import { Project } from '../types'
import '../styles/ProjectCard.css'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <p className="project-full-description">{project.fullDescription}</p>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver Proyecto →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
