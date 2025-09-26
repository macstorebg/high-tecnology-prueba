import { Link } from 'react-router-dom';
import IlusPageError from '../assets/error401.svg';

export const PageError = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-bl from-20% from-black to-gray-800'>
      <div className='flex flex-col md:flex-row items-center md:m-12 m-0 justify-center gap-2 ' >
        {/* textos */}
        <div className='text-white w-5/6 md:w-4/6 lg:w-3/6 mb-7 md:mb-0'>
          <h2 className='text-start font-semibold text-2xl md:text-4xl mb-2' >
            404 – Error en la Matrix
          </h2>
          <p className='text-gray-300 mb-8'>Parece que el enlace que seguiste no existe.</p>
          <Link className='py-2 px-4 border-2 border-white text-white rounded-lg cursor-pointer
          hover:bg-white hover:text-black hover:scale-125 transition transform duration-300
          ease-in-out hover:font-semibold text-[12px] md:text-[15px] mb-12' to="/" >Haz clic aquí para volver a la realidad.</Link>
        </div>
        {/* ilustraciones */}
        <div>
            <img 
                src={IlusPageError} 
                alt="ilustacion de computador con error" 
                className='size-48 animate-bounce  md:animate-pulse   md:size-72 z-10'    
                
            />
        </div>
      </div>
    </div>
  )
}
