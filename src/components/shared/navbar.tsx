import Link from "next/link";
import { Button } from "../ui/button";
import { Wrapper } from "./wrapper";

export function Navbar() {
  const navigations: HeaderNavigator[] = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "roadmap", label: "Roadmap" },
  ];
  return (
    <header>
      <Wrapper className="flex-row justify-between py-4 font-sans tracking-tight">
        {/* Logo */}
        <div>
          <Link href={"/"} className=" font-semibold ">
            Extricator.
          </Link>
        </div>
        {/* Navigations */}
        <nav>
          {navigations.map(({ id, label }, i) => (
            <Button variant={"ghost"} key={id || i}>
              {label}
            </Button>
          ))}
        </nav>
      </Wrapper>
    </header>
  );
}
