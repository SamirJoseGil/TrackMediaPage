import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Tracked Media - Producción Audiovisual y Streaming Profesional" },
    { name: "description", content: "Somos una productora audiovisual y agencia creativa dedicada a transformar ideas en soluciones visuales impactantes." },
  ];
};

// Observer utility for animations
function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  return observerRef;
}

export default function Index() {
  useIntersectionObserver();
  const [darkMode, setDarkMode] = useState(true);

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

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <main className="font-sans text-tracked-black dark:text-tracked-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-tracked-white bg-opacity-80 dark:bg-tracked-black dark:bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/logo-light.png"
              alt="Tracked Media"
              className="h-8 dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Tracked Media"
              className="h-8 hidden dark:block"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">Somos Tracked</a>
            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#team" className="hover:text-primary transition-colors">Equipo</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
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
            <button className="px-6 py-2 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 1: Hero / Home */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-tracked-white to-gray-100 dark:from-tracked-black dark:to-dark-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in text-primary">
                TrackedMedia
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Producción audiovisual y streaming profesional para eventos en vivo
              </p>
              <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <button className="px-8 py-3 bg-primary text-tracked-white rounded-full hover:bg-primary-dark transition-all transform hover:scale-105">
                  Ver Nuestro Trabajo
                </button>
                <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-105">
                  Contacto
                </button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 bg-primary bg-opacity-20 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
                <img
                  src="https://placehold.co/600x400?text=Tracked+Media"
                  alt="Tracked Media Production"
                  className="relative z-10 rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Somos Tracked */}
      <section id="about" className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                Somos Tracked
              </h2>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Operamos bajo un enfoque estratégico y meticuloso que garantiza resultados excepcionales. Somos una productora audiovisual y agencia creativa dedicada a transformar ideas en soluciones visuales impactantes.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Nuestra metodología está basada en protocolos claros y etapas definidas: análisis de objetivos, desarrollo creativo, ejecución precisa y entrega optimizada. Este enfoque nos permite abordar cada proyecto con eficiencia, asegurando que cada detalle cumpla con los más altos estándares de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: La vida en el Backstage */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
              <img
                src="https://placehold.co/600x400?text=Backstage"
                alt="Life Backstage"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pr-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll text-primary">
                La vida en el backstage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 animate-on-scroll">
                Contamos con un equipo especializado en producción, dirección artística y estrategia creativa, enfocado en ofrecer resultados medibles y personalizados para cada cliente. En Tracked Media, no dejamos nada al azar; cada acción está diseñada para maximizar el impacto y garantizar el éxito.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* SECTION 5: Servicios destacados con fondo */}
      <section className="py-20 px-6 bg-service-bg bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-tracked-black/60 to-tracked-black/90"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm bg-tracked-white/10 hover:bg-tracked-white/20 transition-all transform hover:-translate-y-2 animate-on-scroll"
              >
                <div className="text-primary text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-tracked-white">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* SECTION 7: Cubrimientos - Altavoz Fest 2024 */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-on-scroll text-primary">
            Cubrimientos Altavoz Fest 2024
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="animate-on-scroll">
                <h3 className="text-xl font-bold mb-4 text-center">Performance {item}</h3>
                <div className="aspect-video bg-gray-200 dark:bg-dark-lighter rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    poster={`https://placehold.co/600x400?text=Video+${item}`}
                    controls
                  >
                    <source src="#" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Un evento, mil historias */}
      <section className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
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
      </section>

      {/* SECTION 9: Innovación + Experiencia + Vocación */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                Innovación + Experiencia + Vocación
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Contamos con más de diez años de experiencia en el sector del entretenimiento, trabajando con artistas nacionales e internacionales en eventos como Estéreo Picnic, Altavoz, Día de Rock, Sambe Tock, La Solar, Ritvales, KNXT, y muchos más.
              </p>
            </div>

            {[1, 2, 3].map((item, index) => (
              <div key={index} className="animate-on-scroll">
                <img
                  src={`https://placehold.co/400x400?text=Highlight+${item}`}
                  alt={`Highlight ${item}`}
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: We Are Tracked (Team) */}
      <section id="team" className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center animate-on-scroll text-primary">
            We Are Tracked
          </h2>

          {/* Core team members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 shadow-lg animate-on-scroll"
              >
                <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`https://placehold.co/400x400?text=Team+Member+${item}`}
                    alt={`Team Member ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Nombre Completo</h3>
                <p className="text-gray-600 dark:text-gray-400">Co-Fundador & Director Creativo</p>
              </div>
            ))}
          </div>

          {/* Extended team members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-light rounded-xl p-4 shadow-md animate-on-scroll"
              >
                <div className="aspect-square bg-gray-200 dark:bg-dark-lighter rounded-lg mb-3 overflow-hidden">
                  <img
                    src={`https://placehold.co/200x200?text=Team+${index + 4}`}
                    alt={`Team Member ${index + 4}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Nombre</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Especialista</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: ¿Listos para ir más allá de lo que has visto? */}
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
                src="https://placehold.co/400x600?text=Beyond"
                alt="Beyond"
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Nosotros lo hacemos posible */}
      <section className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-8">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="animate-on-scroll">
                <img
                  src={`https://placehold.co/1200x400?text=Portfolio+${item}`}
                  alt={`Portfolio ${item}`}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            ))}

            <h2 className="text-3xl md:text-5xl font-bold mt-8 text-center animate-on-scroll text-primary">
              Nosotros lo hacemos posible
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 13: ¿Qué esperas para contactarnos? */}
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

      {/* Footer */}
      <footer className="py-10 px-6 bg-tracked-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <img
                src="/logo-dark.png"
                alt="Tracked Media"
                className="h-8 mb-4"
              />
              <p className="max-w-xs text-gray-400">
                Producción audiovisual y streaming profesional para eventos en vivo.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-primary transition-colors">Registro de video</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Fotografía</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Live streaming</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Producción técnica</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Equipo</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Portafolio</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Tracked Media. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Data for the services section
const services = [
  {
    icon: "📹",
    title: "Registro de video",
  },
  {
    icon: "📸",
    title: "Fotografía",
  },
  {
    icon: "📺",
    title: "Live streaming",
  },
  {
    icon: "🎬",
    title: "Videoclips",
  },
  {
    icon: "🎛️",
    title: "Producción técnica",
  },
  {
    icon: "🚁",
    title: "Dron - FPV",
  }
];
