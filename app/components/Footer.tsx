export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-16 pb-10 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-tracked-black dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo y descripción */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            {/* Logo que cambia según el modo claro/oscuro */}
                            <div className="w-40 mr-3">
                                <img
                                    src="/Img/LogoNegro.png"
                                    alt="Tracked Media"
                                    className="w-full dark:hidden"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/200x60?text=Tracked+Media";
                                    }}
                                />
                                <img
                                    src="/Img/LogoBlanco.png"
                                    alt="Tracked Media"
                                    className="w-full hidden dark:block"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/200x60?text=Tracked+Media";
                                    }}
                                />
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs">
                            Transformamos tus ideas en experiencias audiovisuales memorables con calidad profesional.
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://www.instagram.com/tracked.media"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="Instagram"
                            >
                                <div className="bg-gray-200 dark:bg-gray-800 p-2.5 rounded-full group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-yellow-500 transition-all duration-300">
                                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://wa.me/573005786122?text=Hola%20Tracked%20Media%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label="WhatsApp"
                            >
                                <div className="bg-gray-200 dark:bg-gray-800 p-2.5 rounded-full group-hover:bg-green-500 transition-all duration-300">
                                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M21.105 4.696c-2.088-2.11-4.863-3.274-7.834-3.274-6.114 0-11.087 4.973-11.087 11.087 0 1.971.52 3.89 1.507 5.578l-1.591 5.81 5.95-1.56c1.688.987 3.607 1.507 5.578 1.507h.005c6.114 0 11.087-4.973 11.087-11.087 0-2.97-1.164-5.746-3.274-7.834l-.341-.227zm-7.834 17.08h-.004c-1.653 0-3.274-.443-4.683-1.278l-.335-.199-3.483.914.929-3.4-.218-.347c-.914-1.457-1.397-3.14-1.397-4.86 0-5.057 4.115-9.173 9.178-9.173 2.451 0 4.756.956 6.487 2.687 1.731 1.731 2.682 4.035 2.681 6.486-.001 5.056-4.115 9.17-9.175 9.17zm5.034-6.873c-.277-.139-1.638-.809-1.892-.9-.254-.092-.439-.139-.623.139-.184.277-.716.9-.878 1.085-.161.185-.323.208-.6.07-1.613-.807-2.671-1.44-3.732-3.26-.282-.485.282-.45.807-1.5.089-.161.045-.3-.024-.416-.07-.115-.623-1.5-.854-2.054-.223-.535-.453-.463-.623-.473-.16-.01-.346-.012-.531-.012-.185 0-.485.07-.739.346-.253.277-.97.948-.97 2.31 0 1.363.997 2.68 1.135 2.865.139.185 1.973 3.02 4.78 4.239 1.78.769 2.475.833 3.361.7.542-.081 1.638-.67 1.869-1.316.23-.647.23-1.201.161-1.316-.07-.115-.254-.185-.531-.323z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="mailto:contacto.tracked@gmail.com"
                                className="group"
                                aria-label="Email"
                            >
                                <div className="bg-gray-200 dark:bg-gray-800 p-2.5 rounded-full group-hover:bg-primary transition-all duration-300">
                                    <svg className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Enlaces útiles */}
                    <div>
                        <h3 className="font-bold text-lg mb-5 relative inline-block">
                            Servicios
                            <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Registro de video
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Fotografía
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Live streaming
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Producción técnica
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Enlaces de empresa */}
                    <div>
                        <h3 className="font-bold text-lg mb-5 relative inline-block">
                            Empresa
                            <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></div>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Sobre nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Equipo
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Portafolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 inline-flex items-center">
                                    <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="font-bold text-lg mb-5 relative inline-block">
                            Contacto
                            <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></div>
                        </h3>
                        <div className="space-y-4">
                            <a href="https://wa.me/573005786122" className="flex items-center group">
                                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-full shadow-sm mr-3">
                                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">+57 300 578 6122</span>
                            </a>
                            <a href="mailto:contacto.tracked@gmail.com" className="flex items-center group">
                                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-full shadow-sm mr-3">
                                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">contacto.tracked@gmail.com</span>
                            </a>
                            <a href="https://maps.google.com/?q=Medellin,Colombia" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-full shadow-sm mr-3">
                                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">Medellín, Colombia</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea separadora con efecto gradiente */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                {/* Copyright y política de privacidad */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>© {currentYear} Tracked Media. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors duration-200">Términos de servicio</a>
                        <a href="#" className="hover:text-primary transition-colors duration-200">Política de privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}