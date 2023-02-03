import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: React.ReactNode;
}
import { Poppins, Rubik } from "@next/font/google";
const poppins = Poppins({
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const rubik = Rubik({
  style: "normal",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={`${poppins.style.fontFamily} `}>{children}</main>
      <Footer />
    </>
  );
}
