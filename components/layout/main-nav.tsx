"use client";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type MainNavProps = {
  items: NavItem[];
};

const MainNav = ({ items }: MainNavProps) => {
  const pathname = usePathname();

  const [position, setPosition] = useState("intro");

  useEffect(() => {
    document.onscroll = (e) => {
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

    return () => {
      document.onscroll = null;
    };
  }, [position]);

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {items.map(({ title, disabled, external, url }, idx) => (
        <motion.div
          key={idx}
          transition={{
            delay: 0.5 + idx * 0.25,
            ease: "backInOut",
            duration: 0.5,
          }}
          initial={{
            y: -60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <Link
            className={cn(
              "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:max-w-[0px] after:bg-foreground after:transition-all after:content-[''] hover:after:max-w-full",
              position === title?.toLocaleLowerCase()
                ? "font-medium text-foreground after:max-w-full"
                : "text-foreground/75 hover:text-foreground/90 hover:after:max-w-full",
            )}
            href={url ?? ""}
            key={idx}
          >
            {title}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default MainNav;
