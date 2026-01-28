"use client";

import { heroLinks as data } from "@/constants/landing";
import { heroLinksProps as links } from "@/types/types";
import { useState } from "react";
import { Text } from "../ui/base-text";
import DropDownMenu from "../sections/drop-down-menu";

const Header = () => {
  const [links] = useState<links[]>(data);

  return (
    <header className="w-full fixed top-0 z-50 mb-32 flex items-center justify-center p-6 border-b border-border backdrop-blur-[0.3em]">
      <section className="flex items-center justify-between w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
        <Text size="lg" className="font-bold font-serif">
          dev.
        </Text>
        <nav>
          <ul className="hidden lg:flex lg:gap-6">
            {links?.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <DropDownMenu />
      </section>
    </header>
  );
};

export default Header;
