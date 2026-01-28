import { projectsData } from '../data/projectsData'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>{t('projects.hero.title')}</h1>
        <p className="projects-subtitle">{t('projects.hero.subtitle')}</p>
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
