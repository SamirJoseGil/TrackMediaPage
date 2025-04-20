
{/* SECTION 9: Innovación + Experiencia + Vocación */ }
export default function InnovacionExperienciavocacion() {
    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="animate-on-scroll">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                            Innovación + Experiencia + Vocación
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Contamos con más de diez años de experiencia en el sector del entretenimiento, trabajando con artistas nacionales e internacionales en eventos como Estéreo Picnic, Altavoz, Día de Rock, Sambe Tock, La Solar, Ritvales, KNXT, y muchos más.
                        </p>
                    </div>

                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="animate-on-scroll">
                            <img
                                src={`https://placehold.co/400x400?text=Highlight+${item}`}
                                alt={`Highlight ${item}`}
                                className="rounded-xl shadow-lg w-full h-80 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}