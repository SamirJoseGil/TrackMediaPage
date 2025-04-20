
{/* SECTION 2: Somos Tracked */ }
export default function SomosTracket() {
    return (
        <section id="about" className="relative py-28 px-6 min-h-[80vh] flex items-center bg-tracked-white dark:bg-tracked-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Img/DSC4597.webp"
                    alt="Background"
                    className="w-2/4 h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="relative">
                            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full blur-xl absolute -left-10 -top-10"></div>
                            <h2 className="text-3xl md:text-6xl font-bold mb-8 animate-on-scroll text-primary relative uppercase">
                                Somos Tracked
                            </h2>
                            <div className="w-32 h-2 bg-primary rounded-full animate-on-scroll" style={{ animationDelay: '0.3s' }}></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                        <div className="animate-on-scroll">
                            <p className="text-3xl text-gray-700 dark:text-gray-300 mb-6 font-bold">
                                Operamos bajo un enfoque estratégico y meticuloso que garantiza resultados excepcionales. Somos una productora audiovisual y agencia creativa dedicada a transformar ideas en soluciones visuales impactantes.
                            </p>
                            <p className="text-3xl text-gray-700 dark:text-gray-300 mb-6 font-bold">
                                Nuestra metodología está basada en protocolos claros y etapas definidas: análisis de objetivos, desarrollo creativo, ejecución precisa y entrega optimizada. Este enfoque nos permite abordar cada proyecto con eficiencia, asegurando que cada detalle cumpla con los más altos estándares de calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}