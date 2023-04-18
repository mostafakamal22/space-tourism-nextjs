"use client";
import { Travel, travels } from "@/utils/data";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade } from "swiper";

function Destination() {
  //state for active travel
  const [activeTravel, setActiveTravel] = useState<Travel>(travels[0]);

  const swiperRef = useRef<SwiperRef>(null);

  const carouselImages = useMemo(
    () =>
      travels.map((travel) => (
        <SwiperSlide key={travel.id}>
          <Image
            src={travel.image}
            width={"200"}
            height={"200"}
            alt={travel.name}
          />
        </SwiperSlide>
      )),
    []
  );

  return (
    <div className="min-h-[100vh] font-Barlow  bg-no-repeat bg-cover bg-center bg-destination-mobile tablet:bg-destination-tablet laptop:bg-destination-desktop">
      <main className="min-h-[85vh] flex justify-center items-center text-center text-lighting laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]">
        <section className="h-[100%] w-[100%] max-w-[130rem] mx-[3rem] flex flex-col items-center tablet:p-[3rem] pre-laptop:flex-row pre-laptop:space-between  pre-laptop:items-end laptop:mx-[4rem]">
          <header className="w-[100%] text-center pre-laptop:self-stretch pre-laptop:flex pre-laptop:flex-col laptop:w-auto">
            <h5 className="text-h5 tracking-[.3rem] uppercase tablet:text-left tablet:text-[2rem] laptop:text-[2.8rem] laptop:tracking-[.3rem] laptop:mb-[3rem]">
              <span className="text-lighting/[.25]">01</span> Pick your
              destination
            </h5>

            <figure className="w-[17rem] h-[17rem] mx-auto my-[3rem] tablet:w-[30rem] tablet:h-[30rem]  pre-laptop:ml-[0] pre-laptop:mt-auto laptop:w-[44.5rem] laptop:h-[44.5rem]">
              <Swiper
                ref={swiperRef}
                fadeEffect={{ crossFade: true }}
                modules={[EffectFade]}
                effect="fade"
                onSlideChange={(swiper) => {
                  setActiveTravel(travels[swiper.activeIndex]);
                }}
              >
                {carouselImages}
              </Swiper>
            </figure>
          </header>

          <div className="text-center laptop:ml-auto laptop:text-left">
            <ul className="flex justify-center mb-[2rem] laptop:justify-start">
              {travels.map((travel, index) => (
                <li
                  className={`text-nav-link text-light-blue ml-[1rem] z-1 relative after:w-[80%] after:absolute after:transition-all  after:border-[0.2rem] after:opacity-[50%] after:ease-in-out after:bottom-[-.25rem] after:left-[0]  hover:after:visible ${
                    travel.id === activeTravel.id
                      ? "after:visible"
                      : "after:invisible"
                  }`}
                  key={travel.id}
                >
                  <button
                    onClick={() => swiperRef?.current?.swiper?.slideTo(index)}
                    className="tracking-[1px] laptop:tracking-[2px]"
                  >
                    {travel.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="text-h2 font-Bellefair">{activeTravel.name}</h2>

            <p className="max-w-[57rem] text-body-text text-light-blue mb-[3rem] tablet:mb-[4rem] laptop:max-w-[47rem]">
              {activeTravel.description}
            </p>

            <hr className="border-lighting/[.25] mb-[2rem]"></hr>

            <div className="flex flex-col items-center justify-center mb-[2rem] tablet:flex-row tablet:my-[3rem] laptop:justify-start laptop:my-[2rem]">
              <div className="mb-[2rem] tablet:my-[0] tablet:mr-[1rem] tablet:p-[2rem] laptop:pl-[0]">
                <p className="text-sub-h2 text-light-blue tracking-[1px] laptop:tracking-[2px]">
                  AVG. DISTANCE
                </p>
                <h5 className="text-sub-h1 font-Bellefair">
                  {activeTravel.distance}
                </h5>
              </div>
              <div className="tablet:p-[2rem] tablet:ml-[1rem]">
                <p className="text-sub-h2 text-light-blue tracking-[1px] laptop:tracking-[2px]">
                  EST. TRAVEL TIME
                </p>
                <h5 className="text-sub-h1 font-Bellefair">
                  {activeTravel.time}
                </h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Destination;
