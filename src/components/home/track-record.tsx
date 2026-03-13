import { Wrapper } from "../shared/wrapper";

export function TrackRecord() {
  const records = [
    { label: "Collections", value: "28k+" },
    { label: "Auctions", value: "18k+" },
    { label: "Artists", value: "10k+" },
  ];
  return (
    <Wrapper className=" items-center py-16">
      <section className="grid md:grid-cols-2 gap-4  relative justify-between w-full">
        <div className=" mt-8 space-y-4">
          <span className=" text-destructive">Track record</span>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl max-w-lg tracking-tight">
            Positive track records and milestones Achieved
          </h2>
        </div>
        <div className="ml-auto space-y-2">
          <p className=" text-foreground/70   font-light max-w-xl">
            Not only do our exclusive NFTs offer a unique opportunity for
            digital ownership, they also provide a platform for artists to
            showcase their creativity and connect with a community of
            like-minded collectors and enthusiasts.
          </p>
          <div className=" flex gap-4">
            {records.map((_) => (
              <div key={_.label} className=" flex flex-col items-center ">
                <span className=" text-2xl md:text-3xl font-medium">
                  {_.value}
                </span>
                <span className=" md:text-lg font-light text-foreground/80">
                  {_.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
