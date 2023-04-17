import React, { useEffect, useState } from "react";
import { handleUpdate } from "../../utils/animateImgs";
import { technologies } from "../../utils/data";
import { CONTAINER, TECHNOLOGY } from "../../utils/tailwindClasses";

export default function Technology() {
  //change between portrait/landsacpe image
  const [isPortrait, setIsPortrait] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setIsPortrait(window.innerWidth);
  });

  //state for active crew member
  const [activeTechnology, setActiveTechnology] = useState([
    ...Object.values(technologies[0]),
  ]);

  //update tabs active state
  useEffect(() => {
    const technologiesTabs =
      document.getElementsByClassName("technologies-tabs");
    //remove active classe from all tabs first
    for (const technologyTab of technologiesTabs) {
      technologyTab.classList.remove("!bg-lighting", "!text-darking");
    }
    //then add the active class to the active tab only
    technologiesTabs[activeTechnology[3]].classList.add(
      "!bg-lighting",
      "!text-darking"
    );
  }, [activeTechnology]);

  return (
    <div
      className={
        CONTAINER.container.join(" ") +
        "bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop"
      }
    >
      <main className={TECHNOLOGY.mainClasses.join(" ")}>
        <section className={TECHNOLOGY.mainSecClasses.join(" ")}>
          <header className={TECHNOLOGY.secHeading.join(" ")}>
            <h5 className={TECHNOLOGY.header.join(" ")}>
              <span className="text-lighting/[.25]">03</span> SPACE LAUNCH 101
            </h5>
          </header>

          <figure className={TECHNOLOGY.figure.join(" ")}>
            {/* <img
              className="tech-img transition-all duration-[450ms] ease-in-out"
              src={
                isPortrait >= 992
                  ? activeTechnology[1][1]
                  : activeTechnology[1][0]
              }
              alt="space Technology"
            ></img> */}
          </figure>

          <div className={TECHNOLOGY.infoDev.join(" ")}>
            <ul className={TECHNOLOGY.list.join(" ")}>
              {technologies.map((technology) => (
                <li
                  className={TECHNOLOGY.technologiesTabs.join(" ")}
                  key={technology.indexId}
                  onClick={() =>
                    handleUpdate(
                      technology.indexId,
                      "tech-img",
                      activeTechnology,
                      setActiveTechnology,
                      technologies
                    )
                  }
                >
                  {technology.indexId + 1}
                </li>
              ))}
            </ul>

            <h4 className={TECHNOLOGY.header4.join(" ")}>THE TERMINOLOGY…</h4>

            <h3 className={TECHNOLOGY.header3.join(" ")}>
              {activeTechnology[0]}
            </h3>

            <p className={TECHNOLOGY.paragraph.join(" ")}>
              {activeTechnology[2]}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
