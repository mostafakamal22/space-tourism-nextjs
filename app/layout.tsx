import Navbar from "./components/Navbar";
import "./globals.css";
import { Bellefair, Barlow_Condensed } from "next/font/google";

export const metadata = {
  title: "Space Tourism",
  description: "A Frontend Mentor Challenge",
};

const bellefair = Bellefair({
  weight: "400",
  variable: "--font-bellefair",
  subsets: ["latin"],
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
