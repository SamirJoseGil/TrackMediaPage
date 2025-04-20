
{/* SECTION 3: La vida en el Backstage */ }
export default function VidaEnBackstage() {
    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
            <div className="container mx-auto">
                {/* Mobile layout - shown only on small screens */}
                <div className="md:hidden mb-10">
                    <h2 className="text-3xl font-bold mb-6 animate-on-scroll text-primary">
                        La vida en el backstage
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 animate-on-scroll">
                        Contamos con un equipo especializado en producción, dirección artística y estrategia creativa, enfocado en ofrecer resultados medibles y personalizados para cada cliente. En Tracked Media, no dejamos nada al azar; cada acción está diseñada para maximizar el impacto y garantizar el éxito.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="animate-on-scroll">
                            <img
                                src="/Img/backstage-small.webp"
                                alt="Backstage Detail"
                                className="rounded-xl shadow-lg w-full h-full object-cover"
                            />
                        </div>
                        <div className="animate-on-scroll">
                            <img
                                src="/Img/backstage-large.webp"
                                alt="Backstage Team"
                                className="rounded-xl shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop layout - 5 column grid */}
                <div className="hidden md:grid grid-cols-5 gap-6 items-center">
                    {/* Column 1-2: Title and text */}
                    <div className="col-span-2 pr-6">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                            La vida en el backstage
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 animate-on-scroll">
                            Contamos con un equipo especializado en producción, dirección artística y estrategia creativa, enfocado en ofrecer resultados medibles y personalizados para cada cliente. En Tracked Media, no dejamos nada al azar; cada acción está diseñada para maximizar el impacto y garantizar el éxito.
                        </p>
                    </div>

                    {/* Column 3: Smaller image */}
                    <div className="col-span-1 animate-on-scroll">
                        <div className="h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/Img/backstage-small.webp"
                                alt="Backstage Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Column 4-5: Larger image */}
                    <div className="col-span-2 animate-on-scroll">
                        <div className="h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/Img/backstage-large.webp"
                                alt="Backstage Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="hidden md:block absolute bottom-12 left-12 w-24 h-24 border-2 border-primary opacity-20 rounded-full"></div>
            </div>
        </section>
    )
}