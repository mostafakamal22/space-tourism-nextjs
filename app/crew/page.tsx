import { Metadata } from "next";
import Crew from "../components/Crew";

export const metadata: Metadata = {
  title: "Crew",
};

export default function page() {
  return <Crew />;
}
