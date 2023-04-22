"use client";
import { crewMembers, type Crew } from "@/utils/data";
import { useState, useRef, useMemo } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade } from "swiper";
import Image from "next/image";

function Crew() {
  //state for active crew member
  const [activeCrewMember, setActiveCrewMember] = useState<Crew>(
    crewMembers[0]
  );
  const swiperRef = useRef<SwiperRef>(null);

  const carouselImages = useMemo(
    () =>
      crewMembers.map((crew) => (
        <SwiperSlide key={crew.id}>
          <Image
            src={crew.image}
            width={"1000"}
            height={"1000"}
            alt={crew.name}
            loading="lazy"
          />
        </SwiperSlide>
      )),
    []
  );

  return (
    <div className="min-h-[100vh] font-Barlow  bg-no-repeat bg-cover bg-center bg-crew-mobile tablet:bg-crew-tablet laptop:bg-crew-desktop">
      <main className="min-h-[85vh] flex justify-center items-center text-center text-lighting laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]">
        <section className="h-[100%] w-[100%] max-w-[130rem] mx-[3rem] flex flex-col items-center tablet:p-[3rem] tablet:pb-0 pre-laptop:grid pre-laptop:grid-cols-[1fr_1fr] pre-laptop:grid-rows-[.25fr_.75fr] pre-laptop:gap-4 laptop:mx-[4rem]">
          <header className="w-[100%] text-center pre-laptop:col-span-1 pre-laptop:row-span-1 pre-laptop:self-end">
            <h5 className="text-h5 tracking-[.3rem] uppercase tablet:text-left tablet:text-[2rem] laptop:text-[2.8rem] laptop:tracking-[.3rem]">
              <span className="text-lighting/[.25]">02</span> Meet your crew
            </h5>
          </header>

          <figure className="w-[100%] h-[22.3rem] flex justify-center my-[3rem] border-b-[.1rem] border-lighting/[.25] tablet:w-[45.6rem] tablet:h-[57rem] tablet:order-last tablet:border-none tablet:mb-[0] pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-3 pre-laptop:justify-self-end laptop:w-[57rem] laptop:h-[71rem]">
            <Swiper
              ref={swiperRef}
              fadeEffect={{ crossFade: true }}
              modules={[EffectFade]}
              effect="fade"
              onSlideChange={(swiper) => {
                setActiveCrewMember(crewMembers[swiper.activeIndex]);
              }}
            >
              {carouselImages}
            </Swiper>
          </figure>

          <div className="max-w-[50rem] flex flex-col text-center pre-laptop:items-start pre-laptop:text-left pre-laptop:col-span-1 pre-laptop:row-start-2 pre-laptop:row-end-3 pre-laptop:max-w-[60rem]">
            <ul className="flex justify-center mb-[2rem] tablet:order-last laptop:justify-start">
              {crewMembers.map((crew, index) => (
                <li
                  className={`w-[1rem] h-[1rem] rounded-full  mx-[.5rem] cursor-pointer transition-all duration-700 hover:bg-lighting tablet:mx-[.75rem] pre-laptop:mx-[1.2rem] pre-laptop:w-[1.5rem] pre-laptop:h-[1.5rem] ${
                    crew.id === activeCrewMember.id
                      ? "bg-lighting"
                      : "bg-light-blue"
                  }`}
                  key={crew.id}
                  onClick={() => swiperRef?.current?.swiper?.slideTo(index)}
                ></li>
              ))}
            </ul>

            <h4 className="text-h4 font-Bellefair uppercase opacity-[50%] tablet:mt-[3rem]">
              {activeCrewMember.job}
            </h4>

            <h3 className="text-h3 font-Bellefair uppercase">
              {activeCrewMember.name}
            </h3>

            <p className="max-w-[50rem] text-body-text text-light-blue mb-[3rem] tablet:mb-[4rem]">
              {activeCrewMember.bio}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Crew;
