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
                                    className="w-full h-full object-cover object-top grayscale transition-all duration-300"
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

                {/* Extended team members */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                                    className="w-full h-full object-cover object-top grayscale transition-all duration-300"
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
        </section>
    )
}