import React from "react";
import { Text } from "../ui/base-text";

type titleSectionProps = {
  children: React.ReactNode;
  subtitle: string;
};

export default function TitleSection({
  children,
  subtitle,
}: titleSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text
        colors="mutedForeground"
        className="leading-relaxed text-lg font-sans"
      >
        {children}
      </Text>
      <Text
        colors="foreground"
        className="leading-relaxed font-serif text-2xl lg:text-3xl"
      >
        {subtitle}
      </Text>
    </div>
  );
}
