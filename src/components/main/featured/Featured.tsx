import { Link } from 'react-router-dom';
import Video from '../../../assets/videos/principal.mp4';


export const Featured = () => {
  return (
    <div className="relative ">
      <div className='relative py-32 max-w-6xl mx-auto px-8 z-20 '>
        <div className='max-w-[500px] text-white'>
          <h1 className='md:text-4xl text-[20px] font-semibold leading-8 text-center md:text-left md:leading-[50px] '>
            Servicio Técnico Especializado en Celulares, Computadores y Tablets
          </h1>
          <p className='my-6 md:text-lg text-sm text-center md:text-left'>
            Diagnóstico rápido, reparaciones seguras y actualizaciones
            garantizadas. Más de 10 años de experiencia cuidando tu tecnología
            con repuestos originales y atención personalizada.
          </p>

          <div className='flex items-center gap-6'>
            <button className='py-4 px-8 inline-block cursor-pointer border-2 border-[#56DDA7] text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold transition transform duration-300 hover:scale-110'>
              Solicitar Reparación
            </button>
            <div className='flex items-center gap-2 group cursor-pointer'>
              <Link className='relative text-white font-medium inline-block transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2' to="#">
                Más Información
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-sky-300 to-fuchsia-500 transition-all duration-500 group-hover:w-full'></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-0 z-10 opacity-80 bg-gradient-to-r from-black from-30% bg-transparent w-full h-full'></div>
      <video autoPlay loop muted className='absolute top-0 z-0 w-full h-full object-cover max-w-none'>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};


// absolute top-0 z-0 md:w-auto bg-left bg-cover md:min-w-full  object-cover md:object-fill max-h-full max-w-none