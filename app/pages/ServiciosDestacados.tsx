

// Data for the services section
const services = [
    {
        icon: "📹",
        title: "Registro de video",
    },
    {
        icon: "📸",
        title: "Fotografía",
    },
    {
        icon: "📺",
        title: "Live streaming",
    },
    {
        icon: "🎬",
        title: "Videoclips",
    },
    {
        icon: "🎛️",
        title: "Producción técnica",
    },
    {
        icon: "🚁",
        title: "Dron - FPV",
    }
];

export default function ServiciosDestacados() {
    return (
        <>
            {/* SECTION 5: Servicios destacados con fondo */}
            <section className="py-20 px-6 bg-service-bg bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-gradient-to-b from-tracked-black/60 to-tracked-black/90"></div>
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl backdrop-blur-sm bg-tracked-white/10 hover:bg-tracked-white/20 transition-all transform hover:-translate-y-2 animate-on-scroll"
                            >
                                <div className="text-primary text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-2 text-tracked-white">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}