import Image from "@/components/shared/image";
import { Button } from "@/components/ui/button";
import {
  DiscordIcon,
  Heart,
  TelegramIcon,
  XlsIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Props = ListItem<TeamCard>;

export function TeamListItem({ data }: Props) {
  const { name, role } = data;
  return (
    <div className=" h-90 gap-2 flex flex-col justify-between border-2 border-secondary ">
      <div className="bg-card flex-1 relative overflow-hidden h-full">
        <div className=" bg-black/10 inset-0 absolute z-1" />
        <div className=" absolute inset-x-0 bottom-0 p-4 flex flex-col items-center text-center z-1 bg-linear-to-t from-black to-transparent">
          <div className=" flex items-center gap-2 justify-center">
            <Button
              size={"icon-lg"}
              variant={"secondary"}
              className=" rounded-full"
            >
              <HugeiconsIcon icon={DiscordIcon} />
            </Button>
            <Button
              size={"icon-lg"}
              variant={"secondary"}
              className=" rounded-full"
            >
              <HugeiconsIcon icon={XlsIcon} />
            </Button>
            <Button
              size={"icon-lg"}
              variant={"secondary"}
              className=" rounded-full"
            >
              <HugeiconsIcon icon={TelegramIcon} />
            </Button>
          </div>
          <span className=" text-lg">{name}</span>
          <span className=" text-xs text-white/80 font-light">{role}</span>
        </div>
        <Image src={data.imageUrl} alt={name} />
      </div>
    </div>
  );
}
