export default function CubrimientosAltavoz() {
    return (
        <>
            {/* SECTION 7: Cubrimientos - Altavoz Fest 2024 */}
            <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-on-scroll text-primary">
                        Cubrimientos Altavoz Fest 2024
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item, index) => (
                            <div key={index} className="animate-on-scroll">
                                <h3 className="text-xl font-bold mb-4 text-center">Performance {item}</h3>
                                <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden">
                                    <video
                                        className="w-full h-full object-cover"
                                        poster={`https://placehold.co/600x400?text=Video+${item}`}
                                        controls
                                    >
                                        <source src="#" type="video/mp4" />
                                        Tu navegador no soporta videos HTML5.
                                    </video>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}