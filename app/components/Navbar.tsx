import { useEffect, useState } from "react";

export default function Navbar() {
    // State for dark mode
    const [darkMode, setDarkMode] = useState(true);
    // State for mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu when clicking a link
    const handleNavLinkClick = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        // Check user preference
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDarkMode);

        // Apply dark mode to html element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-tracked-white bg-opacity-80 dark:bg-tracked-black dark:bg-opacity-80 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            {/* Fixed logos - swapped for proper dark/light mode */}
                            <img
                                src="/Img/LogoNegro.png"
                                alt="Tracked Media"
                                className="h-16 dark:hidden"
                            />
                            <img
                                src="/Img/LogoBlanco.png"
                                alt="Tracked Media"
                                className="h-16 hidden dark:block"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="font-medium hover:text-primary transition-colors">Somos Tracked</a>
                        <a href="#services" className="font-medium hover:text-primary transition-colors">Servicios</a>
                        <a href="#team" className="font-medium hover:text-primary transition-colors">Equipo</a>
                        <a href="#contact" className="font-medium hover:text-primary transition-colors">Contacto</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                            )}
                        </button>

                        {/* Contact Button - Hide on mobile */}
                        <a
                            href="#contact"
                            className="hidden md:block px-6 py-2 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
                        >
                            Contáctanos
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-tracked-black p-4 shadow-lg">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" onClick={handleNavLinkClick} className="py-2 hover:text-primary transition-colors">Somos Tracked</a>
                            <a href="#services" onClick={handleNavLinkClick} className="py-2 hover:text-primary transition-colors">Servicios</a>
                            <a href="#team" onClick={handleNavLinkClick} className="py-2 hover:text-primary transition-colors">Equipo</a>
                            <a href="#contact" onClick={handleNavLinkClick} className="py-2 hover:text-primary transition-colors">Contacto</a>

                            <a
                                href="#contact"
                                onClick={handleNavLinkClick}
                                className="w-full text-center px-6 py-2 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all"
                            >
                                Contáctanos
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Overlay for mobile menu - closes menu when clicking outside */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-25"
                    onClick={toggleMobileMenu}
                    aria-hidden="true"
                ></div>
            )}
        </>
    );
}