import React from "react";
import { Link } from "react-router-dom";
import { CONTAINER, MAIN } from "../utils/tailwindClasses";

export default function Main() {
  return (
    <div
      className={
        CONTAINER.container.join(" ") +
        "bg-home-mobile tablet:bg-home-tablet laptop:bg-home-desktop"
      }
    >
      <main className={MAIN.mainClasses.join(" ")}>
        <section className={MAIN.mainSecClasses.join(" ")}>
          <header className={MAIN.secHeader.join(" ")}>
            <h5 className={MAIN.heading5.join(" ")}>
              So, you want to travel to
            </h5>

            <h1 className={MAIN.heading1.join(" ")}>Space</h1>

            <p className={MAIN.paragraph.join(" ")}>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </header>

          <button id="landing-main-btn" className={MAIN.btn.join(" ")}>
            <Link
              className={MAIN.btnLink.join(" ")}
              to="/space-tourism/destination"
            >
              Explore
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}
