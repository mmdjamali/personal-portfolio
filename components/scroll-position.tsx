"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollPosition = () => {
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
    <div className="pointer-events-none fixed inset-0 mx-auto hidden w-full max-w-[1300px] px-6 md:flex md:px-16 lg:px-24">
      <div className="z-[50] mx-2 my-auto flex h-[65%] w-[12px] flex-col items-center justify-center ">
        {position?.split("").map((s, idx) => (
          <motion.span
            transition={{
              ease: "backInOut",
              delay: (idx + 1) * 0.05,
              duration: 0.5,
            }}
            initial={{
              y: -60,
              opacity: 0,
              display: "none",
            }}
            animate={{
              y: 0,
              opacity: 1,
              display: "inline",
            }}
            className="flex-shrink-0 font-bold uppercase"
            key={position + idx + s}
          >
            {s}
          </motion.span>
        ))}

        <span className="mt-2 flex h-full w-[3px] flex-grow bg-foreground/90 transition-all" />
      </div>
    </div>
  );
};

export default ScrollPosition;
