import Video from '../../../assets/videos/principal.mp4';
import { ButtonCta } from '../../ui/ButtonCta';

export const Featured = () => {
  return (
    <div className="relative ">
      <div className="relative py-32 max-w-6xl mx-auto px-8 z-20 ">
        <div className="max-w-[500px] text-white">
          <h1 className="md:text-4xl text-[20px] font-semibold leading-8 text-center md:text-left md:leading-[50px] ">
            Servicio{' '}
            <span className="text-[#80E6BD]">Técnico Especializado </span> en
            Celulares, Computadores y
            <span className="text-[#80E6BD]"> Tablets</span>
          </h1>
          <p className="my-6 md:text-lg text-sm text-center md:text-left">
            Diagnóstico rápido, reparaciones seguras y actualizaciones
            <span className="text-[#80E6BD]"> garantizadas</span>. Más de
            <span className="text-[#80E6BD]"> 10 años de experiencia </span>
            cuidando tu tecnología con{' '}
            <span className="text-[#80E6BD]">
              repuestos originales y atención personalizada
            </span>
            .
          </p>

          <div className="flex md:flex-row flex-col items-center gap-6">
            <ButtonCta
              label=" Solicitar Reparación"
              baseMessage="Hola, estoy interesado en: "
            />
            <div className="flex items-center gap-2 group cursor-pointer">
              <a
                href="https://wa.me/573138000536?text=Necesito más información sobre un producto "
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-white font-medium inline-block transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2"
              >
                Más Información
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-sky-300 to-[#80E6BD] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 z-10 opacity-80 bg-gradient-to-r from-black from-30% bg-transparent w-full h-full"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 z-0 w-full h-full object-cover max-w-none"
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
