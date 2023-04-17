import Image from "next/image";

type Props = { handleToggle: (v: string) => void };

export default function CloseNavButton({ handleToggle }: Props) {
  return (
    <button
      id="close"
      className="mr-[2.4rem] mb-[3rem] tablet:hidden"
      onClick={() => handleToggle("close")}
    >
      <Image
        src="/assets/shared/icon-close.svg"
        alt="close nav"
        width="25"
        height="25"
        priority
      />
    </button>
  );
}
