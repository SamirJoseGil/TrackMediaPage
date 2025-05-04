{/* SECTION 2: Somos Tracked */ }
export default function SomosTracked() { // Fixed function name typo
    return (
        <section id="about" className="relative py-16 md:py-28 px-4 md:px-6 min-h-[90vh] md:min-h-[80vh] flex items-center overflow-hidden bg-tracked-white dark:bg-tracked-black">
            {/* Background Image with Overlay - improved responsiveness */}
            <div className="absolute inset-0 z-0 hidden sm:block">
                <img
                    src="/Img/DSC4597.webp"
                    alt="Background"
                    className="w-full md:w-2/4 h-full object-cover object-center"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x800?text=About+Background";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-tracked-white/10 dark:from-tracked-black/70 via-tracked-white/2  0 dark:via-tracked-black/40 to-tracked-white/10 dark:to-tracked-black/10"></div>
            </div>

            {/* Mobile background - simplified version */}
            <div className="absolute inset-0 z-0 sm:hidden bg-gradient-radial from-primary/5 to-transparent opacity-30"></div>

            {/* Animated bg elements - responsive positioning */}
            <div className="absolute top-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-primary/5 rounded-full blur-3xl animate-float hidden md:block" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-40 md:w-60 h-40 md:h-60 bg-primary/5 rounded-full blur-3xl animate-float hidden md:block" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>

            {/* Content Container with improved spacing */}
            <div className="container mx-auto relative z-10 px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                        <div className="relative">
                            {/* Decorative elements - hidden on small screens */}
                            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full blur-xl absolute -left-10 -top-10 animate-glow-pulse hidden md:block"></div>
                            <div className="w-16 h-16 border-2 border-primary/20 rounded-full absolute -right-8 bottom-0 animate-float hidden md:block" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>

                            {/* Heading with improved responsive styling */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 md:mb-8 text-primary relative uppercase animate-on-scroll">
                                Somos Tracked
                            </h2>
                            <div className="w-24 md:w-32 h-2 bg-primary rounded-full mx-auto md:mx-0 animate-on-scroll"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-16">
                        <div className="space-y-4 md:space-y-6 font-bold">
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 md:mb-6 animate-on-scroll">
                                Operamos bajo un enfoque estratégico y meticuloso que garantiza resultados excepcionales. Somos una productora audiovisual y agencia creativa dedicada a transformar ideas en soluciones visuales impactantes.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 md:mb-6 animate-on-scroll">
                                Nuestra metodología está basada en protocolos claros y etapas definidas: análisis de objetivos, desarrollo creativo, ejecución precisa y entrega optimizada. Este enfoque nos permite abordar cada proyecto con eficiencia, asegurando que cada detalle cumpla con los más altos estándares de calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative corner elements - improved responsiveness */}
            <div className="absolute top-4 md:top-10 left-4 md:left-10 w-12 md:w-20 h-1 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute top-4 md:top-10 left-4 md:left-10 w-1 h-12 md:h-20 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-12 md:w-20 h-1 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-1 h-12 md:h-20 bg-primary/30 animate-on-scroll"></div>
        </section>
    )
}