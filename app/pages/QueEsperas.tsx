
{/* SECTION 13: ¿Qué esperas para contactarnos? */ }
export default function QueEsperas() {
    return (
        <section id="contact" className="py-20 px-6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(https://placehold.co/1920x1080?text=Contact+Background)' }}>
            <div className="absolute inset-0 bg-tracked-black/70 dark:bg-tracked-black/80"></div>
            <div className="container mx-auto relative z-10">
                <div className="max-w-xl mx-auto bg-white dark:bg-dark-light p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                        ¿Qué esperas para contactarnos?
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="text-primary text-xl mr-4">📞</div>
                            <div>
                                <p className="font-medium">Teléfono</p>
                                <p className="text-gray-600 dark:text-gray-400">+57 300 123 4567</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-primary text-xl mr-4">✉️</div>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-600 dark:text-gray-400">info@trackedmedia.com</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-primary text-xl mr-4">📍</div>
                            <div>
                                <p className="font-medium">Ubicación</p>
                                <p className="text-gray-600 dark:text-gray-400">Medellín, Colombia</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-primary text-xl mr-4">🌐</div>
                            <div>
                                <p className="font-medium">Instagram</p>
                                <p className="text-gray-600 dark:text-gray-400">@trackedmedia</p>
                            </div>
                        </div>

                        <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105">
                            Enviar mensaje
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}