/* defining tailwind classes as objects, then using them 
as variables */

//Home classes
export const CONTAINER = {
  container: [
    //mobile
    "min-h-[100vh] font-Barlow  bg-no-repeat bg-cover bg-center ",
  ],
};

//Navbar Classes
export const HEADER = {
  headerClasses: [
    //mobile
    "flex items-center text-lighting p-[2.4rem] uppercase",
    //tablet
    "tablet:py-0 tablet:pr-0 tablet:pl-[4rem] tablet:min-h-[9.6rem]",
    //laptop
    "laptop:pl-[5.5rem] laptop:fixed laptop:top-[4rem] laptop:w-[100%]",
  ],
  brandClasses: [
    //mobile
    "w-[4rem]",
    //tablet
    "tablet:w-[4.8rem]",
  ],
  hrClasses: [
    //mobile
    "hidden m-auto border-[rgba(255,255,255,.25)] translate-x-[10%]",
    //laptop
    "laptop:block laptop:w-[40%]",
  ],
  navClasses: [
    //mobile
    "absolute inset-0 z-[2] flex items-end flex-col pt-[3.6rem] bg-[rgba(0,0,0,.9)] transition-all duration-650 translate-x-full ease-in-out hidden ",
    //tablet
    "tablet:relative tablet:block tablet: tablet:basis-[60%]  tablet:pt-0 tablet:pl-[2rem] tablet:ml-auto  tablet:self-stretch  tablet:bg-[rgba(255,255,255,.04)] tablet:translate-x-[0]",
  ],
  navListClasses: [
    //mobile
    "w-[67%] pl-[2rem] ",
    //tablet
    "tablet:w-full tablet:h-full  tablet:pl-0 tablet:flex tablet:justify-around",
    //laptop
    "laptop:pl-[2rem] laptop:pr-[3.5rem]",
  ],
  navItemClasses: [
    //mobile
    "links mb-[3rem] relative after:w-[80%]  after:absolute after:transition-all  after:border-[0.2rem] after:opacity-[50%] after:ease-in-out after:invisible hover:after:visible",
    //tablet
    "tablet:mb-0 tablet:flex tablet:items-center after:bottom-[-.25rem] ",
  ],
  navLinkClasses: [
    //mobile
    "w-full block text-[1.6rem] tracking-[2.7px]",
  ],
  navLinkSpan: [
    //tablet
    "tablet:hidden",
    //laptop
    "laptop:inline",
  ],
};

//Main classes
export const MAIN = {
  mainClasses: [
    //mobile
    "min-h-[85vh] flex justify-center items-center text-center text-lighting",
    //laptop
    "laptop:min-h-[100vh] laptop:pt-[14rem] laptop:text-left",
  ],
  mainSecClasses: [
    //mobile
    "h-[100%] w-[100%] max-w-[120rem] mx-[3rem] flex flex-col items-center",
    //tablet
    "tablet:p-[3rem]",
    //pre laptop
    "pre-laptop:flex-row latop:space-between laptop:items-end",
    //laptop
    "laptop:mx-[4rem]",
  ],
  secHeader: [
    //mobile
    "max-w-[49rem]",
  ],
  heading5: [
    //mobile
    "text-h5 tracking-[.3rem] capitalize text-light-blue",
  ],
  heading1: [
    //mobile
    "text-h1 font-Bellefair uppercase",
  ],
  paragraph: [
    //mobile
    "text-body-text text-light-blue",
  ],
  btn: [
    //mobile
    "bg-transparent border-[4rem] rounded-full border-transparent text-[2rem] text-darking font-Bellefair uppercase my-[2em] mx-auto transition-all duration-[400ms] ease-in-out  hover:border-[#979797]/[.2] focus:border-[#979797]/[.2]",
    //tablet
    "tablet:my-[3rem]",
    //pre laptop
    "pre-laptop:my-auto pre-laptop:mr-[0]",
    //laptop
    "laptop:ml-auto laptop:mr-0 laptop:mb-0",
  ],
  btnLink: [
    //mobile
    "w-[15rem] h-[15rem] flex justify-center items-center m-auto bg-lighting rounded-full",
    //tablet
    "tablet:w-[24.2rem] tablet:h-[24.2rem]",
    //laptop
    "laptop:w-[27.4rem] laptop:h-[27.4rem]",
  ],
};

