export default function NuestrosServicios() {
    return (
        <>
            {/* SECTION 4: Nuestros Servicios */}
            <section id="services" className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start mb-12">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                                Nuestros servicios
                            </h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 animate-on-scroll">
                                Somos expertos en ofrecer soluciones completas para el cubrimiento audiovisual de eventos en vivo. Entendemos las demandas técnicas y creativas de cada espectáculo, por lo que trabajamos bajo un enfoque integral que asegura una ejecución impecable en todas las etapas del proyecto.
                            </p>
                        </div>
                    </div>

                    <div className="w-full animate-on-scroll">
                        <img
                            src="https://placehold.co/1200x400?text=Services+Overview"
                            alt="Nuestros Servicios"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}