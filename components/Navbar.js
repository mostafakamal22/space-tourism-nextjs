import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import open from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { HEADER } from "../utils/tailwindClasses";
import { NavBarLinks } from "../utils/data";

export default function Navbar() {
  //use location hook to change bg img
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const navLinks = document.getElementsByClassName("links");
    //remove active classe from all links first
    for (const navLink of navLinks) {
      navLink.classList.remove("after:!opacity-[100%]", "after:!visible");
    }
    //then add the active class to the active navlink only
    switch (path) {
      case "/space-tourism":
      case "/space-tourism/":
        navLinks[0].classList.add("after:!opacity-[100%]", "after:!visible");
        break;
      case "/space-tourism/destination":
      case "/space-tourism/destination/":
        navLinks[1].classList.add("after:!opacity-[100%]", "after:!visible");
        break;
      case "/space-tourism/crew":
      case "/space-tourism/crew/":
        navLinks[2].classList.add("after:!opacity-[100%]", "after:!visible");
        break;
      case "/space-tourism/technology":
      case "/space-tourism/technology/":
        navLinks[3].classList.add("after:!opacity-[100%]", "after:!visible");
        break;
      default:
        break;
    }
  }, [path]);

  //handling toggling navbar menu
  const handleToggle = (btnType) => {
    const openBtn = document.getElementById("open");
    const navbar = document.getElementById("main-nav");

    navbar.classList.toggle("translate-x-full");
    navbar.classList.toggle("hidden");

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
    <header className={HEADER.headerClasses.join(" ")}>
      <Link to="/space-tourism">
        <img
          className={HEADER.brandClasses.join(" ")}
          src={logo}
          alt="brand logo"
        ></img>
      </Link>

      <hr className={HEADER.hrClasses.join(" ")}></hr>

      <nav
        id="main-nav"
        className={HEADER.navClasses.join(" ")}
        aria-label="primary-navigation"
      >
        <button
          id="close"
          className="mr-[2.4rem] mb-[3rem] tablet:hidden"
          onClick={() => handleToggle("close")}
        >
          <img src={close} alt="close nav list"></img>
        </button>

        <ul className={HEADER.navListClasses.join(" ")}>
          {NavBarLinks.map((link) => (
            <li key={link[0]} className={HEADER.navItemClasses.join(" ")}>
              <Link className={HEADER.navLinkClasses.join("")} to={link[2]}>
                <span className={HEADER.navLinkSpan.join(" ")}>{link[0]}</span>
                {link[1]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        id="open"
        className="ml-auto transition-all duration-400 ease-in-out tablet:hidden"
        onClick={() => handleToggle("open")}
      >
        <img src={open} alt="open nav list"></img>
      </button>
    </header>
  );
}
