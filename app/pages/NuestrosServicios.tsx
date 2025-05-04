export default function NuestrosServicios() {
    return (
        <>
            {/* SECTION 4: Nuestros Servicios */}
            <section id="services" className="bg-tracked-white dark:bg-tracked-black">
                {/* Header with green background - improved responsive spacing */}
                <div className="bg-primary py-10 sm:py-12 md:py-16 px-4 sm:px-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold mb-2 animate-on-scroll text-tracked-black">
                                    Nuestros servicios
                                </h2>
                            </div>
                            <div className="w-full md:w-1/2">
                                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-tracked-black animate-on-scroll">
                                    Somos expertos en ofrecer soluciones completas para el cubrimiento audiovisual de eventos en vivo. Entendemos las demandas técnicas y creativas de cada espectáculo, por lo que trabajamos bajo un enfoque integral que asegura una ejecución impecable en todas las etapas del proyecto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-width banner image - improved responsive height */}
                <div className="w-full animate-on-scroll h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative overflow-hidden">
                    <img
                        src="Img/_DSC4662.webp"
                        alt="Nuestros Servicios"
                        className="w-full h-full object-cover shadow-xl"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/1200x600?text=Nuestros+Servicios";
                        }}
                    />
                </div>
            </section>
        </>
    )
}