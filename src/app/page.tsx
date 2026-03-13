import { Arts } from "@/components/home/arts";
import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Team } from "@/components/home/team";
import { TrackRecord } from "@/components/home/track-record";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <TrackRecord />
      <Arts />
      <Team />
      <Cta />
    </Fragment>
  );
}
