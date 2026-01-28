"use client";
import { projects } from "@/constants/landing";
import { FadeSection } from "../layout/fade-section";
import { Text } from "../ui/base-text";
import TitleSection from "./title-section";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="flex flex-col w-full gap-10 lg:gap-12 mb-64">
      <div className="mx-auto max-w-5xl flex flex-col gap-10 lg:gap-12 px-6 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
        <FadeSection>
          <div className="flex flex-col gap-4">
            <TitleSection subtitle="O que desenvolvi."> Projetos </TitleSection>
          </div>
        </FadeSection>
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <FadeSection key={project.id}>
              <div key={project.id} className="flex flex-col gap-4 bprder-t">
                <div className="flex justify-between items-center">
                  <Text
                    colors="foreground"
                    size="lg"
                    className="font-serif lg:text-xl font-medium"
                  >
                    {project.title}
                  </Text>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Text
                    colors="primary"
                    size="sm"
                    className="font-semibold capitalize"
                  >
                    Contexto
                  </Text>
                  <Text
                    colors="foreground"
                    size="md"
                    className="leading-relaxed"
                  >
                    {project.context}
                  </Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text
                    colors="primary"
                    size="sm"
                    className="font-semibold capitalize"
                  >
                    Problema
                  </Text>
                  <Text
                    colors="foreground"
                    size="md"
                    className="leading-relaxed"
                  >
                    {project.problem}
                  </Text>
                </div>
                <div className="flex flex-col gap-2">
                  <Text
                    colors="primary"
                    size="sm"
                    className="font-semibold capitalize"
                  >
                    Decisão técnica
                  </Text>
                  <Text
                    colors="foreground"
                    size="md"
                    className="leading-relaxed"
                  >
                    {project.solution}
                  </Text>
                </div>

                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.stack.map((tech, techIndex) => (
                    <Text
                      key={techIndex}
                      size="md"
                      className="bg-muted px-2 py-1 rounded-md bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Text>
                  ))}
                </div>

                {index < projects.length - 1 && (
                  <hr className="border-t border-muted-foreground/30 mt-4" />
                )}
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
