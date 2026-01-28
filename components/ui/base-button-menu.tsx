import { useState } from "react";

const ButtonMenu = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center relative z-10 rounded-[0.375rem] p-[5px] cursor-pointer border border-[#999]"
    >
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className={`
          w-7 h-7 overflow-visible transition-transform duration-300
          ${isOpen ? "rotate-45" : ""}
          [&_path]:transition-transform [&_path]:duration-300
        `}
      >
        <path
          className={
            isOpen
              ? "[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]"
              : ""
          }
          d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z"
        />
        <path
          className={
            isOpen ? "[transform:rotate(22.5deg)_translate(15.5%,-23%)]" : ""
          }
          d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z"
        />
        <path
          className={
            isOpen ? "[transform:rotate(112.5deg)_translate(-15%,-149.5%)]" : ""
          }
          d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z"
        />
      </svg>
    </button>
  );
};

export default ButtonMenu;
