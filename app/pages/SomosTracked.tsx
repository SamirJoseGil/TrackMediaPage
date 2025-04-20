{/* SECTION 2: Somos Tracked */ }
export default function SomosTracket() {
    return (
        <section id="about" className="relative py-28 px-6 min-h-[80vh] flex items-center overflow-hidden bg-tracked-white dark:bg-tracked-black">
            {/* Background Image with Overlay - fixed path and opacity issue */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Img/DSC4597.webp"
                    alt="Background"
                    className="w-2/4 h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x800?text=About+Background";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-tracked-white/30 dark:from-tracked-black/30 to-tracked-white/10 dark:to-tracked-black/10"></div>
            </div>

            {/* Animated bg elements */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>

            {/* Content Container */}
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="relative">
                            {/* Decorative elements with animations */}
                            <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full blur-xl absolute -left-10 -top-10 animate-glow-pulse"></div>
                            <div className="w-16 h-16 border-2 border-primary/20 rounded-full absolute -right-8 bottom-0 animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>

                            {/* Heading with scroll-based animation */}
                            <h2 className="text-3xl md:text-6xl font-extrabold mb-8 text-primary relative uppercase animate-on-scroll">
                                Somos Tracked
                            </h2>
                            <div className="w-32 h-2 bg-primary rounded-full animate-on-scroll"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                        <div className="space-y-6 font-bold">
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll">
                                Operamos bajo un enfoque estratégico y meticuloso que garantiza resultados excepcionales. Somos una productora audiovisual y agencia creativa dedicada a transformar ideas en soluciones visuales impactantes.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll">
                                Nuestra metodología está basada en protocolos claros y etapas definidas: análisis de objetivos, desarrollo creativo, ejecución precisa y entrega optimizada. Este enfoque nos permite abordar cada proyecto con eficiencia, asegurando que cada detalle cumpla con los más altos estándares de calidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative corner elements with scroll-based animations */}
            <div className="absolute top-10 left-10 w-20 h-1 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute top-10 left-10 w-1 h-20 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute bottom-10 right-10 w-20 h-1 bg-primary/30 animate-on-scroll"></div>
            <div className="absolute bottom-10 right-10 w-1 h-20 bg-primary/30 animate-on-scroll"></div>
        </section>
    )
}