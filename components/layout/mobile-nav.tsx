"use client";

import { NavItem } from "@/types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Icon from "../icon";
import { socials } from "@/config/socials";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  items: NavItem[];
};

const MobileNav = ({ items }: Props) => {
  const [position, setPosition] = useState("intro");

  useEffect(() => {
    const handle = (e: Event) => {
      const center = {
        y: innerHeight / 2,
        x: innerWidth / 2,
      };

      let name = document
        .elementFromPoint(center.x, center.y)
        ?.querySelector("section")?.dataset?.name;

      if (!name) return;

      if (name === position) return;

      setPosition(name);
    };
    document.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("scroll", handle);
    };
  }, [position]);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="p-2 text-[21px] text-foreground/75 outline-none transition-all hover:text-foreground md:hidden">
          <Icon name="Menu" />
        </button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="bg-background/50" />
        <DrawerContent
          className="z-[99] flex h-screen w-[min(420px_,_100%)] bg-background shadow-[0px_0px_30px] shadow-foreground/20"
          side="left"
        >
          <div className="relative flex h-full w-full flex-col">
            <div className="flex h-[54px] shrink-0 items-center justify-between px-6">
              <Icon
                name="Crown"
                className="aspect-square h-[28px] text-foreground"
              />

              <DrawerClose asChild>
                <button className="p-2 text-[21px] text-foreground/75 outline-none transition-all hover:text-foreground">
                  <Icon name="Close" />
                </button>
              </DrawerClose>
            </div>

            <nav className="flex h-full flex-col justify-center gap-2 px-6 py-4">
              {items.map(({ title, disabled, external, url }) => (
                <Link
                  data-active={title.toLowerCase() === position}
                  key={title}
                  href={disabled || !url ? "" : url}
                  className={cn(
                    "flex h-10 w-full items-center bg-background px-4 font-medium text-foreground/90 transition-all data-[active=true]:!bg-foreground data-[active=true]:!text-background",
                    "hover:bg-foreground/10",
                    disabled ? "cursor-not-allowed opacity-75" : "",
                  )}
                >
                  {title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-2 px-6 py-4">
              {socials.map(({ icon, name, url }, idx) => (
                <Link
                  href={url}
                  className="pointer-events-auto z-[50] p-2 text-foreground/75 transition-colors hover:text-foreground"
                  key={idx}
                >
                  <Icon className="text-[21px]" name={icon} />
                </Link>
              ))}
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default MobileNav;
