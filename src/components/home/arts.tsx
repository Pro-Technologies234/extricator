import { artsData } from "@/constants/arts";
import { ArtListView } from "../art/shared/list-view";
import { Wrapper } from "../shared/wrapper";
import { Button } from "../ui/button";

export function Arts() {
  return (
    <Wrapper className=" items-center py-16 gap-">
      <section className="grid grid-cols-2 items-center gap-4  relative justify-between w-full">
        <div className="">
          <h2 className=" text-3xl md:text-6xl max-w-xl font-sans tracking-tighter">
            Amazing and Unique Arts for the week
          </h2>
        </div>
        <div className="ml-auto space-y-2">
          <Button size={"lg"} className="p-4 px-6 rounded-none">
            See all
          </Button>
        </div>
      </section>
      <ArtListView data={artsData} />
    </Wrapper>
  );
}
