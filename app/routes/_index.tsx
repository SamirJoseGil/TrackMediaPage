import type { MetaFunction } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import Home from "~/pages/Home";
import CubrimientosAltavoz from "~/pages/CubrimientosAltavoz";
import EventoMilHistotias from "~/pages/EventoMilHistotias";
import InnovacionExperienciavocacion from "~/pages/InnovacionExperienciaVocacion";
import ListosParaIrMasAlla from "~/pages/ListosParaIrMasAlla";
import NosotrosLoHacemos from "~/pages/NosotrosLoHacemos";
import NuestrosServicios from "~/pages/NuestrosServicios";
import QueEsperas from "~/pages/QueEsperas";
import ServiciosDestacados from "~/pages/ServiciosDestacados";
import SomosTracket from "~/pages/SomosTracked";
import VidaEnBackstage from "~/pages/VidaEnBackstage";
import VisionMision from "~/pages/VisionMision";
import WeAreTracked from "~/pages/WeAreTracked";

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

  return (
    <main className="font-sans text-tracked-black dark:text-tracked-white">

      {/* SECTION 0: Navbar */}
      <Navbar />

      {/* SECTION 1: Hero / Home */}
      <Home />

      {/* SECTION 2: Somos Tracked */}
      <SomosTracket />

      {/* SECTION 3: La vida en el Backstage */}
      <VidaEnBackstage />

      {/* SECTION 4: Nuestros Servicios */}
      <NuestrosServicios />

      {/* SECTION 5: Servicios destacados con fondo */}
      <ServiciosDestacados />

      {/* SECTION 6: Visión y Misión */}
      <VisionMision />

      {/* SECTION 7: Cubrimientos - Altavoz Fest 2024 */}
      <CubrimientosAltavoz />

      {/* SECTION 8: Un evento, mil historias */}
      <EventoMilHistotias />

      {/* SECTION 9: Innovación + Experiencia + Vocación */}
      <InnovacionExperienciavocacion />

      {/* SECTION 10: We Are Tracked (Team) */}
      <WeAreTracked />

      {/* SECTION 11: ¿Listos para ir más allá de lo que has visto? */}
      <ListosParaIrMasAlla />

      {/* SECTION 12: Nosotros lo hacemos posible */}
      <NosotrosLoHacemos />

      {/* SECTION 13: ¿Qué esperas para contactarnos? */}
      <QueEsperas />

      {/* Footer */}
      <Footer />

    </main>
  );
}