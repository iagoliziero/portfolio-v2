import { Atom, MouseIcon } from "lucide-react";
import { Text } from "../ui/base-text";
import Image from "next/image";
import { FadeSection } from "../layout/fade-section";
import { FloatingIcon } from "./floating-icon";
import { useEffect, useState } from "react";

export default function HeroSection() {
  return (
    <FadeSection>
      <section className="flex flex-col gap-8 mt-44 lg:mt-52">
        <div className="mx-auto max-w-5xl flex flex-col gap-10 lg:gap-12 px-6 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
          <div className="relative">
            <FloatingIcon>
              <Atom size={55} />
            </FloatingIcon>
          </div>
          <Image
            src="/img-iago.png"
            width={120}
            height={120}
            alt="Imagem Iago Dev"
            data-clickable
            className="rounded-full shadow-lg grayscale active:grayscale-0 lg:hover:grayscale-0 transition-all duration-30"
          />
          <h1 className="text-3xl lg:text-4xl font-serif text-foreground">
            Desenvolvo software com foco em{" "}
            <span className="text-primary"> clareza, performance </span> e{" "}
            <span className="text-primary"> manutenção. </span>{" "}
          </h1>
          <Text colors="mutedForeground" size="md">
            {" "}
            Full Stack Developer baseado em São Paulo, SP. Código como ofício,
            não como vitrine.{" "}
          </Text>

          <ul className="list-none">
            <nav className="flex flex-row gap-6 text-sm md:text-md">
              <li className="font-semibold animate-fade-in-delay-3">
                {" "}
                <a
                  href="https://github.com/iagoliziero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors"
                >
                  {" "}
                  Ver projetos
                </a>
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                {" "}
                <a href="https://www.linkedin.com/in/iagoliziero/" target="_blank" rel="noopener noreferrer">Entrar em contato</a>{" "}
              </li>
            </nav>
          </ul>

          <span className="flex justify-center mt-14">
            {" "}
            <MouseIcon
              size={26}
              className="transform -translate-x-1/2 animate-bounce text-muted-foreground"
            />{" "}
          </span>
        </div>
      </section>
    </FadeSection>
  );
}
