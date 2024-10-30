import HeroText from "@/components/HeroText";
import NavyWatch from "@/imgs/navy.png";
import Image from "next/image";
import Header from "@/components/header/Header";
import navyWatch from "@/imgs/navy.png";
import ListOfProductsWColors from "@/components/altColors/ListOfProductsWColor";
import Button from "@/components/Button";
import ListOfDots from "@/components/colorDots/ListOfDots";

export default function Home() {
  return (
    <div className="bg-blue-200 pr-16 pl-20 pb-20">
      <Header />
      <main className="grid grid-cols-[1.5fr_1fr_0.1fr] gap-y-2 items-center">
        <div>
          <HeroText />
        </div>
        <Image
          className="w-3/4 row-span-2 "
          src={navyWatch}
          alt="Navy watch"
          width={400}
          height={400}
        />
        <div className="col-start-3 row-span-2">
          <ListOfDots />
        </div>
        <div className="col-start-1 self-start">
          <Button buttonText="Buy Now" />
        </div>
        <div className="col-start-2">
          <ListOfProductsWColors />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
