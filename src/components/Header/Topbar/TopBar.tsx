import { useEffect, useState } from 'react';
import { services } from '../ListServices';

export const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full max-w-4xl mx-auto p-4  rounded-lg shadow-xl bg-black">
      <div className="h-20 md:h-28">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            display: 'flex',
          }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center p-4"
            >
              <h3
                className="
                text-xl md:text-3xl font-bold text-white 
                  px-2 sm:px-4 
              "
              >
                {item.toUpperCase()}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
