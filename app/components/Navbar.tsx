"use client";
import { NavBarLinks } from "../../utils/data";
import Link from "next/link";
import Image from "next/image";
import OpenNavButton from "./OpenNavButton";
import CloseNavButton from "./CloseNavButton";
import { useRef } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  //handling toggling navbar menu
  const handleToggle = async (btnType: string) => {
    const openBtn = document.getElementById("open") as HTMLElement;

    if (
      btnType === "close" &&
      navRef.current?.classList.contains("translate-x-full")
    ) {
      return;
    }

    navRef.current?.classList.toggle("translate-x-full");

    if (btnType === "open") {
      openBtn.style.visibility = "hidden";
      return;
    }
    if (btnType === "close") {
      openBtn.style.visibility = "visible";
      return;
    }
  };

  return (
    <header className="fixed z-20 top-0 w-[100%] flex items-center text-lighting p-[2.4rem] uppercase tablet:py-0 tablet:pr-0 tablet:pl-[4rem] tablet:min-h-[9.6rem] laptop:pl-[5.5rem] laptop:fixed   laptop:top-[4rem] laptop:w-[100%]">
      <Link href="/">
        <Image
          className="w-[4rem] tablet:w-[4.8rem]"
          src="/assets/shared/logo.svg"
          alt="logo"
          width="50"
          height="50"
          priority
        />
      </Link>

      <hr className="hidden m-auto border-[rgba(255,255,255,.25)] translate-x-[10%] laptop:block laptop:w-[40%]" />

      <nav
        ref={navRef}
        id="main-nav"
        className="absolute inset-0 z-[50] h-screen  flex items-end flex-col pt-[3.6rem] bg-[rgba(0,0,0,.9)] transition-all duration-650 translate-x-full ease-in-out   tablet:relative tablet:block tablet:h-auto tablet:basis-[60%]  tablet:pt-0 tablet:pl-[2rem] tablet:ml-auto  tablet:self-stretch tablet:backdrop-blur-[2px] tablet:bg-[rgba(255,255,255,.04)] tablet:translate-x-[0]"
        aria-label="primary-navigation"
      >
        <CloseNavButton handleToggle={handleToggle} />

        <ul className="w-[67%] pl-[2rem] tablet:w-full tablet:h-full  tablet:pl-0 tablet:flex tablet:justify-around laptop:pl-[2rem] laptop:pr-[3.5rem]">
          {NavBarLinks.map((link) => (
            <li
              key={link[0]}
              className={`mb-[3rem] relative after:w-[80%]  after:absolute after:transition-all  after:border-[0.2rem] after:opacity-[50%] after:ease-in-out  hover:after:visible tablet:mb-0 tablet:flex tablet:items-center after:bottom-[-.25rem] ${
                pathname === link[2] ? "after:visible" : "after:invisible"
              }`}
              onClick={() => handleToggle("close")}
            >
              <Link
                className="w-full block text-[1.6rem] tracking-[2.7px]"
                href={link[2]}
              >
                <span className="tablet:hidden laptop:inline">{link[0]}</span>
                {link[1]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <OpenNavButton handleToggle={handleToggle} />
    </header>
  );
}

export default Navbar;
