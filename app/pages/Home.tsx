{/* SECTION 1: Hero / Home */ }
export default function Home() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
            {/* Background Image with Overlay and animated elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 animate-glow-pulse"></div>
                <img
                    src="/Img/1_20-b.webp"
                    alt="Background"
                    className="w-full h-full object-cover transform scale-105 animate-zoom-in"
                    style={{ animationDuration: '2.5s' }}
                />
                <div className="absolute inset-0 bg-tracked-black/20 dark:bg-tracked-black/50"></div>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.2s', animationDuration: '6s' }}></div>

            {/* Content Container - Move everything higher up */}
            <div className="container mx-auto relative z-10 -mt-20">
                <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-3xl">
                        {/* Logo with enhanced animation */}
                        <div className="mb-2 transform transition-all duration-1000">
                            <img
                                src="/Img/LogoBlanco.png"
                                alt="TrackedMedia"
                                className="h-24 md:h-32 mx-auto opacity-0"
                                style={{
                                    animation: "logoEntrance 1.5s ease-out forwards"
                                }}
                            />
                        </div>

                        {/* Tagline with staggered animation */}
                        <p className="text-xl md:text-2xl text-white mb-12 opacity-0"
                            style={{ animation: "floatUp 1s ease-out 0.7s forwards" }}>
                            Transformamos momentos en experiencias visuales inolvidables
                        </p>

                        {/* Buttons with enhanced animations - Fixed to ensure they stay visible */}
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-24">
                            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 opacity-0"
                                style={{ animation: "slideInFromLeft 1s ease-out 1.2s forwards" }}>
                                Ver Nuestro Trabajo
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all transform hover:scale-105 opacity-0"
                                style={{ animation: "slideInFromRight 1s ease-out 1.4s forwards" }}>
                                Contacto
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtitle positioned at bottom left with fixed animation */}
            <div className="absolute bottom-24 left-10 md:bottom-32 md:left-16 z-10 max-w-md text-left opacity-0"
                style={{ animation: "floatUp 1s ease-out 1.8s forwards" }}>
                <p className="text-lg md:text-2xl text-white">
                    Producción audiovisual y streaming profesional para eventos en vivo
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0"
                style={{ animation: "fadeIn 1s ease-out 2.5s forwards, bounce 2s infinite 3s" }}>
                <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float" style={{ animationDuration: '1.5s' }}></div>
                </div>
            </div>
        </section>
    )
}