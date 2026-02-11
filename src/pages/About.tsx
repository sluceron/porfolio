import React from "react";
import "../styles/About.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCV from "../components/DownloadCV";
import Lottie from "lottie-react";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const [lottieData, setLottieData] = React.useState<Record<string, any>>({});

  useEffect(() => {
    const track = document.querySelector(".logo-track");
    if (track) {
      track.innerHTML += track.innerHTML;
    }
  }, []);

  const experienceTimelineRaw = t('about.experience.timeline', { returnObjects: true });
  const experienceTimeline = Array.isArray(experienceTimelineRaw)
    ? experienceTimelineRaw
    : (experienceTimelineRaw && typeof experienceTimelineRaw === 'object'
        ? Object.values(experienceTimelineRaw)
        : []);

  const specializationCardsRaw = t('about.specialization.cards', { returnObjects: true });
  const specializationCards = Array.isArray(specializationCardsRaw)
    ? specializationCardsRaw
    : (specializationCardsRaw && typeof specializationCardsRaw === 'object'
        ? Object.values(specializationCardsRaw)
        : []);

useEffect(() => {
  const loadAnimations = async () => {
    const loadedData: Record<string, any> = {};

    // Carga todas las animaciones en paralelo y asegura que no se pierda ninguna
    await Promise.all(
      specializationCards.map(async (card: any) => {
        if (card.animationKey) {
          try {
            const module = await import(
              /* @vite-ignore */ `../assets/images/lotties/${card.animationKey}.json`
            );
            loadedData[card.animationKey] = module.default;
          } catch (err) {
            console.warn(`Lottie "${card.animationKey}" not found`);
          }
        }
      })
    );

    setLottieData(loadedData);
  };

  if (specializationCards.length > 0) {
    loadAnimations();
  }
}, [specializationCards]);

  const historyParagraphsRaw = t('about.history.paragraphs', { returnObjects: true });
  const historyParagraphs = Array.isArray(historyParagraphsRaw)
    ? historyParagraphsRaw
    : (historyParagraphsRaw && typeof historyParagraphsRaw === 'object'
        ? Object.values(historyParagraphsRaw)
        : []);

  return (
    <div className="about">
      <section className="about-hero">
        <h1>{t('about.hero.title')}</h1>
        <p className="about-subtitle">{t('about.hero.subtitle')}</p>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-intro">
            <h2>{t('about.intro.name')}</h2>
            <p className="role">{t('about.intro.role')}</p>
            <p className="location">{t('about.intro.location')}</p>
          </div>

          <div className="about-text">
            <h2>{t('about.history.title')}</h2>
            {historyParagraphs.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-experience">
            <h2>{t('about.experience.title')}</h2>
            <div className="experience-timeline">
              {experienceTimeline.map((item: any, index: number) => (
                <div className="timeline-item" key={index}>
                  <span className="year">{item.year}</span>
                  <h3>{item.position}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-skills">
            <h2>{t('about.specialization.title')}</h2>
            <div className="skills-grid">
              {specializationCards.map((card: any, index: number) => (
                <div className="skill-card" key={index}>
                  <div className="about-lottie">
                    {card.animationKey && lottieData[card.animationKey] && (
                      <Lottie animationData={lottieData[card.animationKey]} loop={true} />
                    )}
                  </div>
                  <h3>
                    {card.title}
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </h3>
                  <p>{card.description}</p>
                  <div className="skill-tools">
                    {Array.isArray(card.tools) && card.tools.map((tool: string, i: number) => (
                      <span key={i}>
                        {tool}
                        {i < card.tools.length - 1 ? " | " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="about-brands">
            <div className="about-brands-container">
              <h2>{t('about.brands.title')}</h2>
              <p className="about-brands-text">{t('about.brands.description')}</p>
              <div className="logo-slider" aria-label={t('about.brands.ariaLabel')}>
                <div className="logo-track">
                  <img src="https://www.shutterstock.com/image-photo/coca-cola-logo-on-vibrant-600nw-2524254995.jpg" alt="Coca-Cola" />
                  <img src="https://guiaimpresion.com/wp-content/uploads/2020/05/Heineken-emblema.jpg" alt="Heineken Internacional" />
                  <img src="https://images.seeklogo.com/logo-png/43/1/damm-logo-png_seeklogo-438928.png" alt="Grupo Damm" />
                  <img src="https://www.compromisorse.com/upload/noticias/011/11397/Mahou.png" alt="Mahou San Miguel" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Pernod_Ricard_logo_2019.svg" alt="Pernod Ricard" />
                  <img src="https://images.seeklogo.com/logo-png/8/1/maxxium-logo-png_seeklogo-89659.png" alt="Maxxium" />
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
            <h2>{t('about.cta.title')}</h2>
            <p>{t('about.cta.paragraph')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">{t('about.cta.button')}</Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;