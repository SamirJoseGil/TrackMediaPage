
{/* SECTION 8: Un evento, mil historias */ }
export default function EventoMilHistotias() {
    return (
        < section className="py-20 px-6 bg-tracked-white dark:bg-tracked-black" >
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                    Un evento, mil historias
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mb-12 animate-on-scroll">
                    Nos especializamos en transformar ideas en contenido visual de impacto, combinando creatividad, innovación y un profundo entendimiento de las necesidades de nuestros clientes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="animate-on-scroll">
                        <img
                            src="https://placehold.co/400x600?text=Story+1"
                            alt="Story 1"
                            className="rounded-xl shadow-lg w-full h-full object-cover"
                        />
                    </div>

                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="animate-on-scroll">
                            <h3 className="text-xl font-bold mb-2 text-primary">Capturando momentos</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Cada evento es único y merece ser documentado con un enfoque personalizado que resalte su esencia e impacto.
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-3 relative animate-on-scroll">
                        <h3 className="text-xl font-bold mb-4 text-primary">La magia detrás de las cámaras</h3>
                        <img
                            src="https://placehold.co/800x400?text=Behind+the+Scenes"
                            alt="Behind the Scenes"
                            className="rounded-xl shadow-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}