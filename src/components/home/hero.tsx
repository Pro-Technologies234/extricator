import Image from "next/image";
import { Wrapper } from "../shared/wrapper";
import { Button } from "../ui/button";
export function Hero() {
  const images = ["", "/images/home/hero_2.png", "/images/home/hero_3.png"];
  return (
    <Wrapper className=" items-center py-16">
      <section className="h-[80vh] flex flex-col justify-center items-center gap-4 text-center relative">
        <div
          className="absolute inset-0 pointer-events-none -z-1"
          style={{
            backgroundImage: `
            linear-gradient(to right, oklch(40% 0.1 359 / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(40% 0.1 359 / 0.5) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
          }}
        />

        <h1 className=" text-4xl md:text-6xl font-sans  max-w-lg">
          Get Ready to Own a Piece of History
        </h1>
        <p className=" text-sm md:text-2xl text-foreground/70   font-light max-w-xl">
          Join the Ranks of Visionary Collectors and Own a Piece of History
        </p>
        <div className=" space-x-4">
          <Button size={"lg"} className="p-4 px-6 rounded-none">
            Explore
          </Button>
          <Button
            size={"lg"}
            variant={"secondary"}
            className="p-4 px-6 rounded-none"
          >
            Go to market
          </Button>
        </div>
        <div className=" flex justify-center items-center -space-x-12 md:-space-x-6 mt-6 overflow-hidden">
          <div className=" w-32 h-30 md:w-62 md:h-52 lg:w-85 lg:h-72 relative">
            <Image src={"/images/home/hero_1.png"} alt={"hero_1.png"} fill />
          </div>
          <div className=" w-44 h-40 md:w-62 md:h-52 lg:w-85 lg:h-72 relative -z-1 mb-20">
            <Image src={"/images/home/hero_2.png"} alt={"hero_1.png"} fill />
          </div>
          <div className=" w-32 h-30 md:w-62 md:h-52 lg:w-85 lg:h-72 relative">
            <Image src={"/images/home/hero_3.png"} alt={"hero_1.png"} fill />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
