import { Metadata } from "next";
import Destination from "../components/Destination";

export const metadata: Metadata = {
  title: "Destination",
};

export default function page() {
  return <Destination />;
}
