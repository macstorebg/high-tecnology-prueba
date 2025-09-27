import { useEffect, useState } from 'react';
import SliderOne from '../../../assets/images/slider1.1.jpg';
import SliderTwo from '../../../assets/images/slider2.2.jpg';
import SliderThree from '../../../assets/images/repair/slider3.png';

// --- 1. Define los datos del carrusel ---
const slides = [
  {
    image: SliderOne, // Reemplaza con tus rutas
    subtitle: 'Compromiso Total',
    title: 'Calidad que Supera tus Expectativas',
    description:
      'Utilizamos solo repuestos originales y procesos estandarizados para asegurar la durabilidad y el rendimiento de tu reparación.',
    buttonPrimary: 'Nuestra Garantía',
  },
  {
    image: SliderTwo,
    subtitle: 'Nuestro Equipo',
    title: 'Técnicos Expertos, Resultados Garantizados',
    description:
      'Confía tus equipos a profesionales certificados con años de experiencia en reparación de alta complejidad.',
    buttonPrimary: 'Conoce al Equipo',
  },
  {
    image: SliderThree,
    subtitle: 'Servicio Especializado',
    title: 'Microsoldadura de Precisión Avanzada',
    description:
      'Reparamos fallos a nivel de placa base, restaurando componentes minúsculos con la máxima precisión y garantía.',
    buttonPrimary: 'Ver Servicio Técnico',
  },
];

export const CardLarge = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica para el cambio automático de slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambia cada 5000ms (5 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl h-[550px] lg:h-[400px] ">
      {/* --- 2. Contenedor de las Imágenes del Carrusel --- */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-in-out"
        // Esto mueve horizontalmente el contenedor para mostrar el slide correcto
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          display: 'flex',
        }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s.image}
            alt={s.title}
            // Cada imagen ocupa el 100% del ancho del padre para el deslizamiento
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/45 opacity-80 to-transparent"></div>

      {/* --- 4. Contenido (Texto y Botones) --- */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-8 sm:p-12">
        <div className=" text-white">
          {/* Subtítulo */}
          <p className="text-sm sm:text-lg font-semibold uppercase tracking-widest mb-2 opacity-80">
            {slide.subtitle}
          </p>

          {/* Título Principal: Responsivo */}
          <h1 className="text-4xl sm:text-6xl lg:text-5xl font-extrabold leading-tight mb-4">
            {slide.title}
          </h1>

          {/* Descripción */}
          <p className="text-base sm:text-xl font-light mb-8 max-w-2xl mx-auto">
            {slide.description}
          </p>
        </div>
      </div>

      {/* --- 5. Indicadores del Carrusel (puntos) --- */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
