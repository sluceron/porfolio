import '../styles/About.css'
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const track = document.querySelector('.logo-track');
    if (track) {
      track.innerHTML += track.innerHTML;
    }
  }, []);

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

            </div>
          </div>

      <section className="about-brands">
        <div className="about-brands-container">
          <h2>Marcas con las que he trabajado</h2>
          <p className="about-brands-text">
          Mi trabajo abarca proyectos de branding, diseño de identidad visual, merchandising y visual merchandising, papelería corporativa, diseño gráfico y piezas de comunicación para marcas de diferentes sectores, siempre cuidando la coherencia entre estrategia, estética y experiencia de marca.
          </p>

      <div className="logo-slider" aria-label="Empresas para las que he trabajado">
          <div className="logo-track">

          <img src="https://www.shutterstock.com/image-photo/coca-cola-logo-on-vibrant-600nw-2524254995.jpg" alt="Coca-Cola" />
          <img src="https://guiaimpresion.com/wp-content/uploads/2020/05/Heineken-emblema.jpg" alt="Heineken Internacional" />
          <img src="https://images.seeklogo.com/logo-png/43/1/damm-logo-png_seeklogo-438928.png" alt="Grupo Damm"  />
          <img src="https://www.compromisorse.com/upload/noticias/011/11397/Mahou.png" alt="Mahou San Miguel"  />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Pernod_Ricard_logo_2019.svg" alt="Pernod Ricard"  />
          <img src="https://images.seeklogo.com/logo-png/8/1/maxxium-logo-png_seeklogo-89659.png" alt="Maxxium"  />
          
          <img src="https://clinicadentalbances.com/wp-content/uploads/2025/06/seguro-dental-asisa-en-santa-cruz-de-tenerife.jpg" alt="Asisa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Integrated_Service_Solutions_%28logo%29.svg" alt="ISS" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Altadis_web.png" alt="Altadis" />
          <img src="https://www.underconsideration.com/brandnew/archives/british_american_tobacco_logo_before_after.png" alt="British American Tobacco" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="Nintendo" />
          <img src="https://objectway.com/wp-content/uploads/2023/07/logo_BNP_paribas.svg" alt="BNP Paribas" />
          <img src="https://www.brandemia.org/wp-content/uploads/2012/06/version_horizontal.jpg" alt="Repsol" />

          </div>
      </div>

  </div>
</section>

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
              <a href="/public/CV_Santiago_Luceron.pdf" download className="btn-secondary">
              Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
     

    </div>
  )
}

export default About
