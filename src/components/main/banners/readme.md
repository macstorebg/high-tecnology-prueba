// Contenedor principal: Altura y márgenes ajustados para responsividad
    <div className='relative w-full overflow-hidden rounded-xl shadow-2xl h-[450px] sm:h-[500px] lg:h-[650px] 
                    mx-4 sm:mx-8 lg:mx-20 my-8'> 
        
        {/* --- 2. Contenedor de las Imágenes del Carrusel --- */}
        <div 
            className='absolute inset-0 transition-transform duration-1000 ease-in-out'
            style={{ 
                transform: `translateX(-${currentSlide * 100}%)`, 
                display: 'flex',
                width: `${slidesLength * 100}%` 
            }}
        >
            {slides.map((s, index) => (
                <img 
                    key={index}
                    src={s.image} 
                    alt={s.title} 
                    style={{ width: `${100 / slidesLength}%` }} 
                    className='h-full object-cover flex-shrink-0' 
                />
            ))}
        </div>
        
        {/* 🚨 AJUSTE CLAVE 1: Solo una capa de sombra sutil (similar a la imagen) */}
        {/* Usamos un fondo oscuro general en lugar de un degradado fuerte de t-b */}
        <div className='absolute inset-0 z-10 bg-black/40'></div> 
        {/* El 40% de opacidad de negro da un tono oscuro sutil y uniforme */}

        {/* --- 4. Contenido (Texto y Botones) --- */}
        {/* 🚨 AJUSTE CLAVE 2: justify-end y padding para empujar el contenido abajo */}
        <div className='absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-6 sm:p-8 lg:p-10'>
            <div className='max-w-4xl text-white'>
                
                {/* Subtítulo: Color y peso de fuente sutil */}
                <p className='text-sm sm:text-lg font-normal uppercase tracking-widest mb-1 opacity-90'>
                    {slide.subtitle}
                </p>
                
                {/* Título Principal: Altura y espacio inferior ajustados */}
                <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-2 sm:mb-3'>
                    {slide.title}
                </h1>
                
                {/* Descripción */}
                <p className='text-base sm:text-lg font-light mb-6 sm:mb-8 max-w-2xl mx-auto'>
                    {slide.description}
                </p>
                
                {/* Botones */}
                <div className='flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4'>
                    <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300'>
                        {slide.buttonPrimary}
                    </button>
                    <button className='px-6 py-3 bg-white/20 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm hover:bg-white/30 transition duration-300'>
                        {slide.buttonSecondary}
                    </button>
                </div>
            </div>
        </div>

        {/* --- 5. Indicadores del Carrusel (puntos) --- */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2'>
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                    }`}
                />
            ))}
        </div>
    </div>



    <div className='relative w-full overflow-hidden rounded-xl shadow-2xl h-[550px] lg:h-[700px] '>
      
      {/* --- 2. Contenedor de las Imágenes del Carrusel --- */}
      <div 
        className='absolute inset-0 transition-transform duration-1000 ease-in-out'
        // Esto mueve horizontalmente el contenedor para mostrar el slide correcto
        style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex' }}
      >
        {slides.map((s, index) => (
          <img 
            key={index}
            src={s.image} 
            alt={s.title} 
            // Cada imagen ocupa el 100% del ancho del padre para el deslizamiento
            className='w-full h-full object-cover flex-shrink-0' 
          />
        ))}
      </div>
      
      {/* --- 3. Capa de Degradado Oscuro (para legibilidad del texto) --- */}
      {/* De abajo hacia arriba, tal como en tu imagen */}
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

      {/* --- 4. Contenido (Texto y Botones) --- */}
      <div className='absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-8 sm:p-12'>
        <div className='max-w-4xl text-white'>
          {/* Subtítulo */}
          <p className='text-sm sm:text-lg font-semibold uppercase tracking-widest mb-2 opacity-80'>
            {slide.subtitle}
          </p>
          
          {/* Título Principal: Responsivo */}
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4'>
            {slide.title}
          </h1>
          
          {/* Descripción */}
          <p className='text-base sm:text-xl font-light mb-8 max-w-2xl mx-auto'>
            {slide.description}
          </p>
          
          {/* Botones */}
          <div className='flex justify-center space-x-4'>
            <button className='px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300'>
              Shop {slide.subtitle}
            </button>
            <button className='px-6 py-3 bg-white/20 text-white font-bold rounded-full shadow-lg backdrop-blur-sm hover:bg-white/30 transition duration-300'>
              Apps y Juegos
            </button>
          </div>
        </div>
      </div>

      {/* --- 5. Indicadores del Carrusel (puntos) --- */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>