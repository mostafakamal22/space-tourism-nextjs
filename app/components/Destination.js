import React, { useEffect, useState } from "react";
import { handleUpdate } from "../utils/animateImgs";
import { travels } from "../utils/data";
import { CONTAINER, DESTINATION } from "../utils/tailwindClasses";

export default function Destination() {
  //state for active travel
  const [activeTravel, setActiveTravel] = useState([
    ...Object.values(travels[0]),
  ]);

  //update tabs active state
  useEffect(() => {
    const tabs = document.getElementsByClassName("tabs");
    //remove active classe from all tabs first
    for (const tab of tabs) {
      tab.classList.remove("after:!opacity-[100%]", "after:!visible");
    }
    //then add the active class to the active tab only
    tabs[activeTravel[5]].classList.add(
      "after:!opacity-[100%]",
      "after:!visible"
    );
  }, [activeTravel]);

  return (
    <div
      className={
        CONTAINER.container.join(" ") +
        "bg-destination-mobile tablet:bg-destination-tablet laptop:bg-destination-desktop"
      }
    >
      <main className={DESTINATION.mainClasses.join(" ")}>
        <section className={DESTINATION.mainSecClasses.join(" ")}>
          <header className={DESTINATION.secHeading.join(" ")}>
            <h5 className={DESTINATION.header.join(" ")}>
              <span className="text-lighting/[.25]">01</span> Pick your
              destination
            </h5>

            <figure className={DESTINATION.figure.join(" ")}>
              <img
                className="travel-img transition-all duration-[450ms] ease-in-out"
                src={activeTravel[1]}
                alt="destination"
              ></img>
            </figure>
          </header>

          <div className={DESTINATION.infoDev.join(" ")}>
            <ul className={DESTINATION.list.join(" ")}>
              {travels.map((travel, index) => (
                <li className={DESTINATION.tabs.join(" ")} key={index}>
                  <button
                    onClick={() =>
                      handleUpdate(
                        index,
                        "travel-img",
                        activeTravel,
                        setActiveTravel,
                        travels
                      )
                    }
                    className="tracking-[1px] laptop:tracking-[2px]"
                  >
                    {travel.travelName}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className={DESTINATION.header2.join(" ")}>{activeTravel[0]}</h2>

            <p className={DESTINATION.paragraph.join(" ")}>{activeTravel[2]}</p>

            <hr className={DESTINATION.hr.join(" ")}></hr>

            <div className={DESTINATION.disAndTimeDiv.join(" ")}>
              <div className={DESTINATION.avgDiv.join(" ")}>
                <p className={DESTINATION.avgAndTimeParagarph.join(" ")}>
                  AVG. DISTANCE
                </p>
                <h5 className={DESTINATION.avgAndTimeSub.join(" ")}>
                  {activeTravel[3]}
                </h5>
              </div>
              <div className={DESTINATION.timeDev.join(" ")}>
                <p className={DESTINATION.avgAndTimeParagarph.join(" ")}>
                  EST. TRAVEL TIME
                </p>
                <h5 className={DESTINATION.avgAndTimeSub.join(" ")}>
                  {activeTravel[4]}
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
