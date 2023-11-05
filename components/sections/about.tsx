"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import NumberUp from "../animation/number-up";
import { cn } from "@/lib/utils";
import Image from "next/image";

function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  return (
    <div className="relative grid w-full items-start justify-stretch py-32 sm:px-12">
      <section data-name="about" className="flex w-full flex-col pb-10 sm:px-8">
        <div className="relative mx-auto mb-12 flex w-fit flex-col items-center">
          <motion.div
            className="absolute inset-y-0 right-[calc(100%_+_16px)] top-0 my-auto hidden items-center justify-center lg:flex"
            transition={{
              ease: "backInOut",
              delay: 0.5,
              duration: 0.5,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
              margin: "0px 0px -25% 0px",
            }}
          >
            <span className="inline h-1 w-14 bg-gradient-to-r from-transparent to-foreground" />
            <span className="inline aspect-square h-3 bg-foreground" />
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
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
              margin: "0px 0px -25% 0px",
            }}
            className="absolute inset-y-0 left-[calc(100%_+_16px)] top-0 my-auto hidden items-center text-foreground lg:inline-flex"
          >
            <span className="inline aspect-square h-3 bg-foreground" />
            <span className="inline h-1 w-14 bg-gradient-to-l from-transparent to-foreground" />
          </motion.div>

          <motion.h2
            transition={{
              duration: 0.5,
            }}
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
              margin: "0px 0px -25% 0px",
            }}
            className="group relative w-full text-center text-4xl font-bold leading-[1.5] sm:text-6xl"
          >
            {"Who is"}
            <span>
              <span className="relative text-blue-500">{" MmD"}</span>
              <span className="relative inline-flex text-blue-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12">
                ?
              </span>
            </span>
          </motion.h2>
        </div>

        <motion.p
          transition={{
            duration: 0.5,
          }}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -25% 0px",
          }}
          className=" text-[16px] leading-[1.5] text-foreground/75 lg:px-16"
        >
          {
            "Welcome to my digital realm! I'm Mohammad Jamali, a passionate developer based in "
          }
          <span className="bg-teal-500 px-2 text-white">{"Tabriz, Iran"}</span>
          {", but feel free to call me MmD (Mamad) if you prefer."}
        </motion.p>

        <motion.p
          transition={{
            duration: 0.5,
          }}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -25% 0px",
          }}
          className="mt-6 text-[16px] leading-[1.5] text-foreground/75 lg:px-16"
        >
          {
            "Starting my career as a frontend developer, I quickly realized that my curiosity and passion for exploration couldn't be contained to just one side of the web. Determined to expand my horizons, I delved into the world of backend development, embracing the challenges it brought along. "
          }
          <span className="bg-indigo-500 px-2 text-white">
            Today, I proudly wear the fullstack hat.
          </span>
        </motion.p>

        <motion.p
          transition={{
            duration: 0.5,
          }}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -25% 0px",
          }}
          className="mt-6 text-[16px] leading-[1.5] text-foreground/75 lg:px-16"
        >
          {"Just as wizards use their spells to conjure captivating magic, "}
          <span className="bg-violet-500 px-2 text-white">
            {
              "I harness programming languages and cutting-edge technologies to bring your ideas to life."
            }
          </span>
        </motion.p>

        <motion.p
          transition={{
            duration: 0.5,
          }}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "0px 0px -25% 0px",
          }}
          className="mt-6 text-[16px] leading-[1.5] text-foreground/75 lg:px-16"
        >
          {"Here are some technologies that I use often :"}
        </motion.p>

        <div
          ref={ref}
          className="relative mt-8 grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 lg:px-16"
        >
          {often_used_tech.map(
            ({ name, bg, border, color, date, icon }, idx) => {
              return (
                <motion.div
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.3 + 0.5,
                  }}
                  initial={{
                    y: 60,
                    opacity: 0,
                  }}
                  animate={
                    inView
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {}
                  }
                  className="relative"
                  key={name}
                >
                  <div
                    className={cn(
                      "absolute z-[1] h-full w-full opacity-75",
                      bg,
                    )}
                  />

                  <div
                    className={cn(
                      "relative z-[2] flex h-16 w-full -translate-x-1.5 -translate-y-1.5 items-center overflow-hidden border-[6px] bg-background/95 px-4 py-2",
                      border,
                      color,
                    )}
                  >
                    <div className="flex h-fit w-full items-center gap-4 text-background">
                      <Image
                        src={icon}
                        height={35}
                        width={35}
                        unoptimized
                        alt={name}
                        className="object-contain"
                      />

                      <div
                        className={cn(
                          "flex w-full items-center justify-between",
                          color,
                        )}
                      >
                        <span className="overflow-hidden text-ellipsis text-[16px] font-medium">
                          {name}
                        </span>
                        <span className="flex items-center">
                          +
                          <NumberUp
                            minLen={2}
                            key={"test"}
                            duration={1000}
                            number={Math.ceil(
                              (new Date().getTime() -
                                new Date(date).getTime()) /
                                2629746000,
                            )}
                          />
                          <span>&nbsp; months</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </section>
    </div>
  );
}

export default About;

const often_used_tech: {
  name: string;
  border: string;
  color: string;
  date: string;
  bg: string;
  icon: string;
}[] = [
  {
    name: "TypeScript",
    bg: "bg-blue-500",
    border: "border-blue-500",
    color: "text-blue-500",
    date: "2022-05-15",
    icon: "/tech-icons/devicon_typescript.svg",
  },
  {
    name: "Node JS",
    bg: "bg-lime-500",
    border: "border-lime-500",
    color: "text-lime-500",
    date: "2023-2-02",
    icon: "/tech-icons/devicon_nodejs.svg",
  },
  {
    name: "Next",
    bg: "bg-foreground",
    border: "border-foreground",
    color: "text-foreground",
    date: "2022-12-15",
    icon: "/tech-icons/devicon_nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    bg: "bg-cyan-500",
    border: "border-cyan-500",
    color: "text-cyan-500",
    date: "2023-2-15",
    icon: "/tech-icons/devicon_tailwindcss.svg",
  },
];
