import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Gallery.css'

interface Color {
  name: string;
  hex: string;
}

interface Fonts {
  titles: string;
  body: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  palette: string[];
  colors: Color[];
  concept: string;
  mission: string;
  typography: string;
  fonts: Fonts;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nórdica Flora',
    subtitle: 'Diseño Moderno',
    description: 'Este proyecto muestra un diseño moderno con líneas limpias y colores vibrantes.',
    image: '/images/gallery/nordicaflora.png',
    palette: ['#87947C', '#F5F2E9', '#C27D60'],
    colors: [
      { name: 'Verde Salvia', hex: '#87947C' },
      { name: 'Crema', hex: '#F5F2E9' },
      { name: 'Terracota Suave', hex: '#C27D60' },
    ],
    concept: 'Diseño moderno inspirado en la naturaleza nórdica, con énfasis en la frescura y simplicidad.',
    mission: 'Reconectar el entorno urbano con la serenidad de la naturaleza a través de un paisajismo consciente, minimalista y sostenible, transformando espacios cotidianos en santuarios de vida orgánica.',
    typography: 'Tipografía sans-serif limpia y legible, con variantes en negrita para títulos.',
    fonts: {
      titles: 'Playfair Display (Serif sofisticada)',
      body: 'Montserrat Light (Sans Serif geométrica y limpia)',
    },
  },
  {
    id: 2,
    title: 'Volt Audio',
    subtitle: 'Minimalismo Tecnológico',
    description: 'Proyecto con un diseño minimalista, animaciones sutiles y enfoque en la tipografía.',
    image: '/images/gallery/voltaudio.png',
    palette: ['#2E4057', '#66A182', '#C4DFAA', '#F6F7EB'],
    colors: [
      { name: 'Negro Azabache', hex: '#121212' },
      { name: 'Amarillo eléctrico', hex: '#F9FF00' },
      { name: 'Gris Carbón', hex: '#333333' },
    ],
    concept: 'Energía, dinamismo y tecnología. Una identidad visual de alto impacto para el mundo digital.',
    mission: 'Ofrecer una experiencia de audio digital limpia y eficiente mediante el minimalismo.',
    typography: 'Tipografía moderna y delgada, ideal para interfaces limpias y elegantes.',
    fonts: {
      titles: 'Archivo Black o Anton (Sans Serif de peso industrial).',
      body: 'Inter o Roboto (Legibilidad máxima en pantallas).',
    },
  },
  {
    id: 3,
    title: 'Mesa & Origen',
    subtitle: 'Gastronomía Tradicional',
    description: 'Un proyecto innovador que integra tecnología avanzada con principios de diseño centrados en el usuario.',
    image: '/images/gallery/mesa&origen.png',
    palette: ['#1B263B', '#D4A373', '#FAF9F6'],
    colors: [
      { name: 'Azul Marino Profundo', hex: '#1B263B' },
      { name: 'Ocre', hex: '#D4A373' },
      { name: 'Blanco Roto', hex: '#FAF9F6' },
    ],
    concept: 'Honestidad, artesanía y calidez. Una marca que conecta el origen del producto con la mesa.',
    mission: 'Honrar la tierra y el trabajo artesanal, llevando a la mesa la pureza del producto local mediante una cocina honesta que celebra la transparencia del origen y la calidez del encuentro.  ',
    typography: 'Tipografía serif elegante para títulos y sans-serif para textos largos.',
    fonts: {
      titles: 'Yellowtail o una caligrafía custom (Script orgánica).',
      body: 'Arvo o Rockwell (Slab Serif robusta).',
    },
  },
  {
    id: 4,
    title: 'Lumina SaaS',
    subtitle: 'Soluciones SaaS',
    description: 'Este proyecto enfatiza la accesibilidad y la capacidad de respuesta en todos los dispositivos y tamaños de pantalla.',
    image: '/images/gallery/lumina.png',
    palette: ['#3A0CA3', '#7209B7', '#4CC9F0'],
    colors: [
      { name: 'Azul eléctrico', hex: '#3A0CA3' },
      { name: 'Violeta tech', hex: '#7209B7' },
      { name: 'Cian brillantes', hex: '#4CC9F0' },
    ],
    concept: 'Soluciones SaaS accesibles y escalables para empresas modernas.',
    mission: 'Democratizar la inteligencia de datos transformando la complejidad en claridad, ofreciendo herramientas analíticas eficientes que iluminen la toma de decisiones estratégicas en el ecosistema digital.',
    typography: 'Tipografía sans-serif con buen espaciado y legibilidad en pantallas pequeñas.',
    fonts: {
      titles: 'Inter Bold (Moderna y optimizada para pantallas)',
      body: 'Inter Regular (Equilibrio y claridad).',
    },
  },

  {
    id: 5,
    title: 'Atelier 91',
    subtitle: 'Arte y Fotografía',
    description: 'Un portafolio creativo que combina fotografía y diseño gráfico para contar historias impactantes.',
    image: '/images/gallery/Atelier91.png',
    palette: ['#E7D8C9', '#B2B2B2', '#C5A059'],
    colors: [
      { name: 'Champán', hex: '#E7D8C9' },
      { name: 'Gris piedra', hex: '#B2B2B2' },
      { name: 'Dorado moderno', hex: '#C5A059' },
    ],
    concept: 'Creatividad y arte visual fusionados para proyectos de branding y fotografía.',
    mission: 'Celebrar la belleza de lo sutil a través de piezas de joyería artesanal que encarnan el lujo silencioso, donde cada detalle es una oda a la exclusividad, el diseño eterno y la perfección de la forma.',
    typography: 'Tipografía artística y personalizada para destacar la identidad visual.',
    fonts: {
      titles: 'Bodoni Seven (Serif de alto contraste).',
      body: 'Lato Light (Sans Serif discreta).',
    },
  },
{
    id: 6,
    title: 'Casa Línea',
    subtitle: 'Arquitectura & Interiorismo',
    description: 'Estudio especializado en espacios contemporáneos con alma artesanal y coherencia estética.',
    image: '/images/gallery/Casa_linea.png',
    palette: ['#ECEAE2', '#BFB8A5', '#7E7362'],
    colors: [
      { name: 'Marfil cálido', hex: '#ECEAE2' },
      { name: 'Arena natural', hex: '#BFB8A5' },
      { name: 'Moka suave', hex: '#7E7362' },
    ],
    concept: 'Diseñar espacios que hablen un lenguaje natural entre forma, textura y emoción.',
    mission: 'Crear entornos armónicos que eleven la experiencia del habitar mediante materiales nobles, luz natural y líneas puras.',
    typography: 'Combinación de elegancia arquitectónica y minimalismo visual.',
    fonts: {
      titles: 'Playfair Display (Serif sofisticada).',
      body: 'Nunito Regular (Sans Serif legible y moderna).',
    },
  },
{
    id: 7,
    title: 'Terra Studio',
    subtitle: 'Diseño Sostenible & Producto',
    description: 'Un proyecto que explora el diseño consciente, la sostenibilidad y la belleza orgánica.',
    image: '/images/gallery/TerraStudio.png',
    palette: ['#DAD3C8', '#9B8F7A', '#4B3F36'],
    colors: [
      { name: 'Piedra clara', hex: '#DAD3C8' },
      { name: 'Café lino', hex: '#9B8F7A' },
      { name: 'Tierra profunda', hex: '#4B3F36' },
    ],
    concept: 'Diseño que respira naturaleza y respeta el ciclo de la materia.',
    mission: 'Promover un estilo de vida más consciente a través de objetos que equilibran estética, ética y funcionalidad.',
    typography: 'Natural y serena, con toques orgánicos.',
    fonts: {
      titles: 'Cormorant Garamond (Serif con carácter artesanal).',
      body: 'Open Sans (Sans Serif limpia y práctica).',
    },
  },
{
    id: 8,
    title: 'Nébula Films',
    subtitle: 'Cine & Narrativa Visual',
    description: 'Productora independiente dedicada a historias visuales con carga emocional y estilo vanguardista.',
    image: '/images/gallery/NebulaFilms.png',
    palette: ['#0E0E10', '#43434A', '#C1A57B'],
    colors: [
      { name: 'Negro cósmico', hex: '#0E0E10' },
      { name: 'Gris neblina', hex: '#43434A' },
      { name: 'Bronce suave', hex: '#C1A57B' },
    ],
    concept: 'El arte de narrar con luz, sombra y ritmo visual.',
    mission: 'Capturar el alma de cada historia a través de una cinematografía que desafía lo convencional.',
    typography: 'Visual potente y cinematográfica.',
    fonts: {
      titles: 'Bebas Neue (Sans Serif geométrica).',
      body: 'Inter Light (Sans Serif contemporánea).',
    },
  },
{
    id: 9,
    title: 'Luz & Forma',
    subtitle: 'Estudio de Diseño de Iluminación',
    description: 'Diseñadores de experiencias lumínicas que transforman espacios y emociones.',
    image: '/images/gallery/LuzyForma.png',
    palette: ['#F5F1E8', '#C2BBAA', '#856E5F'],
    colors: [
      { name: 'Lino claro', hex: '#F5F1E8' },
      { name: 'Beige humo', hex: '#C2BBAA' },
      { name: 'Marrón ámbar', hex: '#856E5F' },
    ],
    concept: 'Recrear atmósferas mediante el diálogo entre luz, volumen y percepción.',
    mission: 'Diseñar iluminación arquitectónica que equilibre confort visual y poesía espacial.',
    typography: 'Precisa, técnica, pero con alma artística.',
    fonts: {
      titles: 'Montserrat SemiBold (Sans Serif estructurada).',
      body: 'IBM Plex Sans (Sans Serif técnica y moderna).',
    },
  },
{
    id: 10,
    title: 'Isla Norte',
    subtitle: 'Moda & Marca Personal',
    description: 'Un universo de moda consciente inspirado en la pureza del paisaje y el equilibrio interior.',
    image: '/images/gallery/IslaNorte.png',
    palette: ['#F4EFEA', '#C9C1B8', '#8B7967'],
    colors: [
      { name: 'Perla suave', hex: '#F4EFEA' },
      { name: 'Ostra gris', hex: '#C9C1B8' },
      { name: 'Tostado cálido', hex: '#8B7967' },
    ],
    concept: 'Minimalismo natural como lenguaje de elegancia y autenticidad.',
    mission: 'Fomentar una relación más significativa con la ropa a través del diseño ético y los materiales nobles.',
    typography: 'Fina y contemporánea, con carácter natural.',
    fonts: {
      titles: 'Canela Bold (Serif elegante).',
      body: 'Source Sans Pro (Sans Serif versátil).',
    },
  },

];
  
  const Gallery: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
      const handleContextMenu = (e: Event) => {
        e.preventDefault();
        alert('No está permitido descargar imágenes.');
      };

      // Bloquear click derecho en todas las imágenes de slider
      const slideImages = document.querySelectorAll('.slide-item img');
      slideImages.forEach(img => img.addEventListener('contextmenu', handleContextMenu));

      // Bloquear click derecho dinámicamente en la imagen del modal
      const observer = new MutationObserver(() => {
        const modalImg = document.querySelector('.modal-left img');
        if (modalImg && !(modalImg as any)._listenerAdded) {
          modalImg.addEventListener('contextmenu', handleContextMenu);
          (modalImg as any)._listenerAdded = true;
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        slideImages.forEach(img => img.removeEventListener('contextmenu', handleContextMenu));
        observer.disconnect();
      };
    }, []);
  
    const openModal = (project: Project) => {
      setSelectedProject(project);
      document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    };
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') closeModal();
    };

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
  
    return (
      
      
      <section className="gallery">
        <section className="gallery-hero">
        <h1>Porfolio de Proyectos</h1>
        <p className="gallery-subtitle">
          Aquí puedes ver algunos de mis proyectos de diseño gráfico y branding. Haz clic en cualquier proyecto para ver más detalles.
        </p>
        </section>
        <Slider {...sliderSettings} className="gallery-slider">
          {projects.map(project => (
            <div
              key={project.id}
              className="slide-item"
              tabIndex={0}
              role="button"
              aria-label={`Abrir detalles de ${project.title}`}
              onClick={() => openModal(project)}
              onKeyDown={e => e.key === 'Enter' && openModal(project)}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="slide-caption" style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '10px',
                borderRadius: '5px',
                maxWidth: '90%'
              }}>
                <h2 style={{ margin: 0 }}>{project.title}</h2>
                <h4 style={{ margin: 0 }}>{project.subtitle}</h4>
              </div>
            </div>
          ))}
        </Slider>
  
        {selectedProject && (
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={closeModal}
                aria-label="Cerrar proyecto"
              >
                ×
              </button>
  
              <div className="modal-left">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                />
              </div>
  
              <div className="modal-right">
                <h2 id="modalTitle">{selectedProject.title}</h2>
                <h4>{selectedProject.subtitle}</h4>
  
                <section>
                  <h3>Concepto</h3>
                  <p>{selectedProject.concept}</p>
                </section>
  
                <section>
                  <h3>Misión</h3>
                  <p>{selectedProject.mission}</p>
                </section>
  
                <section>
                  <h3>Paleta de colores</h3>
                  <div className="color-swatches">
                    {selectedProject.colors.map((color, i) => (
                      <div
                        key={i}
                        className="swatch"
                        style={{ backgroundColor: color.hex }}
                        title={`${color.name} - ${color.hex}`}
                      >
                        <span className="swatch-text">{color.name}</span>
                        <span className="swatch-hex">{color.hex}</span>
                      </div>
                    ))}
                  </div>
                </section>
  
                <section>
                  <h3>Tipografía</h3>
                  <p><strong>Títulos:</strong> {selectedProject.fonts.titles}</p>
                  <p><strong>Cuerpo:</strong> {selectedProject.fonts.body}</p>
                </section>
  
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }
  
  export default Gallery;