{/* SECTION 3: La vida en el Backstage */ }
export default function VidaEnBackstage() {
    return (
        <section className="py-24 px-6 bg-gray-50 dark:bg-dark-light min-h-[80vh] flex items-center relative overflow-hidden">
            {/* Background design element with enhanced animations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary rounded-bl-full transform rotate-0 animate-float" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary rounded-tr-full transform rotate-0 animate-float" style={{ animationDuration: '10s', animationDelay: '0.5s' }}></div>
            </div>

            {/* Additional animated decorative elements */}
            <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="container mx-auto relative z-10">
                {/* Mobile layout - shown only on small screens */}
                <div className="md:hidden mb-10">
                    <h2 className="text-3xl font-extrabold mb-6 text-primary animate-on-scroll uppercase">
                        La vida en el backstage
                    </h2>
                    <p className="text-xl text-white dark:text-black mb-6 animate-on-scroll font-bold">
                        Contamos con un equipo especializado en producción, dirección artística y estrategia creativa, enfocado en ofrecer resultados medibles y personalizados para cada cliente. En Tracked Media, no dejamos nada al azar; cada acción está diseñada para maximizar el impacto y garantizar el éxito.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="animate-on-scroll">
                            <img
                                src="/Img/1_12.jpg"
                                alt="Backstage Detail"
                                className="rounded-xl shadow-lg w-full h-60 object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x300?text=Backstage+Detail";
                                }}
                            />
                        </div>
                        <div className="animate-on-scroll">
                            <img
                                src="/Img/1_23.jpg"
                                alt="Backstage Team"
                                className="rounded-xl shadow-lg w-full h-60 object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x300?text=Backstage+Team";
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop layout - 5 column grid with staggered images */}
                <div className="hidden md:block relative h-[550px]">
                    <div className="grid grid-cols-5 gap-6 h-full">
                        {/* Column 1-2: Title and text */}
                        <div className="col-span-2 pr-6 self-center">
                            <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 text-primary animate-on-scroll uppercase">
                                La vida en el backstage
                            </h2>
                            <div className="w-24 h-1 bg-primary mb-6 animate-on-scroll"></div>
                            <p className="text-xl text-black dark:text-white mb-6 animate-on-scroll font-bold">
                                Contamos con un equipo especializado en producción, dirección artística y estrategia creativa, enfocado en ofrecer resultados medibles y personalizados para cada cliente. En Tracked Media, no dejamos nada al azar; cada acción está diseñada para maximizar el impacto y garantizar el éxito.
                            </p>
                        </div>

                        {/* Columns 3-5: Images with staggered positioning */}
                        <div className="col-span-3 relative h-full">
                            {/* Smaller image - positioned to start at about half the height of the larger image */}
                            <div className="absolute left-0 bottom-0 w-1/3 h-[380px] z-10 animate-on-scroll">
                                <div className="rounded-xl overflow-hidden shadow-lg h-full transform hover:scale-105 transition-transform duration-700">
                                    <img
                                        src="/Img/1_12.jpg"
                                        alt="Backstage Detail"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/400x600?text=Backstage+Detail";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Larger image - positioned to extend upward in the y-axis */}
                            <div className="absolute right-0 bottom-0 w-2/3 h-[480px] animate-on-scroll">
                                <div className="rounded-xl overflow-hidden shadow-lg h-full ml-6 transform hover:scale-105 transition-transform duration-700">
                                    <img
                                        src="/Img/1_23.jpg"
                                        alt="Backstage Team"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/800x600?text=Backstage+Team";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="hidden md:block absolute -bottom-10 left-12 w-24 h-24 border-2 border-primary opacity-20 rounded-full animate-glow-pulse"></div>
                <div className="hidden md:block absolute top-10 right-10 w-12 h-12 bg-primary opacity-10 rounded-full animate-float" style={{ animationDuration: '4s' }}></div>
            </div>
        </section>
    )
}