import Image from "@/components/shared/image";
import { Button } from "@/components/ui/button";
import { Heart } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Props = ListItem<ArtCard>;

export function ArtListItem({ data }: Props) {
  const { name, price, likes } = data;
  return (
    <div className=" h-80 md:h-100 gap-2 flex flex-col justify-between ">
      <div className="bg-card flex-1 relative overflow-hidden border-2 border-secondary ">
        <div className=" absolute inset-x-0 p-4 flex justify-end z-1">
          <Button variant={"inverted"} className=" text-red-500">
            <HugeiconsIcon
              icon={Heart}
              size={24}
              fill="currentColor"
              strokeWidth={1.5}
            />
            {likes}
          </Button>
        </div>
        <Image src={data.imageUrl} alt={name} />
      </div>
      <div className="bg-secondary p-4 flex justify-between items-end border-2 border-secondary ">
        <div>
          <span className=" text-sm font-sans">{name}</span>
          <p className=" text-sm font-sans">{price} SOL</p>
        </div>
        <div>
          <Button className="rounded-none">Buy now</Button>
        </div>
      </div>
    </div>
  );
}
