"use client";
import { Target } from "lucide-react";
import { FadeSection } from "../layout/fade-section";
import { Text } from "../ui/base-text";
import { FloatingIcon } from "./floating-icon";
import TitleSection from "./title-section";

export default function AboutMe() {
  return (
    <FadeSection>
      <section className="flex flex-col w-full gap-10 lg:gap-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-10 lg:gap-12 px-6 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
          <div className="relative">
            <FloatingIcon>
              <Target size={55} />
            </FloatingIcon>
          </div>
          <div className="flex flex-col gap-4">
            <TitleSection subtitle="Quem eu sou?"> Sobre </TitleSection>
          </div>
          <div className="flex flex-col gap-7">
            <Text colors="foreground" size="md" className="leading-relaxed">
              Eu sou Iago Liziero, desenvolvedor Full Stack Júnior, em início de
              carreira, e gosto de entender antes de construir. Antes de
              escrever código, penso no problema, no contexto e em quem vai usar
              a solução.
            </Text>
            <Text colors="foreground" size="md" className="leading-relaxed">
              Valorizo software que funciona silenciosamente. Que não precisa de
              explicação. Que respeita quem usa e quem desenvolve depois de mim.
            </Text>
            <Text colors="foreground" size="md" className="leading-relaxed">
              Meu foco está em construir interfaces claras e backends robustos.
              Prefiro simplicidade a complexidade desnecessária. Prefiro
              legibilidade a otimizações prematuras.
            </Text>
            <Text
              colors="mutedForeground"
              size="md"
              className="leading-relaxed italic"
            >
              Hoje, trabalho desenvolvendo aplicações web full stack. Busco
              evoluir em arquitetura de sistemas e design de APIs. Acredito que
              bom código é aquele que desaparece — que faz seu trabalho sem
              chamar atenção.
            </Text>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
