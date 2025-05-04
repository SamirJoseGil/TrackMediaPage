export default function VisionMision() {
    return (
        <>
            {/* SECTION 6: Visión y Misión */}
            <section className="py-8 md:py-16 px-4 sm:px-6 bg-tracked-white dark:bg-tracked-black min-h-[80vh] flex items-center relative overflow-hidden">
                {/* Animated background elements - responsive sizes */}
                <div className="absolute top-1/4 right-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-32 sm:w-40 md:w-60 h-32 sm:h-40 md:h-60 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        {/* Left column - Text content with improved mobile spacing */}
                        <div className="w-full md:w-1/2 pr-0 md:pr-8 lg:pr-12 mb-10 md:mb-0 space-y-10 md:space-y-16">
                            {/* Mission section */}
                            <div className="animate-on-scroll">
                                <div className="w-16 sm:w-20 h-1 bg-primary mb-4 md:mb-6"></div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-5 text-primary">
                                    Misión
                                </h3>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed">
                                    Transformar ideas en experiencias visuales memorables, proporcionando soluciones audiovisuales innovadoras que conecten emocionalmente con las audiencias y aporten valor real a nuestros clientes.
                                </p>
                            </div>

                            {/* Vision section - positioned lower */}
                            <div className="pt-4 md:pt-8 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                                <div className="w-16 sm:w-20 h-1 bg-primary mb-4 md:mb-6"></div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 md:mb-5 text-primary">
                                    Visión
                                </h3>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed">
                                    Ser reconocidos como la productora audiovisual líder en innovación y calidad, estableciendo nuevos estándares en la industria y expandiendo nuestra presencia a nivel internacional.
                                </p>
                            </div>
                        </div>

                        {/* Right column - Image with enhanced animation and responsiveness */}
                        <div className="w-full md:w-1/2 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary/20 mx-auto max-w-md md:max-w-full">
                                <img
                                    src="/Img/1_12.webp"
                                    alt="Visión y Misión"
                                    className="rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/600x800?text=Vision+Mission";
                                    }}
                                />
                                {/* Overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-tracked-black/60 to-transparent"></div>

                                {/* Animated corner element */}
                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-2 border-primary rounded-full opacity-60 animate-pulse-glow"></div>
                            </div>

                            {/* Small floating accent element - hidden on very small screens */}
                            <div className="hidden sm:block absolute -right-4 top-1/4 w-12 md:w-16 h-12 md:h-16 bg-primary rounded-full bg-opacity-20 blur-xl animate-float"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements - adjusted for mobile */}
                <div className="absolute -bottom-10 -left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border border-primary opacity-10 rounded-full"></div>
                <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border border-primary opacity-10"></div>
            </section>
        </>
    )
}