"use client";
import { artsData } from "@/constants/arts";
import { ArtListView } from "../art/shared/list-view";
import { Wrapper } from "../shared/wrapper";
import { Button } from "../ui/button";

export function Arts() {
  return (
    <Wrapper className=" items-center py-16 gap-8">
      <section className="grid md:grid-cols-2 items-center gap-4  relative justify-between w-full">
        <div className="">
          <h2 className=" text-3xl md:text-4xl lg:text-6xl max-w-xl font-sans tracking-tighter">
            Amazing and Unique Arts for the week
          </h2>
        </div>
        <div className="ml-auto space-y-2 not-md:hidden">
          <Button size={"lg"} className="p-4 px-6 rounded-none">
            See all
          </Button>
        </div>
      </section>
      <ArtListView data={artsData} />
      <div className="ml-auto space-y-2 md:hidden">
        <Button size={"lg"} className="p-4 px-6 rounded-none">
          See all
        </Button>
      </div>
    </Wrapper>
  );
}
