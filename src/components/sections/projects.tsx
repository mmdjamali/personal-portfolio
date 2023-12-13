"use client";

import React from "react";
import Icon from "../icon";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ProjectEntity } from "@/types/entity";
import { colors } from "@/constants/colors";

type Props = {
  projects: ProjectEntity[];
};

function Projects({ projects }: Props) {
  return (
    <div className="relative flex w-full items-start justify-start py-32 sm:px-12">
      <section
        data-name="projects"
        className="flex w-full flex-col pb-10 sm:px-8"
      >
        <div className="relative mx-auto flex w-fit flex-col items-center">
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
            <span>{"Let's see"} </span> <br className="hidden sm:block" />
            <span>
              {"some"} <span className="relative text-green-500">work</span>
              <span className="relative inline-flex text-green-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12">
                !
              </span>
            </span>
          </motion.h2>
        </div>

        <motion.div
          className="relative mt-12 grid w-full gap-8"
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
        >
          {projects.map(
            ({ thumbnail, name, description, live, technologies }, idx) => {
              const color = colors[colorForIndex[idx] ?? "foreground"];

              return (
                <div
                  key={idx}
                  className={cn(
                    `relative flex flex-col items-center justify-between gap-6 lg:gap-12`,
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  )}
                >
                  <div className={`relative flex w-full`}>
                    <motion.div
                      initial={{
                        y: 0,
                        x: 0,
                      }}
                      whileInView={{
                        y: -6,
                        x: -6,
                      }}
                      viewport={{
                        margin: "0px 0px -50% 0px",
                        once: true,
                      }}
                      className={cn(
                        "relative z-[1] flex aspect-video w-full p-2",
                        color["bg"],
                      )}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          unoptimized
                          className="object-cover"
                          fill={true}
                          src={thumbnail ?? ""}
                          alt={""}
                        />
                      </div>
                    </motion.div>

                    <span
                      className={cn(
                        `absolute bottom-0 right-0 z-[0] h-full w-full`,
                        color["bg/75"],
                      )}
                    />
                  </div>

                  <div className="flex w-full flex-col gap-4 text-foreground">
                    <h3 className="text-[21px] font-semibold">{name ?? ""}</h3>

                    <p className="text-foreground/75">{description ?? ""}</p>

                    <div className="flex gap-3 font-medium">
                      {technologies?.map(({ icon, id, name }) => {
                        return (
                          <Image
                            height={21}
                            width={21}
                            alt={name ?? ""}
                            src={icon ?? ""}
                            key={id}
                          />
                        );
                      })}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={live ?? ""}
                        className={cn(
                          "group relative flex w-fit cursor-pointer items-center justify-center gap-2 bg-foreground px-4 py-2 font-medium text-background transition-colors",
                          color["hover:bg"],
                        )}
                      >
                        <span>Try it out</span>

                        <Icon
                          name="Right"
                          className="text-[18px] transition-transform duration-500 group-hover:-rotate-45"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </motion.div>
      </section>
    </div>
  );
}

export default Projects;

const colorForIndex = ["blue", "red", "green"] as const;
