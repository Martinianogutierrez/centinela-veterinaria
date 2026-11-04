"use client";

import Controls from "@/components/chrome/Controls";
import Logo from "@/components/chrome/Logo";
import Nav from "@/components/chrome/Nav";
import Band from "@/components/chrome/Band";
import Footer from "@/components/chrome/Footer";
import Hero from "@/components/sections/Hero";
import Clinica from "@/components/sections/Clinica";
import Especialidades from "@/components/sections/Especialidades";
import Equipo from "@/components/sections/Equipo";
import Contacto from "@/components/sections/Contacto";
import { useTheme } from "@/hooks/useTheme";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";
import { useNavSpy } from "@/hooks/useNavSpy";
import { useCarousel } from "@/hooks/useCarousel";

export default function HomePage() {
  useTheme();
  useReveal();
  useParallax();
  useNavSpy();
  const carousel = useCarousel();

  return (
    <>
      <Controls />
      <Logo />
      <Nav />
      <Hero />
      <Clinica />
      <Especialidades carousel={carousel} />
      <Band />
      <Equipo />
      <Contacto />
      <Footer />
    </>
  );
}
