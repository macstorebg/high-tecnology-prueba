// import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo-blanco.png';

// --- Contenido de las listas (Definiciones o importaciones) ---
const services = [
  'Reemplazo de Pantallas',
  'Remanufacturación',
  'Cambio de Baterías',
  'Reparación a Componente',
];

const accessories = [
  'Cargadores Rápidos',
  'Protectores de Pantalla',
  'Audífonos Bluetooth',
  'Fundas Protectoras',
];

const computers = [
  'Mantenimiento General',
  'Diagnóstico de Hardware',
  'Reparación de Laptops',
  'Venta de Componentes',
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t-[2px] border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-gray-400 max-w-xs">
              Servicio técnico profesional y express para móviles y equipos de
              cómputo. Confianza y calidad garantizada.
            </p>
            <img src={Logo} alt="Imagen logo" className="size-40" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.map((serviceName, index) => {
                const baseMessage =
                  'Hola, estoy interesado en el servicio de: ';
                const encodedMessage = encodeURIComponent(
                  baseMessage + serviceName,
                );
                const whatsappUrl = `https://wa.me/573138000536?text=${encodedMessage}`;

                return (
                  <li key={index}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#56DDA7] transition-colors duration-200"
                    >
                      {serviceName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Accesorios
            </h4>
            <ul className="space-y-2 text-sm">
              {accessories.map((serviceName, index) => {
                const baseMessage =
                  'Hola, estoy interesado en el servicio de: ';
                const encodedMessage = encodeURIComponent(
                  baseMessage + serviceName,
                );
                const whatsappUrl = `https://wa.me/573138000536?text=${encodedMessage}`;

                return (
                  <li key={index}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#56DDA7] transition-colors duration-200"
                    >
                      {serviceName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Computadores
            </h4>
            <ul className="space-y-2 text-sm">
              {computers.map((serviceName, index) => {
                const baseMessage =
                  'Hola, estoy interesado en el servicio de: ';
                const encodedMessage = encodeURIComponent(
                  baseMessage + serviceName,
                );
                const whatsappUrl = `https://wa.me/573138000536?text=${encodedMessage}`;

                return (
                  <li key={index}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#56DDA7] transition-colors duration-200"
                    >
                      {serviceName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500 space-y-1">
          <p>
            © {new Date().getFullYear()} High Tecnology. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-400">
            Diseñado y desarrollado por{' '}
            <span className="font-semibold">Leonardo Gómez</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
