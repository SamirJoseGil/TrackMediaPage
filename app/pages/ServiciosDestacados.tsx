// Data for the services section with enhanced descriptions
const services = [
    {
        icon: "📹",
        title: "Registro de video",
        description: "Capturamos cada momento con la más alta calidad y precisión técnica"
    },
    {
        icon: "📸",
        title: "Fotografía",
        description: "Imágenes que cuentan historias y capturan la esencia de tu evento"
    },
    {
        icon: "📺",
        title: "Live streaming",
        description: "Transmisiones en vivo con múltiples cámaras y alta definición"
    },
    {
        icon: "🎬",
        title: "Videoclips",
        description: "Producción profesional para artistas y eventos musicales"
    },
    {
        icon: "🎛️",
        title: "Producción técnica",
        description: "Soluciones integrales para eventos de cualquier escala"
    },
    {
        icon: "🚁",
        title: "Dron - FPV",
        description: "Perspectivas únicas con tecnología de vanguardia"
    }
];

export default function ServiciosDestacados() {
    return (
        <>
            {/* SECTION 5: Servicios destacados con fondo mejorado */}
            <section className="py-8 px-6 bg-service-bg bg-cover bg-fixed bg-center bg-no-repeat relative overflow-hidden">
                {/* Gradient overlay with improved opacity */}
                <div className="absolute inset-0 bg-gradient-to-b from-tracked-black/70 to-tracked-black/90"></div>

                {/* Animated decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.2s', animationDuration: '6s' }}></div>

                <div className="container mx-auto relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-tracked-white animate-on-scroll uppercase">
                            Servicios <span className="text-primary">Destacados</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-on-scroll"></div>
                        <p className="max-w-2xl mx-auto text-xl text-gray-300 animate-on-scroll">
                            Contamos con el equipo y la experiencia para hacer realidad cualquier proyecto audiovisual que imagines
                        </p>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl backdrop-blur-sm bg-tracked-white/10 hover:bg-tracked-white/15 border border-primary/5 hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-on-scroll group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-primary text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-tracked-white group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>

                                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA button */}
                    <div className="text-center mt-16 animate-on-scroll">
                        <a href="#contact" className="inline-block px-8 py-3 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                            Solicita tu cotización
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}