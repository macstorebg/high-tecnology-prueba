import Soporte from '../../../assets/images/local/card.jpg';
import Estuche from '../../../assets/images/estuche2.jpeg';

export const CardDouble = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 bg-black ">
      <div className="relative flex-1 rounded-xl overflow-hidden shadow shadow-white ml-0 mr-0 md:ml-12 md:mr-0">
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest mb-1">
              Reparación y Mantenimiento
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
              Expertos en Reparación.
            </h2>
            <p className="text-base sm:text-lg font-light mb-2">
              Restaura la funcionalidad de tus dispositivos con nuestro equipo técnico certificado y piezas originales.
            </p>
            <button className="py-3 px-8 inline-block cursor-pointer border-2 border-[#56DDA7] text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold transition transform duration-300 hover:scale-110">
              Solicitar Servicio
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <img
          src={Soporte}
          alt="Oakley Meta Vanguard glasses"
          className="w-full h-80 lg:h-[600px] object-cover"
        />
      </div>
      <div className="relative flex-1 rounded-xl overflow-hidden shadow shadow-white ml-0 mr-0 md:ml-12 md:mr-0">
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest mb-1">
              Fundas y Protectores
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
              Protección de Vanguardia.
            </h2>
            <p className="text-base sm:text-lg font-light mb-2">
              Encuentra los mejores accesorios para maximizar el rendimiento y la durabilidad de tu tecnología.
            </p>
            <button className="py-3 px-8 inline-block cursor-pointer border-2 border-[#56DDA7] text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold transition transform duration-300 hover:scale-110">
              Ver Accesorios
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <img
          src={Estuche}
          alt="Oakley Meta HSTN glasses"
          className="w-full h-80 lg:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};
