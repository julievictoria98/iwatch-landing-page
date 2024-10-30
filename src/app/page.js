import HeroText from "@/components/HeroText";
import NavyWatch from "@/imgs/navy.png";
import Image from "next/image";
import Header from "@/components/header/Header";
import ProductWithColor from "@/components/ProductWithColor";
import navyWatch from "@/imgs/navy.png";
import mintWatch from "@/imgs/mint.png";
import oceanWatch from "@/imgs/ocean.png";

export default function Home() {
  return (
    <div className="bg-blue-200">
      <Header />
      <main className="grid grid-cols-[1fr_1fr] justify-items-center items-center mr-8 ml-8">
        <HeroText />
        <Image src={NavyWatch} alt="Navy watch" width={500} height={500} />
        <ProductWithColor
          watchColor={mintWatch}
          altText="Watch in mint green color"
          bgColor="bg-green-200"
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
