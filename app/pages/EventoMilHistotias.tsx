{/* SECTION 8: Un evento, mil historias */ }
export default function EventoMilHistotias() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-tracked-white dark:bg-tracked-black">
            <div className="container mx-auto">
                {/* Encabezado responsivo con mejores espaciados en móvil */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll text-primary">
                        Un evento, mil historias
                    </h2>

                    <div className="w-20 h-1 bg-primary mb-4 sm:mb-6 animate-on-scroll hidden sm:block"></div>

                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl animate-on-scroll">
                        Nos especializamos en transformar ideas en contenido visual de impacto, combinando creatividad, innovación y un profundo entendimiento de las necesidades de nuestros clientes.
                    </p>
                </div>

                {/* Primera sección - stack en móvil, grid en desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                    {/* Imagen principal - altura adaptativa */}
                    <div className="animate-on-scroll mb-6 sm:mb-0">
                        <img
                            src="Img/_DSC5253.webp"
                            alt="Story 1"
                            className="rounded-xl shadow-lg w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover"
                        />
                    </div>

                    {/* Texto informativo - responsivo con diferentes espaciados */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {[1, 2, 3].map((item, index) => (
                            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">
                                    {index === 0 ? "Capturando momentos" :
                                        index === 1 ? "Narrando historias" :
                                            "Creando experiencias"}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                                    {index === 0 ? "Cada evento es único y merece ser documentado con un enfoque personalizado que resalte su esencia e impacto." :
                                        index === 1 ? "Convertimos simples registros en narrativas visuales que conectan emocionalmente con la audiencia." :
                                            "No solo capturamos lo que sucede, sino que ayudamos a crear momentos memorables."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Segunda sección - espaciado mejorado */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="hidden md:block md:col-span-1"></div>
                    <div className="col-span-1 md:col-span-3 relative animate-on-scroll">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">La magia detrás de las cámaras</h3>
                        <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="Img/DSC03228-Pano.webp"
                                alt="Behind the Scenes"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay para mejor visibilidad en modo oscuro */}
                            <div className="absolute inset-0 bg-gradient-to-t from-tracked-black/30 to-transparent dark:from-tracked-black/50"></div>
                        </div>
                        {/* Texto descriptivo adicional */}
                        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Nuestro equipo trabaja con precisión y pasión para capturar cada detalle significativo, creando una narrativa visual completa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}