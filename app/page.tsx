import About from "@/components/About";
import Apps from "@/components/App";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Herosection from "@/components/Herosection";
import Impact from "@/components/Impact";
import Tokenomics from "@/components/Tokenomics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <About />
      <Features />
      <Impact />
      <Apps />
      <Tokenomics />
      <Contact />
    </div>
  );
}