//Destination classes
export const DESTINATION = {
  mainClasses: [
    //mobile
    "min-h-[85vh] flex justify-center items-center text-center text-lighting",
    //laptop
    "laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]",
  ],
  mainSecClasses: [
    //mobile
    "h-[100%] w-[100%] max-w-[130rem] mx-[3rem] flex flex-col items-center",
    //tablet
    "tablet:p-[3rem]",
    //pre laptop
    "pre-laptop:flex-row pre-laptop:space-between  pre-laptop:items-end",
    //laptop
    "laptop:mx-[4rem]  ",
  ],
  secHeading: [
    //mobile
    "w-[100%] text-center",
    //pre laptop
    "pre-laptop:self-stretch pre-laptop:flex pre-laptop:flex-col",
    //laptop
    "laptop:w-auto",
  ],
  header: [
    //mobile
    "text-h5 tracking-[.3rem] uppercase",
    //tablet
    "tablet:text-left text-[2rem]",
    //laptop
    "laptop:text-[2.8rem] laptop:tracking-[.3rem] laptop:mb-[3rem] ",
  ],
  figure: [
    //mobile
    "w-[17rem] h-[17rem] mx-auto my-[3rem]",
    //tablet
    "tablet:w-[30rem] tablet:h-[30rem]",
    //pre laptop
    "pre-laptop:ml-[0] pre-laptop:mt-auto",
    //laptop
    "laptop:w-[44.5rem] laptop:h-[44.5rem]",
  ],
  infoDev: [
    //mobile
    "text-center",
    //laptop
    "laptop:ml-auto laptop:text-left",
  ],
  list: [
    //mobile
    "flex justify-center mb-[2rem]",
    //laptop
    "laptop:justify-start",
  ],
  tabs: [
    //mobile
    "tabs text-nav-link text-light-blue ml-[1rem] z-1 relative after:w-[80%] after:absolute after:transition-all  after:border-[0.2rem] after:opacity-[50%] after:ease-in-out after:bottom-[-.25rem] after:left-[0] after:invisible hover:after:visible",
  ],
  header2: [
    //mobile
    "text-h2 font-Bellefair",
  ],
  paragraph: [
    //mobile
    "max-w-[57rem] text-body-text text-light-blue mb-[3rem]",
    //tablet
    "tablet:mb-[4rem]",
    //laptop
    "laptop:max-w-[47rem]",
  ],
  hr: [
    //mobile
    "border-lighting/[.25] mb-[2rem]",
  ],
  disAndTimeDiv: [
    //mobile
    "flex flex-col items-center justify-center mb-[2rem]",
    //tablet
    "tablet:flex-row tablet:my-[3rem]",
    //laptop
    "laptop:justify-start laptop:my-[2rem]",
  ],
  avgDiv: [
    //mobile
    "mb-[2rem]",
    //tablet
    "tablet:my-[0] tablet:mr-[1rem] tablet:p-[2rem]",
    //laptop
    "laptop:pl-[0]",
  ],
  avgAndTimeParagarph: [
    //mobile
    "text-sub-h2 text-light-blue tracking-[1px]",
    //laptop
    "laptop:tracking-[2px]",
  ],
  avgAndTimeSub: [
    //mobile
    "text-sub-h1 font-Bellefair",
  ],
  timeDev: [
    //mobile
    "tablet:p-[2rem] tablet:ml-[1rem]",
  ],
};

//Crew classes
export const CREW = {
  mainClasses: [
    //mobile
    "min-h-[85vh] flex justify-center items-center text-center text-lighting",
    //laptop
    "laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]",
  ],
  mainSecClasses: [
    //mobile
    "h-[100%] w-[100%] max-w-[130rem] mx-[3rem] flex flex-col items-center",
    //tablet
    "tablet:p-[3rem] tablet:pb-0",
    //pre laptop
    "pre-laptop:grid pre-laptop:grid-cols-[1fr_1fr] pre-laptop:grid-rows-[.25fr_.75fr] pre-laptop:gap-4",
    //laptop
    "laptop:mx-[4rem]",
  ],
  secHeading: [
    //mobile
    "w-[100%] text-center",
    //pre laptop
    " pre-laptop:col-span-1 pre-laptop:row-span-1 pre-laptop:self-end",
  ],
  header: [
    //mobile
    "text-h5 tracking-[.3rem] uppercase",
    //tablet
    "tablet:text-left text-[2rem]",
    //laptop
    "laptop:text-[2.8rem] laptop:tracking-[.3rem]",
  ],
  figure: [
    //mobile
    "w-[100%] h-[22.3rem] flex justify-center my-[3rem] border-b-[.1rem] border-lighting/[.25]",
    //tablet
    "tablet:w-[45.6rem] tablet:h-[57rem] tablet:order-last tablet:border-none tablet:mb-[0]",
    //pre laptop
    "pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-3 pre-laptop:justify-self-end",
    //laptop
    "laptop:w-[57rem] laptop:h-[71rem]",
  ],
  infoDev: [
    //mobile
    "max-w-[50rem] flex flex-col text-center",
    //pre lap
    "pre-laptop:items-start pre-laptop:text-left pre-laptop:col-span-1 pre-laptop:row-start-2 pre-laptop:row-end-3 pre-laptop:max-w-[60rem]",
  ],
  list: [
    //mobile
    "flex justify-center mb-[2rem]",
    //tablet
    "tablet:order-last",
    //laptop
    "laptop:justify-start",
  ],
  crewTabs: [
    //mobile
    "crew-tabs w-[1rem] h-[1rem] rounded-full bg-light-blue mx-[.5rem] cursor-pointer transition-all duration-700 hover:bg-lighting",
    //tablet
    "tablet:mx-[.75rem]",
    //pre lap
    "pre-laptop:mx-[1.2rem] pre-laptop:w-[1.5rem] pre-laptop:h-[1.5rem]",
  ],
  header3: [
    //mobile
    "text-h3 font-Bellefair uppercase",
  ],
  header4: [
    //mobile
    "text-h4 font-Bellefair uppercase opacity-[50%]",
    //tablet
    "tablet:mt-[3rem]",
  ],
  paragraph: [
    //mobile
    "max-w-[50rem] text-body-text text-light-blue mb-[3rem]",
    //tablet
    "tablet:mb-[4rem]",
  ],
};

