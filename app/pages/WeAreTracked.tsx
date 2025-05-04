import { useState, useEffect, useRef } from 'react';

{/* SECTION 10: We Are Tracked (Team) */ }

// Lista para miembros principales del equipo
const coreTeam = [
    {
        name: "Jhoan Alzate",
        position: "Director Creativo",
        image: "Img/Team/Jhoan.webp",
        imageAlt: "Jhoan Alzate"
    },
    {
        name: "Daniel Barrera",
        position: "Director General",
        image: "Img/Team/Daniel.webp",
        imageAlt: "Daniel Barrera"
    },
    {
        name: "Nicolas Castro",
        position: "Director Audiovisual",
        image: "/Img/Team/Nicolas.webp",
        imageAlt: "Nicolas Castro"
    }
];

// Lista para el equipo extendido
const extendedTeam = [
    {
        name: "Albert Zuluaga",
        position: "Director Postproducción",
        image: "/Img/Team/Albert.webp",
        imageAlt: "Albert Zuluaga"
    },
    {
        name: "Juan Otalvaro",
        position: "Ingeniero de Sonido",
        image: "/Img/Team/Juan.webp",
        imageAlt: "Juan Otalvaro"
    },
    {
        name: "Lauren Castro",
        position: "Fotógrafa",
        image: "/Img/Team/Lauren.webp",
        imageAlt: "Lauren Castro"
    },
    {
        name: "Alejandro Orozco",
        position: "Fotógrafo",
        image: "/Img/Team/Alejandro.webp",
        imageAlt: "Alejandro Orozco"
    },
    {
        name: "Samuel Garcés",
        position: "Asistente de Dirección",
        image: "/Img/Team/Samuel.webp",
        imageAlt: "Samuel Garcés"
    },
    {
        name: "Angie",
        position: "Asistente de Producción",
        image: "/Img/Team/Angie.webp",
        imageAlt: "Angie"
    },
    {
        name: "Javier Martinez",
        position: "Filmmaker",
        image: "/Img/Team/Javier.webp",
        imageAlt: "Javier Martinez"
    },
    {
        name: "Alejandro Cuartas",
        position: "Piloto de Drones",
        image: "/Img/Team/AlejandroDron.webp",
        imageAlt: "Alejandro Cuartas"
    }
];

export default function WeAreTracked() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const totalSlides = Math.ceil(extendedTeam.length / 2); // Mostraremos 2 por slide

    // Efecto para el carrusel automático (solo en móvil)
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < 768) { // Solo para dispositivos móviles
                setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    // Efecto para ajustar el scroll del carrusel cuando cambia el slide
    useEffect(() => {
        if (carouselRef.current && window.innerWidth < 768) {
            carouselRef.current.scrollTo({
                left: carouselRef.current.offsetWidth * currentSlide,
                behavior: 'smooth'
            });
        }
    }, [currentSlide]);

    return (
        <section id="team" className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-on-scroll text-primary">
                    We Are Tracked
                </h2>

                {/* Core team members */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {coreTeam.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 shadow-lg animate-on-scroll hover:shadow-xl transition-all duration-300"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={member.image || `https://placehold.co/400x400?text=${encodeURIComponent(member.name)}`}
                                    alt={member.imageAlt || member.name}
                                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://placehold.co/400x400?text=${encodeURIComponent(member.name)}`;
                                    }}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase">{member.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{member.position}</p>
                        </div>
                    ))}
                </div>

                {/* Extended team members - Carousel para móvil, Grid para desktop */}
                <div>
                    {/* Título para la sección extendida */}
                    <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Nuestro equipo</h3>

                    {/* Carrusel móvil - Solo visible en dispositivos pequeños */}
                    <div className="md:hidden">
                        <div
                            ref={carouselRef}
                            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {/* Agrupamos a los miembros en pares para los slides */}
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={`slide-${slideIndex}`}
                                    className="w-full flex-shrink-0 flex flex-wrap gap-4 snap-start px-1"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    {/* Mostramos 2 miembros por slide */}
                                    {extendedTeam.slice(slideIndex * 2, slideIndex * 2 + 2).map((member, memberIndex) => (
                                        <div
                                            key={`member-${slideIndex}-${memberIndex}`}
                                            className="w-[calc(50%-0.5rem)] bg-gray-50 dark:bg-dark-light rounded-xl p-4 shadow-md"
                                        >
                                            <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-3 overflow-hidden">
                                                <img
                                                    src={member.image || `https://placehold.co/200x200?text=${encodeURIComponent(member.name)}`}
                                                    alt={member.imageAlt || member.name}
                                                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                                                    onError={(e) => {
                                                        e.currentTarget.src = `https://placehold.co/200x200?text=${encodeURIComponent(member.name)}`;
                                                    }}
                                                />
                                            </div>
                                            <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 uppercase">{member.name}</h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{member.position}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Indicadores de posición */}
                        <div className="flex justify-center space-x-2 mt-5">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={`indicator-${index}`}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index
                                        ? "bg-primary w-5"
                                        : "bg-gray-300 dark:bg-gray-700"
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Ir a slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Grid para desktop - Solo visible en dispositivos medianos y grandes */}
                    <div className="hidden md:grid grid-cols-4 gap-6">
                        {extendedTeam.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-dark-light rounded-xl p-4 shadow-md animate-on-scroll hover:shadow-lg transition-all duration-300"
                                style={{ animationDelay: `${(index * 0.1) + 0.6}s` }}
                            >
                                <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-3 overflow-hidden">
                                    <img
                                        src={member.image || `https://placehold.co/200x200?text=${encodeURIComponent(member.name)}`}
                                        alt={member.imageAlt || member.name}
                                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = `https://placehold.co/200x200?text=${encodeURIComponent(member.name)}`;
                                        }}
                                    />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 uppercase">{member.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}