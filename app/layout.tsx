import "./globals.css";
import { Bellefair, Barlow_Condensed } from "next/font/google";

export const metadata = {
  title: "Space Tourism",
  description: "A Frontend Mentor Challenge",
};

const bellefair = Bellefair({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});
const barlowCondensed = Barlow_Condensed({
  display: "swap",
  weight: ["400", "300", "600", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlowCondensed.className}>
      <body className={bellefair.className}>{children}</body>
    </html>
  );
}
