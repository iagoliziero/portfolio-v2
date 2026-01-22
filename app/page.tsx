"use client";

import { FadeSection } from "@/components/layout/fade-section";
import AboutMe from "@/components/sections/about-me";
import AnimatedText from "@/components/sections/animated-text";
import HeroSection from "@/components/sections/hero-section";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main className="flex flex-col gap-40 lg:gap-64 w-full">
      <HeroSection />
      <AnimatedText />
      <AboutMe />
      <TechStack />
    </main>
  );
}
