"use client";

import AboutMe from "@/components/sections/about-me-section";
import AnimatedText from "@/components/sections/animated-text";
import HeroSection from "@/components/sections/hero-section";
import Projects from "@/components/sections/projects-section";
import TechStack from "@/components/sections/tech-stack-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-40 lg:gap-64 w-full">
      <HeroSection />
      <AnimatedText />

      <span id="about"></span>
      <AboutMe  />

      <span id="stack"></span>
      <TechStack />

      <span id="projects"></span>
        <Projects />
    </main>
  );
}
