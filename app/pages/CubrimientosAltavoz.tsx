export default function CubrimientosAltavoz() {
    return (
        <>
            {/* SECTION 7: Cubrimientos - Altavoz Fest 2024 */}
            <section className="py-24 px-6 bg-gray-50 dark:bg-dark-light relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-6 transform -translate-y-32"></div>
                <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>

                <div className="container mx-auto relative z-10">
                    {/* Section header with enhanced styling */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary animate-on-scroll uppercase">
                            Cubrimientos Altavoz Fest 2024
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-on-scroll"></div>
                        <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 animate-on-scroll">
                            Revive los mejores momentos del festival con nuestras capturas audiovisuales exclusivas
                        </p>
                    </div>

                    {/* Video grid with manual videos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Video 1: Escenario Principal */}
                        <div className="animate-on-scroll group">
                            <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg mb-4 relative transform hover:scale-[1.02] transition-all duration-500">
                                <video
                                    className="w-full h-full object-cover"
                                    poster="/Img/altavoz_poster_1.jpg"
                                    controls
                                    muted
                                    loop
                                    preload="none"
                                >
                                    <source src="/Media/video_escenario.mp4" type="video/mp4" />
                                    Tu navegador no soporta videos HTML5.
                                </video>

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-tracked-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Video duration badge */}
                                <div className="absolute bottom-3 right-3 bg-tracked-black/70 text-white text-xs px-2 py-1 rounded-md">
                                    0:05
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">Escenario Principal</h3>
                            <p className="text-gray-600 dark:text-gray-400">Highlights de las bandas principales</p>
                        </div>

                        {/* Video 2: Momentos Backstage */}
                        <div className="animate-on-scroll group" style={{ animationDelay: '0.2s' }}>
                            <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg mb-4 relative transform hover:scale-[1.02] transition-all duration-500">
                                <video
                                    className="w-full h-full object-cover"
                                    poster="/Img/altavoz_poster_2.jpg"
                                    controls
                                    muted
                                    loop
                                    preload="none"
                                >
                                    <source src="/Media/video_backstage.mp4" type="video/mp4" />
                                    Tu navegador no soporta videos HTML5.
                                </video>

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-tracked-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Video duration badge */}
                                <div className="absolute bottom-3 right-3 bg-tracked-black/70 text-white text-xs px-2 py-1 rounded-md">
                                    0:05
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">Momentos Backstage</h3>
                            <p className="text-gray-600 dark:text-gray-400">Un vistazo tras bambalinas</p>
                        </div>

                        {/* Video 3: Experiencia de Fans */}
                        <div className="animate-on-scroll group" style={{ animationDelay: '0.4s' }}>
                            <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg mb-4 relative transform hover:scale-[1.02] transition-all duration-500">
                                <video
                                    className="w-full h-full object-cover"
                                    poster="/Img/altavoz_poster_3.jpg"
                                    controls
                                    muted
                                    loop
                                    preload="none"
                                >
                                    <source src="/Media/video_fans.mp4" type="video/mp4" />
                                    Tu navegador no soporta videos HTML5.
                                </video>

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-tracked-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Video duration badge */}
                                <div className="absolute bottom-3 right-3 bg-tracked-black/70 text-white text-xs px-2 py-1 rounded-md">
                                    0:05
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">Experiencia de Fans</h3>
                            <p className="text-gray-600 dark:text-gray-400">La energía del público en el festival</p>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="mt-16 text-center animate-on-scroll">
                        <a href="#contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105">
                            Ver galería completa
                        </a>
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className="hidden md:block absolute bottom-10 right-10 w-24 h-1 bg-primary/20"></div>
                <div className="hidden md:block absolute bottom-10 right-10 h-24 w-1 bg-primary/20"></div>
            </section>
        </>
    )
}