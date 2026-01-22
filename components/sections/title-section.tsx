import React from "react";
import { Text } from "../ui/base-text";

type titleSectionProps = {
 children: React.ReactNode;
  subtitle: string;
};

export default function TitleSection({children, subtitle}: titleSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text
        colors="mutedForeground"
        className="leading-relaxed font-serif text-lg lg:text-xl"
      >
        {children}
      </Text>
      <Text
        colors="foreground"
        className="leading-relaxed font-serif text-2xl lg:text-4xl"
      >
        {subtitle}
      </Text>
    </div>
  );
}
