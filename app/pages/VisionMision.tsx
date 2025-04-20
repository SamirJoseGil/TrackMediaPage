export default function VisionMision() {
    return (
        <>
            {/* SECTION 6: Visión y Misión */}
            <section className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 pr-0 md:pr-8 mb-10 md:mb-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="animate-on-scroll">
                                    <h3 className="text-2xl font-bold mb-4 text-primary">Misión</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Transformar ideas en experiencias visuales memorables, proporcionando soluciones audiovisuales innovadoras que conecten emocionalmente con las audiencias y aporten valor real a nuestros clientes.
                                    </p>
                                </div>
                                <div className="animate-on-scroll">
                                    <h3 className="text-2xl font-bold mb-4 text-primary">Visión</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Ser reconocidos como la productora audiovisual líder en innovación y calidad, estableciendo nuevos estándares en la industria y expandiendo nuestra presencia a nivel internacional.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 animate-on-scroll">
                            <img
                                src="https://placehold.co/600x800?text=Vision+Mission"
                                alt="Visión y Misión"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}