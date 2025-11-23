import { useState } from 'react'
import '../styles/Gallery.css'

interface Photo {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const photos: Photo[] = [
  { id: 1, src: '/images/gallery/LB_N6.jpg', alt: 'Lata abierta de mejillones en escabeche La Brújula Nº22 junto a su estuche artesanal', title: 'Mejillones La Brújula Nº22 en escabeche', description: 'Fotografía de producto con lata abierta de mejillones fritos en escabeche y su estuche premium de Conservas La Brújula.' },
  { id: 2,
    src: '/images/gallery/RP_Sardinas.jpg',
    alt: 'Lata abierta de sardinas en aceite de oliva Ramón Peña sobre fondo de madera junto a su estuche negro y dorado',
    title: 'Sardinas Ramón Peña en aceite de oliva',
    description: 'Fotografía de producto con lata abierta de sardinillas en aceite de oliva y su estuche gourmet de Conservas Ramón Peña sobre tabla de madera rústica.' },
  { 
    id: 3,
    src: '/images/gallery/LB_N_70.JPG',
    alt: 'Lata redonda de filetes de anchoa La Brújula Nº70 sobre fondo azul marino con salpicaduras blancas',
    title: 'Anchoas La Brújula Nº70 en aceite de oliva',
    description: 'Rediseño e infografía de producto con lata redonda gourmet de filetes de anchoa en aceite de oliva de Conservas La Brújula sobre fondo azul con textura marina.'
  },
  {
    id: 4,
    src: '/images/gallery/LB_N6.jpg',
    alt: 'Lata abierta de navajas al natural La Brújula Nº6 junto a su estuche artesanal',
    title: 'Navajas La Brújula Nº6 al natural',
    description: 'Fotografía de producto con lata abierta de navajas al natural de las Rías Gallegas y su estuche premium de Conservas La Brújula sobre fondo blanco.'
  },
  {
    id: 5,
    src: '/images/gallery/RP_Sardinas.JPG',
    alt: 'Lata abierta de sardinillas en aceite de oliva Ramón Peña sobre fondo de madera junto a su estuche negro y dorado',
    title: 'Sardinas Ramón Peña en aceite de oliva',
    description: 'Fotografía de producto con lata abierta de sardinillas en aceite de oliva y su estuche gourmet de Conservas Ramón Peña sobre tabla de madera rústica.'
  },
  {
    id: 6,
    src: '/images/gallery/RPLP_Ventresca.JPG',
    alt: 'Lata abierta de ventresca de atún claro Ramón Peña en aceite de oliva junto a su estuche blanco',
    title: 'Ventresca de atún claro Ramón Peña',
    description: 'Fotografía de producto con lata abierta de ventresca de atún claro en aceite de oliva y su estuche premium de Conservas Ramón Peña sobre superficie de madera oscura.'
  },
  {
    id: 7,
    src: '/images/gallery/Bodegon.JPG',
    alt: 'Bodegón de latas abiertas de almejas y mejillones La Brújula junto a sus estuches artesanales',
    title: 'Bodegón de conservas La Brújula',
    description: 'Fotografía de bodegón con latas abiertas de almejas al natural y mejillones en escabeche de Conservas La Brújula acompañadas de sus estuches blancos sobre fondo negro.'
  }
  
]

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="gallery">
      <h1>Galería de Fotografía de Producto</h1>

      <div className="gallery-grid">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="photo-item"
            tabIndex={0}
            role="button"
            aria-label={`Abrir foto ${photo.title}`}
            onClick={() => setSelectedPhoto(photo)} 
            onKeyDown={(e) => e.key === 'Enter' && setSelectedPhoto(photo)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            {photo.title && <div className="photo-caption">{photo.title}</div>}
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div 
          className="modal" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modalTitle"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedPhoto(null)}
          tabIndex={-1}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-btn" 
              onClick={() => setSelectedPhoto(null)} 
              aria-label="Cerrar galería"
            >×</button>

            <img src={selectedPhoto.src} alt={selectedPhoto.alt} loading="lazy" />
            <h2 id="modalTitle">{selectedPhoto.title}</h2>
            <p>{selectedPhoto.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
