"use client";

import { useEffect, useRef, useState } from "react";
import AnimateInOut from "./animate-in-out";
import { cn } from "@/lib/utils";

const AnimatedLanguage = () => {
  const [selected, setSelected] = useState(0);

  const timeout = useRef<null | NodeJS.Timeout>(null);
  const interval = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      interval.current = setInterval(() => {
        setSelected((prev) => ++prev);
      }, 3000);
    }, 500);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);

      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  const lang = languages[selected % 3];

  return (
    <AnimateInOut>
      <a
        href={lang.url}
        className={cn(
          "flex w-[76px] items-center justify-center sm:w-[118px]",
          lang.className,
        )}
        key={lang.title}
      >
        &nbsp;{lang.title}&nbsp;
      </a>
    </AnimateInOut>
  );
};

export default AnimatedLanguage;

const languages = [
  {
    title: "JS",
    className: "text-yellow-500",
    url: "https://www.javascript.com/",
  },
  {
    title: "TS",
    className: "text-blue-500",
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "GO",
    className: "text-cyan-500",
    url: "https://go.dev/",
  },
];
