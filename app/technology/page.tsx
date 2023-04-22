import { Metadata } from "next";
import Technology from "../components/Technology";

export const metadata: Metadata = {
  title: "Technology",
};

export default function page() {
  return <Technology />;
}
