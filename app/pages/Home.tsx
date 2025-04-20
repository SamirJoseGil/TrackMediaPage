
{/* SECTION 1: Hero / Home */ }
export default function Home() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Img/1_20-b.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-tracked-black/20 dark:bg-tracked-black/50"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-3xl">
                        {/* Logo with enhanced animation */}
                        <div className="mb-8 transform transition-all duration-1000 animate-bounce-in">
                            <img
                                src="/Img/LogoBlanco.png"
                                alt="TrackedMedia"
                                className="h-24 md:h-32 mx-auto animate-logo-entrance"
                                style={{
                                    animation: "logoEntrance 1.5s ease-out forwards"
                                }}
                            />
                        </div>

                        {/* Buttons in center */}
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105">
                                Ver Nuestro Trabajo
                            </button>
                            <button className="w-full sm:w-auto px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all transform hover:scale-105">
                                Contacto
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtitle positioned at bottom left */}
            <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-10 max-w-md text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-lg md:text-2xl text-white">
                    Producción audiovisual y streaming profesional para eventos en vivo
                </p>
            </div>
        </section>
    )
}