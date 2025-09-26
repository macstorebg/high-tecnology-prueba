import { useState } from 'react';
import { secction, serviceData, type ServiceKey } from './Services';

export const SpecialServices = () => {
  const [activeSection, setActiveSection] = useState<ServiceKey>(
    secction[0].key as ServiceKey,
  );

  const currentService = serviceData[activeSection];

  return (
    <div>
      <div className="flex flex-col item-center justify-center ">
        <h2 className="text-center text-4xl font-semibold mb-12 text-white">
          Nuestros Servicios
        </h2>
        <div className="flex flex-col  items-center justify-center">
          <div className="flex justify-center gap-x-2 gap-y-3 mb-6 md:mb-8 flex-wrap p-2">
            {secction.map((section, index) => (
              <span
                key={index}
                onClick={() => setActiveSection(section.key as ServiceKey)}
                className={` text-sm cursor-pointer pb-[5px] relative transition-colors duration-300 
                    font-semibold whitespace-nowrap md:text-base md:font-bold 
                    hover:text-[#56DDA7] hover:after:bg-[#56DDA7] 
                    ${
                      activeSection === section.key
                        ? 'text-[#56DDA7] after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#56DDA7]'
                        : 'text-gray-500'
                    }`}
              >
                {section.label}
              </span>
            ))}
          </div>
          {/* cards */}
          <div className="flex justify-center">
            {currentService && (
              <div className="flex flex-col md:flex-row m-2 gap-0 md:gap-5 bg-black/75 rounded-lg overflow-hidden shadow-lg shadow-white/25 max-w-[70rem]">
                <div className="flex-1 flex justify-center items-center min-w-[300px]">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {currentService.title}
                  </h3>
                  <p className=" text-gray-400 mb-6 text-base">
                    {currentService.description}
                  </p>
                  <button
                    className="py-4 px-8 inline-block text-white cursor-pointer border-2 border-[#56DDA7] text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold transition transform duration-300 hover:scale-110"
                  >
                    Solicitar Reparación
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
