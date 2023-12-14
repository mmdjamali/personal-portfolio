"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { RouteType } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../icon";

type Props = {
  className?: string;
  routes: RouteType[];
};

const DashboardNav = ({ routes, className }: Props) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col", className)}>
      {routes?.map(({ items, title }, idx) => (
        <React.Fragment key={idx}>
          <span className="mb-1 mt-5 shrink-0 px-4 text-xs font-semibold uppercase text-opacity-90">
            {title}
          </span>

          {items?.map(({ icon, iconFill, path, title }, idx) => (
            <Link
              className={cn(
                "flex h-10 shrink-0 items-center gap-2 bg-background px-4 font-medium hover:bg-foreground/10",
                pathname === path ? "!bg-foreground text-background" : "",
              )}
              href={path}
              key={idx}
            >
              <Icon
                name={pathname === path ? iconFill : icon}
                className={cn("text-[18px]")}
              />
              {title}
            </Link>
          ))}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default DashboardNav;
