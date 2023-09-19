"use client";

import React from "react";
import Icon from "../icon";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Tech from "../tech";
import { IconKeyType } from "@/types";
import Language from "../language";
import Scrollable from "../scrollable";

function About() {
  return (
    <div className="relative grid w-full items-start justify-start py-32 sm:px-12">
      <section data-name="about" className="flex w-full flex-col pb-10 sm:px-8">
        <div className="relative mx-auto flex w-fit  flex-col items-center">
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
              margin: "0px 0px -40% 0px",
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
              margin: "0px 0px -40% 0px",
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
              margin: "0px 0px -40% 0px",
            }}
            className="group relative w-full text-center text-4xl font-bold leading-[1.5] sm:text-6xl"
          >
            {"Who is "}
            <span className="relative text-cyan-500">MmD</span>
            <span className="relative inline-flex text-cyan-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12">
              ?
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
            margin: "0px 0px -40% 0px",
          }}
          className="my-8 text-[16px] text-foreground/75 lg:px-16"
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
            margin: "0px 0px -40% 0px",
          }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-5"
        >
          <div className="relative col-span-2 my-auto hidden aspect-square w-full lg:flex">
            <Icon
              name="Question"
              className="my-auto aspect-square w-full text-foreground"
            />
          </div>
          <Tabs defaultValue="languages" className="lg:col-span-3">
            <TabsList className="relative grid min-w-full max-w-full flex-shrink-0 ">
              <Scrollable className=" gap-6 overflow-x-hidden scroll-smooth px-4">
                <TabsTrigger
                  value="languages"
                  className="flex-shrink-0 overflow-x-hidden whitespace-nowrap"
                >
                  Languages
                </TabsTrigger>

                <TabsTrigger
                  value="p-languages"
                  className="flex-shrink-0 overflow-x-hidden whitespace-nowrap"
                >
                  P. Languages
                </TabsTrigger>
                <TabsTrigger
                  value="frontend"
                  className="flex-shrink-0 overflow-x-hidden whitespace-nowrap"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="flex-shrink-0 overflow-x-hidden whitespace-nowrap"
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="flex-shrink-0 overflow-x-hidden whitespace-nowrap"
                >
                  Database
                </TabsTrigger>
              </Scrollable>
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
              value="database"
            >
              {database.map((tech, idx) => {
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
    name: "Node",
    backdrop: "bg-lime-500/75",
    border: "border-lime-500",
    color: "text-lime-500",
    date: "2023-2-15",
  },
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

const database: {
  name: string;
  backdrop: string;
  border: string;
  color: string;
  date: string;
}[] = [
  {
    name: "MongoDB",
    backdrop: "bg-green-500/75",
    border: "border-green-500",
    color: "text-green-500",
    date: "2023-2-15",
  },
  {
    name: "SQLite",
    backdrop: "bg-cyan-500/75",
    border: "border-cyan-500",
    color: "text-cyan-500",
    date: "2023-09-05",
  },
];

{
  /* <motion.div
transition={{
  duration: 0.5,
}}
initial={{
  x: -60,
  opacity: 0,
}}
whileInView={{
  x: 0,
  opacity: 1,
}}
viewport={{
  once: true,
  margin: "0px 0px -50% 0px",
}}
className="relative hidden lg:flex"
>
<Icon name="Question" className="w-full text-foreground" />
<Icon
  name="Question"
  className="absolute inset-0 m-auto w-[30%] translate-x-full translate-y-[80%] rotate-12 text-yellow-400 "
/>
<Icon
  name="Question"
  className="absolute inset-0 m-auto w-[30%] -translate-x-full translate-y-[80%] -rotate-12 text-cyan-500 "
/>
</motion.div> */
}
