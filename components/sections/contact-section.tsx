"use client";
import { Send } from "lucide-react";
import { FadeSection } from "../layout/fade-section";
import { Text } from "../ui/base-text";
import { FloatingIcon } from "./floating-icon";
import TitleSection from "./title-section";

export default function Contact() {
  return (
    <FadeSection>
      <section className="flex flex-col w-full gap-10 lg:gap-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-10 lg:gap-12 px-6 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
        <div className="relative">
          <FloatingIcon>
            <Send size={55} />
          </FloatingIcon>
        </div>
          <div className="flex flex-col gap-4">
            <TitleSection subtitle="Vamos conversar."> Contato </TitleSection>
          </div>
          <div className="flex flex-col gap-7">
            <Text colors="foreground" size="md" className="leading-relaxed">
              Aberto a conversas sobre software, ideias ou projetos
              interessantes.
            </Text>
            <ul className="list-none flex flex-col lg:flex-row gap-4 lg:gap-10">
              <nav className="flex flex-row gap-6 text-sm md:text-md">
                <li className="font-semibold animate-fade-in-delay-3">
                  {" "}
                  <a
                    className="text-sm font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors"
                    href="mailto:contatoiagoliziero@gmail.com"
                  >
                    {" "}
                    contatoiagoliziero@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground hover:text-foreground">
                  {" "}
                  <a href="https://github.com/iagoliziero" target="_blank" rel="noopener noreferrer">Github</a>{" "}
                </li>
                <li className="text-muted-foreground hover:text-foreground">
                  {" "}
                  <a href="https://www.linkedin.com/in/iagoliziero/" target="_blank" rel="noopener noreferrer">Linkedin</a>{" "}
                </li>
              </nav>
            </ul>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
