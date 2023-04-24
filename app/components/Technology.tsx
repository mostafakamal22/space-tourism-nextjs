"use client";
import { useMemo, useRef, useState } from "react";
import { Technology, technologies } from "../../utils/data";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade } from "swiper";

function Technology() {
  //state for active crew member
  const [activeTechnology, setActiveTechnology] = useState<Technology>(
    technologies[0]
  );

  const swiperRef = useRef<SwiperRef>(null);

  const carouselImages = useMemo(
    () =>
      technologies.map((technology) => (
        <SwiperSlide key={technology.id}>
          <Image
            src={
              window?.innerWidth >= 992
                ? technology.image[1]
                : technology.image[0]
            }
            width={"1000"}
            height={"1000"}
            alt={technology.name}
            loading="lazy"
          />
        </SwiperSlide>
      )),
    []
  );

  return (
    <div
      className={
        "min-h-[100vh] flex justify-center items-center py-[15vh] laptop:py-0 px-3 overflow-hidden bg-no-repeat bg-cover bg-center bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop"
      }
    >
      <main className="w-full min-h-[85vh] flex justify-center items-center text-center text-lighting laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]">
        <section className="self-start h-[100%] w-[100%] max-w-[130rem] flex flex-col items-center tablet:p-[3rem] tablet:px-0 pre-laptop:grid pre-laptop:grid-cols-[1.2fr_.8fr] pre-laptop:grid-rows-[.25fr_.75fr] pre-laptop:gap-4 pre-laptop:mx-[3rem] laptop:mx-[4rem]">
          <header className="w-[100%] text-center tablet:px-[3rem] pre-laptop:col-span-1 pre-laptop:row-span-1">
            <h5 className="text-h5 tracking-[.3rem] uppercase tablet:text-left tablet:text-[2rem] laptop:text-[2.8rem] laptop:tracking-[.3rem] laptop:mb-[3rem]">
              <span className="text-lighting/[.25]">03</span> SPACE LAUNCH 101
            </h5>
          </header>

          <figure className="w-[100%] h-[17rem] flex justify-center my-[3rem] tablet:h-[31rem] pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-3 pre-laptop:justify-self-end pre-laptop:self-end laptop:w-[51.5rem] laptop:h-[52.7rem]">
            <Swiper
              ref={swiperRef}
              fadeEffect={{ crossFade: true }}
              modules={[EffectFade]}
              effect="fade"
              onSlideChange={(swiper) => {
                setActiveTechnology(technologies[swiper.activeIndex]);
              }}
            >
              {carouselImages}
            </Swiper>
          </figure>

          <div className="max-w-[55rem] flex flex-col text-center px-[3rem] pre-laptop:grid pre-laptop:grid-cols-[.2fr_.8fr] pre-laptop:grid-rows-[.2fr_.3fr_.5fr] pre-laptop:gap-2  pre-laptop:text-left pre-laptop:col-span-1 pre-laptop:row-start-2 pre-laptop:row-end-3 pre-laptop:max-w-[70rem]">
            <ul className="flex justify-center mb-[2rem] pre-laptop:col-start-1 pre-laptop:col-end-2 pre-laptop:row-start-1 pre-laptop:row-end-4 pre-laptop:self-center pre-laptop:justify-self-center  pre-laptop:flex-col pre-laptop:mb-0">
              {technologies.map((technology, index) => (
                <li
                  className={`flex justify-center items-center cursor-pointer text-sub-h2 font-Bellefair font-bold w-[4rem] h-[4rem] rounded-full border-[.1rem] border-lighting/[.25] mx-[.5rem] transition-all tablet:mx-[.75rem] pre-laptop:mx-0 pre-laptop:my-[1.6rem] ${
                    technology.id === activeTechnology.id
                      ? "bg-lighting text-darking"
                      : "bg-transparent"
                  }`}
                  key={technology.id}
                  onClick={() => swiperRef?.current?.swiper?.slideTo(index)}
                >
                  {index + 1}
                </li>
              ))}
            </ul>

            <h4 className="text-nav-link text-light-blue tracking-[.2rem] font-Bellefair uppercase tablet:mt-[3rem] pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-2">
              THE TERMINOLOGY…
            </h4>

            <h3 className="text-h3 font-Bellefair uppercase pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-2 pre-laptop:row-end-3">
              {activeTechnology.name}
            </h3>

            <p className="max-w-[50rem] text-body-text text-light-blue  mb-[3rem] tablet:mb-[4rem] pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-3 pre-laptop:row-end-4">
              {activeTechnology.description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Technology;
