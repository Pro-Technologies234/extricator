import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArtListItem } from "./list-item";

type Props = ListView<ArtCard>;

export function ArtListView({ data, type = "list" }: Props) {
  return (
    <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {data.map((_) => (
        <ArtListItem key={_.id} data={_} />
      ))}
    </section>
  );
}
