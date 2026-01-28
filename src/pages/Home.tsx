import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import '../styles/Home.css'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home responsive-home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('home.hero.title.line1')}
            <span className="highlight"> {t('home.hero.title.highlight')}</span>
          </h1>
          <p className="hero-description">
            {t('home.hero.description')}
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">
              {t('home.hero.cta.about')}
            </Link>

            <Link to="/contact" className="btn btn-primary">
              {t('home.hero.cta.contact')}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-container">
          <h2>{t('home.intro.title')}</h2>
          <p>
            {t('home.intro.description')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
