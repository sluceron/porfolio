import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/Gallery.css'
import { useTranslation } from 'react-i18next'
import { id } from 'date-fns/locale'

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
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
  palette: string[];
  colors: Color[];
  conceptKey: string;
  missionKey: string;
  typography: string;
  fonts: Fonts;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.nordica.title',
    subtitleKey: 'projects.nordica.subtitle',
    descriptionKey: 'projects.nordica.description',
    image: '/images/gallery/nordicaflora.png',
    palette: ['#87947C', '#F5F2E9', '#C27D60'],
    colors: [
      { name: 'Verde Salvia', hex: '#87947C' },
      { name: 'Crema', hex: '#F5F2E9' },
      { name: 'Terracota Suave', hex: '#C27D60' },
    ],
    conceptKey: 'projects.nordica.concept',
    missionKey: 'projects.nordica.mission',
    typography: 'Tipografía sans-serif limpia y legible, con variantes en negrita para títulos.',
    fonts: {
      titles: 'Playfair Display (Serif sofisticada)',
      body: 'Montserrat Light (Sans Serif geométrica y limpia)',
    },
  },
  {
    id: 2,
    titleKey: 'projects.voltaudio.title',
    subtitleKey: 'projects.voltaudio.subtitle',
    descriptionKey: 'projects.voltaudio.description',
    image: '/images/gallery/voltaudio.png',
    palette: ['#2E4057', '#66A182', '#C4DFAA', '#F6F7EB'],
    colors: [
      { name: 'Negro Azabache', hex: '#121212' },
      { name: 'Amarillo eléctrico', hex: '#F9FF00' },
      { name: 'Gris Carbón', hex: '#333333' },
    ],
    conceptKey: 'projects.voltaudio.concept',
    missionKey: 'projects.voltaudio.mission',
    typography: 'Tipografía moderna y delgada, ideal para interfaces limpias y elegantes.',
    fonts: {
      titles: 'Archivo Black o Anton (Sans Serif de peso industrial).',
      body: 'Inter o Roboto (Legibilidad máxima en pantallas).',
    },
  },
  {
    id: 3,
    titleKey: 'projects.mesaOrigen.title',
    subtitleKey: 'projects.mesaOrigen.subtitle',
    descriptionKey: 'projects.mesaOrigen.description',
    image: '/images/gallery/mesa&origen.png',
    palette: ['#1B263B', '#D4A373', '#FAF9F6'],
    colors: [
      { name: 'Azul Marino Profundo', hex: '#1B263B' },
      { name: 'Ocre', hex: '#D4A373' },
      { name: 'Blanco Roto', hex: '#FAF9F6' },
    ],
    conceptKey: 'projects.mesaOrigen.concept',
    missionKey: 'projects.mesaOrigen.mission',
    typography: 'Tipografía serif elegante para títulos y sans-serif para textos largos.',
    fonts: {
      titles: 'Yellowtail o una caligrafía custom (Script orgánica).',
      body: 'Arvo o Rockwell (Slab Serif robusta).',
    },
  },
  {
    id: 4,
    titleKey: 'projects.atelier91.title',
    subtitleKey: 'projects.atelier91.subtitle',
    descriptionKey: 'projects.atelier91.description',
    image: '/images/gallery/Atelier91.png',
    palette: ['#E7D8C9', '#B2B2B2', '#C5A059'],
    colors: [
      { name: 'Champán', hex: '#E7D8C9' },
      { name: 'Gris Piedra', hex: '#B2B2B2' },
      { name: 'Dorado Mate', hex: '#C5A059' },
    ],
    conceptKey: 'projects.atelier91.concept',
    missionKey: 'projects.atelier91.mission',
    typography: 'Tipografía serif clásica para títulos y sans-serif moderna para textos.',
    fonts: {
      titles: 'Bodoni Seven o Didot (Serif de alto contraste).',
      body: 'Lato Light (Sans Serif discreta).',
    },
  },
  {
    id: 5,
    titleKey: 'projects.terra.title',
    subtitleKey: 'projects.terra.subtitle',
    descriptionKey: 'projects.terra.description',
    image: '/images/gallery/TerraStudio.png',
    palette: ['#E7D8C9', '#B2B2B2', '#C5A059'],
    colors: [
      { name: 'Piedra clara', hex: '#DAD3C8' },
      { name: 'Café lino', hex: '#9B8F7A' },
      { name: 'Tierra profunda', hex: '#4B3F36' },
    ],
    conceptKey: 'projects.terra.concept',
    missionKey: 'projects.terra.mission',
    typography: 'Natural y serena, con toques orgánicos.',
    fonts: {
      titles: 'Cormorant Garamond (Serif con carácter artesanal).',
      body: 'Open Sans (Sans Serif limpia y práctica).',
    },
  },
  {
    id: 6,
    titleKey: 'projects.nebula.title',
    subtitleKey: 'projects.nebula.subtitle',
    descriptionKey: 'projects.nebula.description',
    image: '/images/gallery/NebulaFilms.png',
    palette: ['#0E0E10', '#43434A', '#C1A57B'],
    colors: [
      { name: 'Negro cósmico', hex: '#0E0E10' },
      { name: 'Gris neblina', hex: '#43434A' },
      { name: 'Bronce suave', hex: '#C1A57B' },
    ],
    conceptKey: 'projects.nebula.concept',
    missionKey: 'projects.nebula.mission',
    typography: 'Visual potente y cinematográfica.',
    fonts: {
      titles: 'Bebas Neue (Sans Serif geométrica).',
      body: 'Inter Light (Sans Serif contemporánea).',
    },
  },
  {
    id: 7,
    titleKey: 'projects.luz.title',
    subtitleKey: 'projects.luz.subtitle',
    descriptionKey: 'projects.luz.description',
    image: '/images/gallery/LuzyForma.png',
    palette: ['#F5F1E8', '#C2BBAA', '#856E5F'],
    colors: [
      { name: 'Lino claro', hex: '#F5F1E8' },
      { name: 'Beige humo', hex: '#C2BBAA' },
      { name: 'Marrón ámbar', hex: '#856E5F' },
    ],
    conceptKey: 'projects.nebula.concept',
    missionKey: 'projects.nebula.mission',
    typography: 'Precisa, técnica, pero con alma artística.',
    fonts: {
      titles: 'Montserrat SemiBold (Sans Serif estructurada).',
      body: 'IBM Plex Sans (Sans Serif técnica y moderna).',
    },
  },
  {
    id: 8,
    titleKey: 'projects.isla.title',
    subtitleKey: 'projects.isla.subtitle',
    descriptionKey: 'projects.isla.description',
    image: '/images/gallery/IslaNorte.png',
    palette: ['#F4EFEA', '#C9C1B8', '#8B7967'],
    colors: [
      { name: 'Perla suave', hex: '#F4EFEA' },
      { name: 'Ostra gris', hex: '#C9C1B8' },   
      { name: 'Tostado cálido', hex: '#8B7967' },
    ],
    conceptKey: 'projects.isla.concept',
    missionKey: 'projects.isla.mission',
    typography: 'Fina y contemporánea, con carácter natural.',
    fonts: {
      titles: 'Canela Bold (Serif elegante).',
      body: 'Source Sans Pro (Sans Serif versátil).',
    },
  },
    
]

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      alert(t('gallery.alertRightClick'));
    };

    const slideImages = document.querySelectorAll('.slide-item img');
    slideImages.forEach(img => img.addEventListener('contextmenu', handleContextMenu));

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
  }, [t]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = window.innerWidth >= 600 ? 'hidden' : 'auto';
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
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false, centerMode: false, vertical: true } },
      { breakpoint: 480, settings: { slidesToShow: 2, arrows: false, centerMode: true, vertical: true } },
    ]
  };

  return (
    <section className="gallery">
      <section className="gallery-hero">
        <h1>{t('gallery.title')}</h1>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
      </section>

      <Slider
        {...sliderSettings}
        className={`gallery-slider`}
        vertical={window.innerWidth <= 768}
      >
        {projects.map(project => (
          <div
            key={project.id}
            className="slide-item"
            tabIndex={0}
            role="button"
            aria-label={t('gallery.openProject', { project: t(project.titleKey) })}
            onClick={() => openModal(project)}
            onKeyDown={e => e.key === 'Enter' && openModal(project)}
          >
            <img src={project.image} alt={t(project.titleKey)} loading="lazy" />
            <div className="slide-caption">
              <h2>{t(project.titleKey)}</h2>
              <h4>{t(project.subtitleKey)}</h4>
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
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label={t('gallery.closeProject')}
            >
              ×
            </button>

            <div className="modal-left">
              <img src={selectedProject.image} alt={t(selectedProject.titleKey)} loading="lazy" />
            </div>

            <div className="modal-right">
              <h2 id="modalTitle">{t(selectedProject.titleKey)}</h2>
              <h4>{t(selectedProject.subtitleKey)}</h4>

              <section>
                <h3>{t('gallery.concept')}</h3>
                <p>{t(selectedProject.conceptKey)}</p>
              </section>

              <section>
                <h3>{t('gallery.mission')}</h3>
                <p>{t(selectedProject.missionKey)}</p>
              </section>

              <section>
                <h3>{t('gallery.palette')}</h3>
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
                <h3>{t('gallery.typography')}</h3>
                <p><strong>{t('gallery.titles')}:</strong> {selectedProject.fonts.titles}</p>
                <p><strong>{t('gallery.body')}:</strong> {selectedProject.fonts.body}</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery;