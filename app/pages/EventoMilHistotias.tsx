{/* SECTION 8: Un evento, mil historias */ }
export default function EventoMilHistotias() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-tracked-white dark:bg-tracked-black">
            <div className="container mx-auto">
                {/* Encabezado */}
                <div className="mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-on-scroll text-primary">
                        Un evento, mil historias
                    </h2>

                    <div className="w-20 h-1 bg-primary mb-4 sm:mb-6 animate-on-scroll hidden sm:block"></div>

                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl animate-on-scroll">
                        Nos especializamos en transformar ideas en contenido visual de impacto, combinando creatividad, innovación y un profundo entendimiento de las necesidades de nuestros clientes.
                    </p>
                </div>

                {/* Grid de 4 columnas sin filas explícitas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-0">
                    {/* Columna 1: Imagen principal que se extiende verticalmente */}
                    <div className="md:row-span-4 animate-on-scroll mb-6 md:mb-0">
                        <img
                            src="Img/_DSC5253.webp"
                            alt="Story 1"
                            className="rounded-xl shadow-lg w-full h-64 sm:h-80 md:h-[calc(100%-2rem)] lg:h-[calc(100%-2rem)] object-cover sticky md:top-24"
                        />
                    </div>

                    {/* Columnas 2-4: Tres textos individuales */}
                    <div className="animate-on-scroll mb-4" style={{ animationDelay: "0s" }}>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Capturando momentos</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Cada evento es único y merece ser documentado con un enfoque personalizado que resalte su esencia e impacto.
                        </p>
                    </div>

                    <div className="animate-on-scroll mb-4" style={{ animationDelay: "0.1s" }}>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Narrando historias</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Convertimos simples registros en narrativas visuales que conectan emocionalmente con la audiencia.
                        </p>
                    </div>

                    <div className="animate-on-scroll mb-6" style={{ animationDelay: "0.2s" }}>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">Creando experiencias</h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            No solo capturamos lo que sucede, sino que ayudamos a crear momentos memorables.
                        </p>
                    </div>

                    {/* Columna 1: Vacía (corresponde a la imagen principal) */}
                    <div className="hidden md:block"></div>

                    {/* Columnas 2-4: La magia detrás de las cámaras */}
                    <div className="md:col-span-3 relative animate-on-scroll">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-primary">La magia detrás de las cámaras</h3>
                        <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="Img/DSC03228-Pano.webp"
                                alt="Behind the Scenes"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tracked-black/30 to-transparent dark:from-tracked-black/50"></div>
                        </div>
                        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            Nuestro equipo trabaja con precisión y pasión para capturar cada detalle significativo, creando una narrativa visual completa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}