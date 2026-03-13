import { Wrapper } from "../shared/wrapper";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  TelegramIcon,
  DiscordIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: ["Services", "About us", "Support", "Contact Us"],
    },
    {
      title: "Legal",
      links: ["Privacy policy", "Terms & Condition"],
    },
    {
      title: "Location",
      links: ["Nigeria", "United State"],
    },
  ];

  return (
    <footer className="border-t border-t-secondary pt-20 pb-10">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-tight">Extricator.</h2>
            <p className=" text-foreground/80 text-lg max-w-xs leading-snug">
              Join the Ranks of Visionary Collectors and Own a Piece of History
            </p>
            <div className="flex gap-3">
              {[DiscordIcon, NewTwitterIcon, TelegramIcon].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <HugeiconsIcon icon={Icon} size={18} color="currentColor" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="font-semibold ">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className=" text-foreground/80 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className=" text-foreground/70 text-sm">
            Copyright © {currentYear} Extricator
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
