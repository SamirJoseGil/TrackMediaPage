{/* SECTION 9: Innovación + Experiencia + Vocación */ }
export default function InnovacionExperienciaVocacion() {
    return (
        <section className="py-16 md:py-20 px-6 bg-gray-50 dark:bg-dark-light overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    {/* Contenido de texto - ahora con títulos estilizados */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-8">
                        {/* Títulos con estilos únicos */}
                        <div className="relative mb-8 md:mb-12 animate-on-scroll">
                            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary relative z-10">
                                Innovación
                            </h2>
                            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-300 opacity-90 pl-8 md:pl-12 -mt-1 md:-mt-2 relative z-20">
                                Experiencia
                            </h2>
                            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary/80 pl-16 md:pl-24 -mt-1 md:-mt-2 relative z-30">
                                Vocación
                            </h2>

                            {/* Elemento decorativo */}
                            <div className="absolute -bottom-4 left-0 w-24 md:w-32 h-1 bg-primary"></div>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                            Contamos con más de diez años de experiencia en el sector del entretenimiento, trabajando con artistas nacionales e internacionales en eventos como Estéreo Picnic, Altavoz, Día de Rock, Sambe Tock, La Solar, Ritvales, KNXT, y muchos más.
                        </p>

                        {/* Elemento adicional para equilibrar el diseño */}
                        <div className="mt-6 md:mt-8 flex items-center animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                            <span className="text-primary text-4xl mr-3">+</span>
                            <p className="text-lg font-bold text-gray-800 dark:text-gray-300">10 años transformando eventos en experiencias memorables</p>
                        </div>
                    </div>

                    {/* Imagen única con efectos mejorados */}
                    <div className="w-full md:w-1/2 relative animate-on-scroll">
                        <div className="relative">
                            {/* Elementos decorativos */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary rounded-full opacity-70 animate-pulse-slow"></div>
                            <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-primary/50 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s' }}></div>

                            {/* La imagen principal */}
                            <img
                                src="Img/_DSC4691.webp"
                                alt="Innovación, Experiencia, Vocación"
                                className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 relative z-10"
                            />

                            {/* Efecto de sombra */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}