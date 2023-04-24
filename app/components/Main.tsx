import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="min-h-[100vh] flex py-[15vh] laptop:py-0 px-3 overflow-hidden bg-no-repeat bg-cover bg-center bg-home-mobile tablet:bg-home-tablet laptop:bg-home-desktop">
      <main className="w-full min-h-[85vh] flex justify-center items-center text-center text-lighting laptop:min-h-[100vh] laptop:pt-[14rem] laptop:text-left">
        <section className="h-[100%] w-[100%] max-w-[120rem] mx-[3rem] flex flex-col items-center tablet:p-[3rem] pre-laptop:flex-row laptop:justify-between laptop:items-end laptop:mx-[4rem]">
          <header className="max-w-[49rem]">
            <h5 className="text-h5 tracking-[.3rem] capitalize text-light-blue">
              So, you want to travel to
            </h5>

            <h1 className="text-h1 font-Bellefair uppercase">Space</h1>

            <p className="text-body-text text-light-blue">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </header>

          <button
            id="landing-main-btn"
            className="bg-transparent border-[4rem] rounded-full border-transparent text-[2rem] text-darking font-Bellefair uppercase my-[2em] mx-auto transition-all duration-[400ms] ease-in-out  hover:border-[#979797]/[.2] focus:border-[#979797]/[.2] tablet:my-[3rem] pre-laptop:my-auto pre-laptop:mr-[0] laptop:ml-auto laptop:mr-0 laptop:mb-0"
          >
            <Link
              className="w-[15rem] h-[15rem] flex justify-center items-center m-auto bg-lighting rounded-full tablet:w-[24.2rem] tablet:h-[24.2rem] laptop:w-[27.4rem] laptop:h-[27.4rem]"
              href="/destination"
            >
              Explore
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}
