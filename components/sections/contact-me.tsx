"use client";

import React from "react";
import { motion } from "framer-motion";
import NumberUp from "../animation/number-up";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ContactMe() {
  return (
    <div className="relative grid w-full items-start justify-stretch py-32 sm:px-12">
      <section
        data-name="contact"
        className="flex w-full flex-col pb-10 sm:px-8"
      >
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
            {"Contact"}
            <span>
              <span className="relative text-rose-500">{" MmD"}</span>
              <span className="relative inline-flex text-rose-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12">
                !
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
            "Enough about me, please don't be shy about it if you want to say Hi to me."
          }
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
          className="mt-8 text-[16px] leading-[1.5] text-foreground/75 lg:px-16"
        >
          {
            "Enough about me, please don't be shy about it if you want to say Hi to me."
          }
        </motion.p>
      </section>
    </div>
  );
}

export default ContactMe;
