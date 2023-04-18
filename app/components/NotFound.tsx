import Link from "next/link";
import notFoundImg from "/assets/shared/not-found.svg";
import { CONTAINER, NOTFOUND } from "@/utils/tailwindClasses";
import Image from "next/image";

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
          <Image src={notFoundImg} alt="error 404" />
        </figure>

        <section className="max-w-[50rem] pre-laptop:basis-auto">
          <p className={NOTFOUND.heading2.join(" ")}>ERROR 404</p>

          <p className={NOTFOUND.heading3.join(" ")}>Page Not Found !</p>

          <p className={NOTFOUND.text.join(" ")}>
            Go Home Page From
            <Link className={NOTFOUND.link.join(" ")} href="/">
              Here
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
