import { Botton } from '../../ui/Botton';

interface ModalCardProps {
  hadleOpen: () => void;
  title: string;
  subTitle: string;
  list: string[];
}

export const ModalCard = ({ hadleOpen, title, list, subTitle }: ModalCardProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm  bg-opacity-70 transition-opacity">
      {/* Fondo o 'Overlay' para cerrar al hacer clic afuera */}
      <div className="fixed inset-0" onClick={hadleOpen}></div>

      {/* Contenido del Modal */}
      <div className="relative bg-black/65 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300">
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-5 border-b border-slate-200">
          <p
            className="mb-4 text-4xl font-semibold uppercase text-white"
          >
            {subTitle}
          </p>

          {/* Botón de Cierre (X) */}
          <button
            onClick={hadleOpen}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        {/* Cuerpo del Modal */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {list.map((item, index) => (
              <li key={index}>
                <Botton
                  label={item}
                  baseMessage="Hola, quiero información sobre "
                />
              </li>
            ))}
          </ul>

          {/* Botón de ejemplo dentro del modal */}
          <button
            onClick={hadleOpen}
            className="cursor-pointer mt-6 py-2 px-6 border-2 border-[#56DDA7] text-white font-semibold 
            rounded-full hover:bg-opacity-80 transition-transform duration-300 hover:bg-[#56DDA7] hover:text-black  hover:scale-110"
          >
            Cerrar y Explorar
          </button>
        </div>
      </div>
    </div>
  );
};
