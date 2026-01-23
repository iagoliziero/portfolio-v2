import { heroLinks as data } from "@/constants/landing";
import { heroLinksProps as links } from "@/types/types";
import { useState } from "react";
import ButtonMenu from "../ui/base-button-menu";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="flex lg:hidden">
        <ButtonMenu isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <nav
        className={`
        absolute top-28 right-7 z-50
        border border-border p-5 rounded-lg
        bg-background/90
        transition-all duration-300 ease-out
         ${
           isOpen
             ? "opacity-100 translate-y-0 pointer-events-auto"
             : "opacity-0 -translate-y-3 pointer-events-none"
         }
    `}
      >
        <ul className="flex flex-col gap-6 lg:hidden">
          {data.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => {
                  setTimeout(() => {
                    closeMenu();
                  }, 300);
                }}
                className="text-muted-foreground transition-colors active:text-primary duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DropDownMenu;
