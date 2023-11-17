"use client";

import React, { useEffect, useState } from "react";

// import Button from "./ui/button";
import { useTheme } from "next-themes";
import { Icons } from "./icons";
import Icon from "./icon";
import { IconKeyType } from "@/types";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <button className="p-2 text-[21px] text-background outline-none transition-all">
        <Icon name="Circle" />
      </button>
    );

  return (
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      className="p-2 text-[21px] text-foreground/75 outline-none transition-all hover:text-foreground"
    >
      {(() => {
        const icon = themes.filter(({ name }) => name === theme)[0]?.icon;

        return <Icon name={icon} />;
      })()}
    </button>
  );
}

export default ThemeChanger;

const themes: { name: string; icon: IconKeyType }[] = [
  { name: "light", icon: "Sun" },
  { name: "dark", icon: "Moon" },
];
