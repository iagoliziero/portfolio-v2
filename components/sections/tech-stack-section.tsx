"use client";
import { useState } from "react";
import { Text } from "../ui/base-text";
import { stackProps } from "@/types/types";
import { stack } from "@/constants/landing";
import TitleSection from "./title-section";
import { FadeSection } from "../layout/fade-section";

export default function TechStack() {
  const [stackItems] = useState<stackProps[]>(stack);

  return (
    <FadeSection>
      <section className="bg-background-secondary py-32 w-full">
        <div className="mx-auto max-w-5xl flex flex-col gap-10 lg:gap-12 px-6 w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          <TitleSection subtitle="Tecnologias que uso."> Stack </TitleSection>

          <div className="flex flex-col gap-7">
            {stackItems.map((item) => (
              <div key={item.id}>
                <div className="mb-2">
                  <Text
                    colors="primary"
                    size="sm"
                    className="font-semibold capitalize"
                  >
                    {item.stackType}
                  </Text>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stackItems.map((stackItem, index) => (
                    <Text
                      key={index}
                      colors="foreground"
                      size="md"
                      className="leading-relaxed lg:text-lg"
                    >
                      {stackItem}
                      {index < item.stackItems.length - 1 ? "," : ""}
                    </Text>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span> <Text colors="mutedForeground" size="md" className="leading-relaxed italic"> Isso é o que eu realmente uso no dia a dia. </Text> </span>
        </div>
      </section>
    </FadeSection>
  );
}
