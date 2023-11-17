"use client";

import React from "react";
import { motion } from "framer-motion";
type props = {
  quote: string;
  by: string;
};

const Quote: React.FC<props> = ({ quote, by }) => {
  return (
    <div
      className="flex w-full items-center justify-center py-8
    "
    >
      <div className="relative">
        <motion.div
          transition={{
            ease: "backInOut",
            duration: 0.5,
          }}
          initial={{
            y: 0,
            x: 0,
          }}
          whileInView={{
            y: -6,
            x: -6,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -50% 0px",
          }}
          className="relative z-[1] flex max-w-[min(350px,80vw)] flex-col items-start gap-4 bg-foreground p-4 text-background"
        >
          <p>{quote}</p>
          <span>- {by}</span>
        </motion.div>

        <div className="absolute bottom-[0px] right-[0px] z-[0] flex h-full w-full max-w-[min(350px,80vw)] flex-col items-start gap-4 bg-foreground/75 p-4" />
      </div>
    </div>
  );
};

export default Quote;
