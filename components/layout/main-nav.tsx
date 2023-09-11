"use client";

import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

type MainNavProps = {
  items: NavItem[];
};

const MainNav = ({ items }: MainNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {items.map(({ title, disabled, external, url }, idx) => (
        <motion.div
          key={idx}
          transition={{
            delay: (idx + 1) * 0.05,
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
              pathname === url
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
