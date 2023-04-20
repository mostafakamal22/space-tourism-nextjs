import Link from "next/link";
import notFoundImg from "public/assets/shared/not-found.svg";
import Image from "next/image";

function NotFound() {
  return (
    <div className="min-h-[100vh] font-Barlow  bg-no-repeat bg-cover bg-center  bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop">
      <div className="min-h-[100vh] w-[100%] p-[3rem] flex flex-col justify-center items-center font-Bellefair  text-center text-lighting pre-laptop:flex-row pre-laptop:gap-4">
        <figure className="pre-laptop:basis-[40%]">
          <Image src={notFoundImg} alt="error 404" />
        </figure>

        <section className="max-w-[50rem] pre-laptop:basis-auto">
          <p className="text-h2 leading-none mb-[2rem]">ERROR 404</p>

          <p className="text-h3 leading-none mb-[1rem]">Page Not Found!</p>

          <p className="text-body-text">
            Go Home Page From
            <Link className="ml-[.5rem] text-light-blue" href="/" replace>
              Here
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
