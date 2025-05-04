{/* SECTION 12: Nosotros lo hacemos posible */ }
export default function NosotrosLoHacemos() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-tracked-white dark:bg-tracked-black relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto">
                {/* Título con estilo único y separador personalizado */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 relative animate-on-scroll">
                    <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase relative z-10">
                        <span className="text-primary">Nosotros</span>
                        <span className="text-gray-800 dark:text-gray-200 mx-2 sm:mx-4">lo hacemos</span>
                        <span className="text-primary">posible</span>
                    </h2>

                    {/* Decoración bajo el título */}
                    <div className="relative h-3 w-36 sm:w-48 md:w-60 mx-auto mt-4 sm:mt-6">
                        <div className="absolute left-0 top-0 h-2 w-full bg-primary/80 rounded-full"></div>
                        <div className="absolute left-5 top-1 h-2 w-4/5 bg-primary/40 rounded-full"></div>
                        <div className="absolute left-10 top-2 h-1 w-3/5 bg-primary/20 rounded-full"></div>
                    </div>
                </div>

                {/* Gran imagen destacada */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll mb-8 sm:mb-10">
                    {/* Overlay para mejor contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tracked-black/50 via-transparent to-transparent z-10"></div>

                    <img
                        src="Img/1_20-b.webp"
                        alt="Equipo Tracked Media en acción"
                        className="w-full h-auto md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-1000"
                    />

                    {/* Badge de calidad sobre la imagen */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-20 rotate-3">
                        Calidad profesional
                    </div>

                    {/* Texto inspiracional sobre la imagen */}
                    <div className="absolute bottom-6 sm:bottom-8 left-0 w-full text-center z-20">
                        <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold px-4 text-shadow-lg">
                            Un equipo comprometido con tu visión
                        </p>
                    </div>
                </div>

                {/* Texto descriptivo */}
                <div className="max-w-3xl mx-auto text-center animate-on-scroll">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        Desde el concepto inicial hasta el resultado final, nuestro equipo de profesionales se dedica a
                        convertir tus ideas en productos audiovisuales de alto impacto que superan las expectativas.
                    </p>
                </div>
            </div>
        </section>
    )
}