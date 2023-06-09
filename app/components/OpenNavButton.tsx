"use client";
import Image from "next/image";

type Props = { handleToggle: (v: string) => void };

function OpenNavButton({ handleToggle }: Props) {
  return (
    <button
      id="open"
      className="ml-auto transition-all duration-400 ease-in-out tablet:hidden"
      onClick={async () => await handleToggle("open")}
    >
      <Image
        src="/assets/shared/icon-hamburger.svg"
        alt="open nav"
        width="25"
        height="25"
        priority
      />
    </button>
  );
}

export default OpenNavButton;
