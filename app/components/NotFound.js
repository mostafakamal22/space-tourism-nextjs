import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/shared/not-found.svg";
import { CONTAINER, NOTFOUND } from "../utils/tailwindClasses";

export default function NotFound() {
  return (
    <div
      className={
        CONTAINER.container.join(" ") +
        " bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop"
      }
    >
      <div className={NOTFOUND.div.join(" ")}>
        <figure className={NOTFOUND.figure.join(" ")}>
          <img src={notFoundImg} alt="error 404"></img>
        </figure>

        <section className="max-w-[50rem] pre-laptop:basis-auto">
          <p className={NOTFOUND.heading2.join(" ")}>ERROR 404</p>

          <p className={NOTFOUND.heading3.join(" ")}>Page Not Found !</p>

          <p className={NOTFOUND.text.join(" ")}>
            Go Home Page From
            <Link className={NOTFOUND.link.join(" ")} to="/space-tourism">
              Here
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
