import '../styles/About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Sobre mí</h1>
        <p className="about-subtitle">20+ años transformando ideas en experiencias visuales</p>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-intro">
            <h2>Santiago Lucerón Carrión</h2>
            <p className="role">Diseñador Gráfico Senior | Director de Arte | Especialista en Identidad Corporativa</p>
            <p className="location">📍 Madrid, España</p>
          </div>

          <div className="about-text">
            <h2>Mi Historia</h2>
            <p>
              Más de dos décadas dedicadas a transformar ideas en experiencias visuales impactantes. 
              Mi trayectoria profesional ha estado marcada por la pasión por contar historias a través 
              del diseño, trabajando con marcas del sector alimentación, bebidas premium, retail y HORECA.
            </p>
            <p>
              He liderado equipos creativos en proyectos que van desde startups hasta empresas consolidadas, 
              desarrollando <strong>identidades corporativas completas</strong>, <strong>campañas 360º</strong> y 
              estrategias visuales que conectan emocionalmente con las audiencias.
            </p>
            <p>
              Mi enfoque combina creatividad estratégica con dominio técnico, integrando las últimas 
              tecnologías y <strong>herramientas de IA</strong> en procesos creativos para optimizar 
              resultados sin perder la esencia humana del diseño.
            </p>
          </div>

          <div className="about-experience">
            <h2>Experiencia Destacada</h2>
            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="year">2023 - Actualidad</span>
                <h3>Diseñador Gráfico Freelance</h3>
                <p>Proyectos de identidad corporativa, branding y diseño web para diversos sectores</p>
              </div>
              <div className="timeline-item">
                <span className="year">2018 - 2023</span>
                <h3>Brand Manager & Director Creativo</h3>
                <p>Carpers Distilled Beverages - Desarrollo integral de marca premium</p>
              </div>
              <div className="timeline-item">
                <span className="year">2016 - 2018</span>
                <h3>Creative Manager</h3>
                <p>Grupo Delgado - Dirección de 12+ marcas propias del sector alimentación</p>
              </div>
              <div className="timeline-item">
                <span className="year">2011 - 2015</span>
                <h3>Director de Arte & Responsable Marketing</h3>
                <p>La Presumida Empresarial - Agencia especializada en gastronomía y HORECA</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h2>Áreas de Especialización</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <h3>Diseño Gráfico & Branding</h3>
                <p>Identidad corporativa, packaging, diseño editorial y dirección de arte</p>
                <div className="skill-tools">
                  <span>Photoshop </span>
                  <span>Illustrator </span>
                  <span>InDesign </span>
                  <span>After Effects </span>
                  <span>Figma </span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h3>Diseño Web & UX/UI</h3>
                <p>Desarrollo de sitios web responsivos y experiencias digitales centradas en el usuario</p>
                <div className="skill-tools">
                  <span>WordPress </span>
                  <span>HTML5/CSS3 </span>
                  <span>PHP </span>
                  <span>React </span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">📸</div>
                <h3>Fotografía & Audiovisual</h3>
                <p>Fotografía de producto, publicitaria, edición de video y producción de contenido visual</p>
                <div className="skill-tools">
                  <span>Lightroom </span>
                  <span>Premiere </span>
                  <span>iMovie </span>
                  <span>Camera Raw </span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🤖</div>
                <h3>IA & Tecnologías Emergentes</h3>
                <p>Integración de herramientas de IA generativa en flujos de trabajo creativos</p>
                <div className="skill-tools">
                  <span>ChatGPT </span>
                  <span>Midjourney </span>
                  <span>Adobe Firefly </span>
                  <span>DALL-E </span>
                  <span>Runway ML </span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">📱</div>
                <h3>Marketing Digital</h3>
                <p>Estrategias de contenido visual, campañas en redes sociales y SEO/SEM</p>
                <div className="skill-tools">
                  <span>Google Ads </span>
                  <span>Meta Ads </span>
                  <span>Analytics </span>
                  <span>Hootsuite </span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">⚙️</div>
                <h3>Gestión de Proyectos</h3>
                <p>Metodologías Agile, Design Thinking y liderazgo de equipos creativos</p>
                <div className="skill-tools">
                  <span>Scrum </span>
                  <span>Jira </span>
                  <span>Trello </span>
                  <span>Notion </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2>Valores que me Definen</h2>
            <div className="values-list">
              <div className="value-item">
                <span className="value-icon">✨</span>
                <h4>Creatividad e Innovación</h4>
                <p>Buscar constantemente nuevas formas de expresión visual</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <h4>Pensamiento Estratégico</h4>
                <p>Diseño con propósito, alineado con objetivos de negocio</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🔍</span>
                <h4>Atención al Detalle</h4>
                <p>Cuidado obsesivo por cada elemento visual</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <h4>Trabajo en Equipo</h4>
                <p>Colaboración efectiva en proyectos multidisciplinarios</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🚀</span>
                <h4>Adaptabilidad</h4>
                <p>Aprendizaje continuo y evolución con nuevas tecnologías</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>¿Trabajamos juntos?</h2>
            <p>
              Estoy disponible para proyectos de diseño gráfico, branding, desarrollo web 
              y consultoría creativa. Si buscas un profesional comprometido con la excelencia 
              visual y resultados estratégicos, hablemos.
            </p>
            <div className="cta-buttons">
              <a href="mailto:santiagoluceron@icloud.com" className="btn-primary">
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
