"use client";

import { Text } from "../ui/base-text";

export function Footer() {
  return (
    <header className="w-full z-50 mt-64 flex items-center justify-center p-6 border-t border-border backdrop-blur-[0.3em]">
      <section className="flex items-center justify-between w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
        <Text size="md" className="text-muted-foreground">
          &copy; 2025 · Desenvolvido com foco em simplicidade e clareza
        </Text>
      </section>
    </header>
  );
}