//Technology classes
export const TECHNOLOGY = {
  mainClasses: [
    //mobile
    "min-h-[85vh] flex justify-center items-center text-center text-lighting",
    //laptop
    "laptop:min-h-[100vh] laptop:text-left laptop:pt-[14rem]",
  ],
  mainSecClasses: [
    //mobile
    "h-[100%] w-[100%] max-w-[130rem] flex flex-col items-center",
    //tablet
    "tablet:p-[3rem] tablet:px-0",
    //pre laptop
    "pre-laptop:grid pre-laptop:grid-cols-[1.2fr_.8fr] pre-laptop:grid-rows-[.25fr_.75fr] pre-laptop:gap-4 pre-laptop:mx-[3rem]",
    //laptop
    "laptop:mx-[4rem]",
  ],
  secHeading: [
    //mobile
    "w-[100%] text-center",
    //tablet
    "tablet:px-[3rem]",
    //pre laptop
    " pre-laptop:col-span-1 pre-laptop:row-span-1 ",
  ],
  header: [
    //mobile
    "text-h5 tracking-[.3rem] uppercase",
    //tablet
    "tablet:text-left tablet:text-[2rem]",
    //laptop
    "laptop:text-[2.8rem] laptop:tracking-[.3rem] laptop:mb-[3rem] ",
  ],
  figure: [
    //mobile
    "w-[100%] h-[17rem] flex justify-center my-[3rem]",
    //tablet
    "tablet:h-[31rem]",
    //pre laptop
    "pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-3 pre-laptop:justify-self-end pre-laptop:self-end",
    //laptop
    "laptop:w-[51.5rem] laptop:h-[52.7rem]",
  ],
  infoDev: [
    //mobile
    "max-w-[55rem] flex flex-col text-center px-[3rem]",
    //pre lap
    "pre-laptop:grid pre-laptop:grid-cols-[.2fr_.8fr] pre-laptop:grid-rows-[.2fr_.3fr_.5fr] pre-laptop:gap-2  pre-laptop:text-left pre-laptop:col-span-1 pre-laptop:row-start-2 pre-laptop:row-end-3 pre-laptop:max-w-[70rem]",
  ],
  list: [
    //mobile
    "flex justify-center mb-[2rem]",
    //pre lap
    "pre-laptop:col-start-1 pre-laptop:col-end-2 pre-laptop:row-start-1 pre-laptop:row-end-4 pre-laptop:self-center pre-laptop:justify-self-center  pre-laptop:flex-col pre-laptop:mb-0",
  ],
  technologiesTabs: [
    //mobile
    "technologies-tabs flex justify-center items-center text-sub-h2 font-Bellefair font-bold w-[4rem] h-[4rem] rounded-full border-[.1rem] border-lighting/[.25] mx-[.5rem] transition-all duration-700 cursor-pointer hover:bg-lighting hover:text-darking",
    //tablet
    "tablet:mx-[.75rem]",
    //pre lap
    "pre-laptop:mx-0 pre-laptop:my-[1.6rem] ",
  ],
  header3: [
    //mobile
    "text-h3 font-Bellefair uppercase",
    //pre lap
    "pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-2 pre-laptop:row-end-3",
  ],
  header4: [
    //mobile
    "text-nav-link text-light-blue tracking-[.2rem] font-Bellefair uppercase ",
    //tablet
    "tablet:mt-[3rem]",
    //pre lap
    "pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-1 pre-laptop:row-end-2",
  ],
  paragraph: [
    //mobile
    "max-w-[50rem] text-body-text text-light-blue  mb-[3rem]",
    //tablet
    "tablet:mb-[4rem]",
    //pre lap
    "pre-laptop:col-start-2 pre-laptop:col-end-3 pre-laptop:row-start-3 pre-laptop:row-end-4",
  ],
};

//Not Found Classes
export const NOTFOUND = {
  div: [
    //mobile
    "min-h-[100vh] w-[100%] p-[3rem] flex flex-col justify-center items-center font-Bellefair    text-center text-lighting",
    //pre lap
    "pre-laptop:flex-row pre-laptop:gap-4",
  ],
  figure: [
    //pre lap
    "pre-laptop:basis-[40%]",
  ],
  heading2: [
    //mobile
    "text-h2 leading-none mb-[2rem]",
  ],
  heading3: [
    //mobile
    "text-h3 leading-none mb-[1rem]",
  ],
  text: [
    //mobile
    "text-body-text",
  ],
  link: [
    //mobile
    "ml-[.5rem] text-light-blue",
  ],
};
