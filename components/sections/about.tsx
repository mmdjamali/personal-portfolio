"use client";

import React from "react";
import Icon from "../icon";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Tech from "../tech";
import { IconKeyType } from "@/types";
import Language from "../language";

function About() {
  return (
    <div className="relative grid w-full items-center justify-center py-32 sm:px-12 lg:grid-cols-3">
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
        className="col-span-2 flex w-full flex-col pb-10 sm:px-8"
      >
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
            margin: "0px 0px -50% 0px",
          }}
          className="relative w-full text-4xl font-bold leading-[1.5] sm:text-6xl"
        >
          {"Who is "}
          <span className="relative text-cyan-500">MmD?</span>
        </motion.h2>

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
            margin: "0px 0px -50% 0px",
          }}
          className="my-4 text-[16px] text-foreground/90"
        >
          {`My name is Mohammad Jamali and I was born on July 6 of 2004, in Tabriz, a city in South Azerbaijan. I am a highly motivated and passionate front-end developer with experience building websites and web applications using frameworks such as React, Preact, and Next.`}
        </motion.p>

        <motion.div
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
            margin: "0px 0px -30% 0px",
          }}
        >
          <Tabs defaultValue="languages">
            <TabsList>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="p-languages">P. Languages</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex flex-col gap-4 transition-none data-[state=active]:py-8 data-[state=active]:duration-500 data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-14"
              value="p-languages"
            >
              {pLanguages.map((tech, idx) => {
                return <Tech key={idx + tech.name} tech={tech} />;
              })}
            </TabsContent>
            <TabsContent
              className="flex flex-col gap-4 transition-none data-[state=active]:py-8 data-[state=active]:duration-500 data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-14"
              value="frontend"
            >
              {frontend.map((tech, idx) => {
                return <Tech key={idx + tech.name} tech={tech} />;
              })}
            </TabsContent>
            <TabsContent
              className="flex flex-col gap-4 transition-none data-[state=active]:py-8 data-[state=active]:duration-500 data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-14"
              value="backend"
            >
              {backend.map((tech, idx) => {
                return <Tech key={idx + tech.name} tech={tech} />;
              })}
            </TabsContent>
            <TabsContent
              className="flex flex-col gap-4 transition-none data-[state=active]:py-8 data-[state=active]:duration-500 data-[state=active]:animate-in data-[state=active]:fade-in-5 data-[state=active]:slide-in-from-bottom-14"
              value="languages"
            >
              {languages.map((language, idx) => {
                return (
                  <Language key={idx + language.name} language={language} />
                );
              })}
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>
    </div>
  );
}

export default About;

const pLanguages: {
  name: string;
  backdrop: string;
  border: string;
  color: string;
  date: string;
}[] = [
  {
    name: "JavaScript",
    backdrop: "bg-yellow-500/75",
    border: "border-yellow-500",
    color: "text-yellow-500",
    date: "2022-01-25",
  },
  {
    name: "TypeScript",
    backdrop: "bg-blue-500/75",
    border: "border-blue-500",
    color: "text-blue-500",
    date: "2022-05-15",
  },
  {
    name: "Go",
    backdrop: "bg-cyan-500/75",
    border: "border-cyan-500",
    color: "text-cyan-500",
    date: "2023-09-02",
  },
];

const languages: {
  name: string;
  backdrop: string;
  border: string;
  color: string;
  icon: IconKeyType;
}[] = [
  {
    name: "English",
    backdrop: "bg-blue-500/75",
    border: "border-blue-500",
    color: "text-blue-500",
    icon: "English",
  },
  {
    name: "Turkish",
    backdrop: "bg-red-500/75",
    border: "border-red-500",
    color: "text-red-500",
    icon: "Turkish",
  },
  {
    name: "Azeri",
    backdrop: "bg-green-500/75",
    border: "border-green-500",
    color: "text-green-500",
    icon: "Azeri",
  },
  {
    name: "Persian",
    backdrop: "bg-yellow-500/75",
    border: "border-yellow-500",
    color: "text-yellow-500",
    icon: "Persian",
  },
];

const frontend: {
  name: string;
  backdrop: string;
  border: string;
  color: string;
  date: string;
}[] = [
  {
    name: "React",
    backdrop: "bg-cyan-500/75",
    border: "border-cyan-500",
    color: "text-cyan-500",
    date: "2022-02-2",
  },
  {
    name: "Next",
    backdrop: "bg-foreground/75",
    border: "border-foreground",
    color: "text-foreground",
    date: "2022-12-15",
  },
  {
    name: "Svelte",
    backdrop: "bg-orange-500/75",
    border: "border-orange-500",
    color: "text-orange-500",
    date: "2022-12-15",
  },
];

const backend: {
  name: string;
  backdrop: string;
  border: string;
  color: string;
  date: string;
}[] = [
  {
    name: "Express",
    backdrop: "bg-foreground/75",
    border: "border-foreground",
    color: "text-foreground",
    date: "2023-2-15",
  },
  {
    name: "Fiber",
    backdrop: "bg-cyan-500/75",
    border: "border-cyan-500",
    color: "text-cyan-500",
    date: "2023-09-05",
  },
];
