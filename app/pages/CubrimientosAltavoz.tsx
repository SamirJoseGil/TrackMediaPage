export default function CubrimientosAltavoz() {
    // Array de videos para facilitar la renderización y mantenimiento
    const videos = [
        {
            id: 1,
            title: "Escenario Principal",
            description: "Highlights de las bandas principales",
            src: "/Media/video_escenario.mp4",
            fallbackSrc: "https://placehold.co/800x450?text=Escenario+Principal",
            delay: 0
        },
        {
            id: 2,
            title: "Momentos Backstage",
            description: "Un vistazo tras bambalinas",
            src: "/Media/video_backstage.mp4",
            fallbackSrc: "https://placehold.co/800x450?text=Backstage",
            delay: 0.2
        },
        {
            id: 3,
            title: "Experiencia de Fans",
            description: "La energía del público en el festival",
            src: "/Media/video_escenario.mp4",
            fallbackSrc: "https://placehold.co/800x450?text=Fans",
            delay: 0.4
        }
    ];

    // Función para manejar errores de carga de video
    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>, fallback: string) => {
        console.error("Error cargando video:", e);
        const videoElement = e.currentTarget;

        // Crear un elemento de imagen como fallback
        const img = new Image();
        img.src = fallback;
        img.className = "w-full h-full object-cover";
        img.alt = "Video no disponible";

        // Reemplazar el video con la imagen
        const parent = videoElement.parentElement;
        if (parent) {
            videoElement.style.display = 'none';
            parent.appendChild(img);

            // Agregar un mensaje de error
            const errorMsg = document.createElement('div');
            errorMsg.className = "absolute inset-0 flex items-center justify-center bg-tracked-black/50 text-white text-center p-4";
            errorMsg.innerHTML = "<p>Video no disponible</p>";
            parent.appendChild(errorMsg);
        }
    };

    // Nueva función para reproducir el video al hacer clic en el botón personalizado
    const handlePlayButtonClick = (videoId: number) => {
        const videoElement = document.getElementById(`video-${videoId}`) as HTMLVideoElement;
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play().catch(error => {
                    console.error("Error al reproducir el video:", error);
                    // Mostrar un mensaje al usuario si hay un error
                    const parent = videoElement.parentElement;
                    if (parent) {
                        const errorMsg = document.createElement('div');
                        errorMsg.className = "absolute inset-0 flex items-center justify-center bg-tracked-black/50 text-white text-center p-4";
                        errorMsg.innerHTML = "<p>Error al reproducir. Intente nuevamente.</p>";
                        parent.appendChild(errorMsg);
                        // Eliminar el mensaje después de 3 segundos
                        setTimeout(() => errorMsg.remove(), 3000);
                    }
                });
            } else {
                videoElement.pause();
            }
        }
    };

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

                    {/* Video grid with improved error handling and responsiveness */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                        {videos.map((video) => (
                            <div key={video.id} className="animate-on-scroll group" style={{ animationDelay: `${video.delay}s` }}>
                                <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden shadow-lg mb-4 relative transform hover:scale-[1.02] transition-all duration-500">
                                    <video
                                        id={`video-${video.id}`}
                                        className="w-full h-full object-cover cursor-pointer"
                                        controls
                                        preload="metadata" // Importante: cargar solo los metadatos
                                        onClick={(e) => e.currentTarget.play()}
                                        onError={(e) => handleVideoError(e, video.fallbackSrc)}
                                        playsInline
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
                                        Tu navegador no soporta videos HTML5.
                                    </video>

                                    {/* Play button overlay - modificado para no interferir con controles */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-tracked-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                        onClick={() => handlePlayButtonClick(video.id)}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">{video.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{video.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className="hidden md:block absolute bottom-10 right-10 w-24 h-1 bg-primary/20"></div>
                <div className="hidden md:block absolute bottom-10 right-10 h-24 w-1 bg-primary/20"></div>
            </section>
        </>
    )
}