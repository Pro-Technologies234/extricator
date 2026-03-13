import { artsData } from "@/constants/arts";
import { Wrapper } from "../shared/wrapper";
import { Button } from "../ui/button";
import { TeamListView } from "../team/shared/list-view";
import { teamData } from "@/constants/team";

export function Team() {
  return (
    <Wrapper className=" items-center py-16 gap-18">
      <section className="grid lg:grid-cols-5 items-center gap-4  relative justify-between w-full">
        <div className=" space-y-2 col-span-2">
          <h2 className=" text-3xl md:text-6xl max-w-xl font-sans tracking-tighter">
            Meet the Team
          </h2>
          <p className=" text-foreground/70   font-light max-w-sm text-lg">
            The Creators Who Are Pushing the Boundaries of Art and Technology
          </p>
        </div>
        <TeamListView className=" col-span-3" data={teamData} />
      </section>
    </Wrapper>
  );
}
