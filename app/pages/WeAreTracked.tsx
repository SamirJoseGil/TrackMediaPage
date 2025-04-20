
{/* SECTION 10: We Are Tracked (Team) */ }
export default function WeAreTracked() {
    return (
        <section id="team" className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-on-scroll text-primary">
                    We Are Tracked
                </h2>

                {/* Core team members */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 shadow-lg animate-on-scroll"
                        >
                            <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={`https://placehold.co/400x400?text=Team+Member+${item}`}
                                    alt={`Team Member ${item}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Nombre Completo</h3>
                            <p className="text-gray-600 dark:text-gray-400">Co-Fundador & Director Creativo</p>
                        </div>
                    ))}
                </div>

                {/* Extended team members */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-dark-light rounded-xl p-4 shadow-md animate-on-scroll"
                        >
                            <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-3 overflow-hidden">
                                <img
                                    src={`https://placehold.co/200x200?text=Team+${index + 4}`}
                                    alt={`Team Member ${index + 4}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-medium">Nombre</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Especialista</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}