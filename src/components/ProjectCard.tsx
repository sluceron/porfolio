import { Project } from '../types'
import '../styles/ProjectCard.css'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation()

  // Función auxiliar para traducir strings o keys
  const translate = (value: string | { key: string }) =>
    typeof value === 'string' ? value : t(value.key)

  return (
    <article className="project-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={translate(project.title)}
          className="project-image"
        />
        <div className="project-overlay">
          <p className="project-full-description">{translate(project.fullDescription)}</p>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{translate(project.title)}</h3>
        <p className="project-description">{translate(project.description)}</p>
        
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
            {t('projects.viewProject')} →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard