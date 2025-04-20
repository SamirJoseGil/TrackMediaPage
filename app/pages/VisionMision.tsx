export default function VisionMision() {
    return (
        <>
            {/* SECTION 6: Visión y Misión */}
            <section className="py-4 px-6 bg-tracked-white dark:bg-tracked-black h-[70vh] flex items-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left column - Text content */}
                        <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 space-y-16">
                            {/* Mission section */}
                            <div className="animate-on-scroll">
                                <div className="w-20 h-1 bg-primary mb-6"></div>
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-5 text-primary">
                                    Misión
                                </h3>
                                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed">
                                    Transformar ideas en experiencias visuales memorables, proporcionando soluciones audiovisuales innovadoras que conecten emocionalmente con las audiencias y aporten valor real a nuestros clientes.
                                </p>
                            </div>

                            {/* Vision section - positioned lower */}
                            <div className="pt-8 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                                <div className="w-20 h-1 bg-primary mb-6"></div>
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-5 text-primary">
                                    Visión
                                </h3>
                                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed">
                                    Ser reconocidos como la productora audiovisual líder en innovación y calidad, estableciendo nuevos estándares en la industria y expandiendo nuestra presencia a nivel internacional.
                                </p>
                            </div>
                        </div>

                        {/* Right column - Image with enhanced animation */}
                        <div className="md:w-1/2 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-primary/20">
                                <img
                                    src="/Img/1_12.jpg"
                                    alt="Visión y Misión"
                                    className="rounded-2xl w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/600x800?text=Vision+Mission";
                                    }}
                                />
                                {/* Overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-tracked-black/60 to-transparent"></div>

                                {/* Animated corner element */}
                                <div className="absolute bottom-6 left-6 w-24 h-24 border-2 border-primary rounded-full opacity-60 animate-pulse-glow"></div>
                            </div>

                            {/* Small floating accent element */}
                            <div className="hidden md:block absolute -right-4 top-1/4 w-16 h-16 bg-primary rounded-full bg-opacity-20 blur-xl animate-float"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-primary opacity-10 rounded-full"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border border-primary opacity-10"></div>
            </section>
        </>
    )
}