

// (Copia aquí el array KEY_BENEFITS del Paso 1)

const KEY_BENEFITS = [
  {
    icon: '🛡️', 
    title: 'Garantía Extendida',
    description: 'Ofrecemos 6 meses de garantía en todas las reparaciones de pantallas y baterías. Tu inversión está protegida.',
    color: 'bg-[#56DDA7]', // Un tono más oscuro para contraste
  },
  {
    icon: '⚡', 
    title: 'Servicio Express',
    description: 'Diagnóstico gratuito y reparaciones comunes (pantallas, baterías) listas en solo 30-60 minutos.',
    color: 'bg-[#56DDA7]',
  },
  {
    icon: '🛠️', 
    title: 'Reparación Certificada',
    description: 'Especialistas en Micro Soldadura y componentes de calidad AAA para iOS y Android.',
    color: 'bg-[#56DDA7]',
  },
];

export const Benefits = () => {
  return (
   <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
          Tu Móvil en las Mejores Manos
        </h2>
        
        {/* LA CLAVE: Se apila en 1 columna en móvil y pasa a 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          
          {KEY_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#56DDA7]"
            >
              {/* ... Contenido de la tarjeta ... */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};