

{/* SECTION 11: ¿Listos para ir más allá de lo que has visto? */ }
export default function ListosParaIrMasAlla() {
    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-3">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                            ¿Listos para ir más allá de lo que has visto?
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 animate-on-scroll">
                            Nuestro enfoque táctico, experiencia y compromiso con la calidad nos convierten en el aliado estratégico que necesitas. Entendemos la importancia de trabajar con un equipo en el que puedas confiar plenamente, y estamos aquí para garantizar que cada detalle de tu evento esté en manos expertas. Contáctanos hoy mismo y descubre cómo podemos convertir tus ideas en experiencias inolvidables.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="animate-on-scroll">
                                <h3 className="text-xl font-bold mb-3 text-primary">Creatividad sin límites</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Nuestro equipo de creativos está listo para llevar tus ideas al siguiente nivel, con un enfoque innovador y personalizado.
                                </p>
                            </div>

                            <div className="animate-on-scroll">
                                <h3 className="text-xl font-bold mb-3 text-primary">Tecnología de punta</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Utilizamos equipos de última generación para garantizar la más alta calidad en cada uno de nuestros proyectos.
                                </p>
                            </div>

                            <div className="animate-on-scroll">
                                <h3 className="text-xl font-bold mb-3 text-primary">Resultados garantizados</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Nuestro compromiso es proporcionar resultados que superen tus expectativas y generen un impacto real.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="animate-on-scroll">
                        <img
                            src="Img/_DSC5526.webp"
                            alt="Beyond"
                            className="rounded-xl shadow-lg w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}