"use client";

import React from "react";
import AnimatedLanguage from "../animated-language";
import Icon from "../icon";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="relative grid w-full grid-cols-1 items-center justify-center py-32">
      <section
        data-name="intro"
        className="relative flex w-full select-none flex-col sm:px-8"
      >
        <div className="relative mx-auto flex  w-fit flex-col">
          <motion.div
            className="absolute inset-y-0 right-full top-0 my-auto hidden h-28 -translate-x-4 lg:inline-block"
            transition={{
              ease: "backInOut",
              delay: 0.5,
              duration: 0.5,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <Icon
              name="Crown"
              className=" hidden h-full  text-foreground lg:flex"
            />
          </motion.div>

          <motion.div
            transition={{
              ease: "backInOut",
              delay: 0.5,
              duration: 0.5,
            }}
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="absolute inset-y-0 left-[calc(100%_+_16px)] top-0 my-auto hidden h-28 text-foreground lg:flex"
          >
            <Icon name="Crown" className="h-full -scale-x-[1]" />
          </motion.div>

          <motion.h1
            transition={{
              ease: "backInOut",
              delay: 0.5,
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
            className="relative w-full break-words text-center text-4xl font-bold leading-[1.5] sm:text-6xl"
          >
            {"Hi! I'm "}
            <span className="relative text-violet-500">
              MmD
              <motion.span
                transition={{
                  ease: "backInOut",
                  delay: 1,
                  duration: 0.5,
                }}
                initial={{
                  y: 28,
                  x: -28,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                }}
                className="absolute -right-3 -top-0.5 h-[18px]  sm:-right-5 sm:h-[28px]"
              >
                <Icon name="Crown" className="h-full -scale-x-[1]" />
              </motion.span>
            </span>
            <br />{" "}
            <div className="flex flex-wrap justify-center">
              <AnimatedLanguage />
              <span>Developer</span>
              <span className="hidden sm:flex">&nbsp;</span>
            </div>
          </motion.h1>
        </div>
        <motion.p
          transition={{
            ease: "backInOut",
            delay: 1.25,
            duration: 0.5,
          }}
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="mt-4 text-center text-[16px] text-foreground/75"
        >
          {`Let me take your startup's ideas to life with engaging and interactive frontend development.`}
        </motion.p>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 text-lg font-medium">
          <motion.div
            transition={{
              ease: "backInOut",
              delay: 1.75,
              duration: 0.5,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="relative"
          >
            <span className="absolute inset-0 bg-foreground/75" />
            <button className="z-[1] -translate-x-[3px] -translate-y-[3px] border-2 border-foreground bg-foreground px-6 py-2 text-background transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-[0px] active:translate-y-[0px]">
              Contact Me
            </button>
          </motion.div>
          <motion.div
            transition={{
              ease: "backInOut",
              delay: 1.75,
              duration: 0.5,
            }}
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="relative"
          >
            <span className="absolute inset-0 bg-foreground/75" />
            <button className="z-[1] -translate-x-[3px] -translate-y-[3px] border-2 border-foreground bg-background px-6 py-2 text-foreground transition-all hover:-translate-x-1 hover:-translate-y-1 active:translate-x-[0px] active:translate-y-[0px]">
              Download CV
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
