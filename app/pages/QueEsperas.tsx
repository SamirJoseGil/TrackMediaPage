{/* SECTION 13: ¿Qué esperas para contactarnos? */ }
export default function QueEsperas() {
    // Función para copiar al portapapeles
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Correo copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-100 via-gray-100/95 to-primary/5 dark:from-tracked-black dark:via-tracked-black/95 dark:to-primary/30 relative overflow-hidden">
            {/* Elementos decorativos - simplificados para que funcionen */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full border-2 border-primary/20 opacity-60"></div>
                <div className="absolute top-[70%] left-[80%] w-40 h-40 rounded-full border-2 border-primary/30 opacity-70"></div>
                <div className="absolute top-[40%] left-[90%] w-16 h-16 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full bg-primary/5 blur-2xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                    {/* Sección visual - Actualizada para coincidir con el lado de contacto */}
                    <div className="hidden lg:block lg:w-2/5 bg-white/80 dark:bg-white/10 backdrop-blur-md relative overflow-hidden">
                        <div className="p-12 h-full flex flex-col justify-between relative">
                            <div className="mb-12">
                                <h3 className="text-4xl font-black text-gray-800 dark:text-white mb-4 tracking-tight">TRACKED MEDIA</h3>
                                <div className="h-1 w-20 bg-primary/70 mb-6"></div>
                                <p className="text-gray-700 dark:text-white/90">Transformando ideas en experiencias visuales memorables.</p>
                            </div>

                            {/* Logo que cambia según el modo claro/oscuro */}
                            <div className="relative z-20 flex items-center justify-center">
                                <div className="w-full max-w-xs mx-auto relative">
                                    {/* Logo oscuro para modo claro */}
                                    <img
                                        src="/Img/LogoNegro.png"
                                        alt="Tracked Media Logo"
                                        className="w-3/4 mx-auto hover:scale-105 transition-transform duration-300 dark:hidden"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/300x300?text=Tracked+Media";
                                        }}
                                    />
                                    {/* Logo blanco para modo oscuro */}
                                    <img
                                        src="/Img/LogoBlanco.png"
                                        alt="Tracked Media Logo"
                                        className="w-3/4 mx-auto hover:scale-105 transition-transform duration-300 hidden dark:block"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/300x300?text=Tracked+Media";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección de contacto */}
                    <div className="lg:w-3/5 p-8 sm:p-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
                            <span className="block">¿Qué esperas</span>
                            <span className="block text-primary">para contactarnos?</span>
                        </h2>

                        <div className="space-y-8">
                            {/* WhatsApp - Enlace actualizado */}
                            <a
                                href="https://wa.me/573005786122?text=Hola%20Tracked%20Media%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-100/70 hover:bg-gray-200/70 dark:bg-white/5 dark:hover:bg-white/10 p-4 rounded-xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-white/10"
                            >
                                <div className="bg-primary/20 text-primary p-3 rounded-full mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-white/80">WhatsApp</p>
                                    <p className="text-gray-800 dark:text-white text-lg">+57 300 578 6122</p>
                                </div>
                            </a>

                            {/* Email - CORREGIDO con función para copiar al portapapeles */}
                            <div
                                className="flex items-center bg-gray-100/70 hover:bg-gray-200/70 dark:bg-white/5 dark:hover:bg-white/10 p-4 rounded-xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-white/10 cursor-pointer"
                                onClick={() => copyToClipboard('contacto.tracked@gmail.com')}
                            >
                                <div className="bg-primary/20 text-primary p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-medium text-gray-600 dark:text-white/80">Email</p>
                                    <p className="text-gray-800 dark:text-white text-lg truncate">contacto.tracked@gmail.com</p>
                                </div>
                                <div className="text-gray-500 hover:text-gray-700 dark:text-white/70 dark:hover:text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Ubicación - Actualizada para abrir Google Maps */}
                            <a
                                href="https://maps.google.com/?q=Medellin,Colombia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-100/70 hover:bg-gray-200/70 dark:bg-white/5 dark:hover:bg-white/10 p-4 rounded-xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-white/10"
                            >
                                <div className="bg-primary/20 text-primary p-3 rounded-full mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-white/80">Ubicación</p>
                                    <p className="text-gray-800 dark:text-white text-lg">Medellín, Colombia</p>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/tracked.media"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-100/70 hover:bg-gray-200/70 dark:bg-white/5 dark:hover:bg-white/10 p-4 rounded-xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-white/10"
                            >
                                <div className="bg-primary/20 text-primary p-3 rounded-full mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600 dark:text-white/80">Instagram</p>
                                    <p className="text-gray-800 dark:text-white text-lg hover:text-primary transition-colors">@tracked.media</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}