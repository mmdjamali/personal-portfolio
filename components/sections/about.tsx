"use client";

import React from "react";
import Icon from "../icon";

import { motion } from "framer-motion";

function About() {
  return (
    <div className="relative grid w-full items-center justify-center px-12 py-32 lg:grid-cols-3">
      <div className="relative hidden lg:flex">
        <Icon name="Question" className="w-full text-foreground" />
        <Icon
          name="Question"
          className="absolute inset-0 m-auto w-[30%] translate-x-full translate-y-[80%] rotate-12 text-yellow-400 "
        />
        <Icon
          name="Question"
          className="absolute inset-0 m-auto w-[30%] -translate-x-full translate-y-[80%] -rotate-12 text-cyan-500 "
        />
      </div>

      <section
        data-name="about"
        className="col-span-2 flex w-full select-none flex-col pb-10 sm:px-8"
      >
        <motion.h2
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
            margin: "0px 0px -50% 0px",
          }}
          className="relative w-full text-4xl font-bold leading-[1.5] sm:text-6xl"
        >
          {"Who is "}
          <span className="relative text-cyan-500">MmD?</span>
        </motion.h2>

        <motion.p
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
            margin: "0px 0px -30% 0px",
          }}
          className="mt-4 text-[16px] text-foreground/90"
        >
          {`My name is Mohammad Jamali and I was born on July 6 of 2004, in Tabriz, a city in South Azerbaijan. I am a highly motivated and passionate front-end developer with experience building websites and web applications using frameworks such as React, Preact, and Next.`}
        </motion.p>
      </section>
    </div>
  );
}

export default About;
