import { cn } from "@/lib/utils";
import { TeamListItem } from "./list-item";

type Props = ListView<TeamCard>;

export function TeamListView({ data, className }: Props) {
  return (
    <section className={cn(" grid md:grid-cols-2 gap-6 w-full", className)}>
      {data.map((_) => (
        <TeamListItem key={_.id} data={_} />
      ))}
    </section>
  );
}
