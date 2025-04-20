export default function NuestrosServicios() {
    return (
        <>
            {/* SECTION 4: Nuestros Servicios */}
            <section id="services" className="bg-tracked-white dark:bg-tracked-black">
                {/* Header with green background */}
                <div className="bg-primary py-16 px-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-1/2 md:mb-0">
                                <h2 className="text-5xl md:text-6xl uppercase font-extrabold mb-2 animate-on-scroll text-tracked-black">
                                    Nuestros servicios
                                </h2>
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-2xl font-extrabold text-tracked-black animate-on-scroll">
                                    Somos expertos en ofrecer soluciones completas para el cubrimiento audiovisual de eventos en vivo. Entendemos las demandas técnicas y creativas de cada espectáculo, por lo que trabajamos bajo un enfoque integral que asegura una ejecución impecable en todas las etapas del proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-width banner image */}
                <div className="w-full animate-on-scroll h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
                    <img
                        src="Img/_DSC4662.jpg"
                        alt="Nuestros Servicios"
                        className="w-full h-auto object-cover shadow-xl"
                    />
                </div>
            </section>
        </>
    )
}