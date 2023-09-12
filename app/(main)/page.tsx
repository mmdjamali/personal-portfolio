import AnimatedLanguage from "@/components/animated-language";
import Icon from "@/components/icon";
import Quote from "@/components/quote";
import About from "@/components/sections/about";
import Intro from "@/components/sections/intro";
import { PropsWithChildren } from "react";

export default function Home({}: PropsWithChildren) {
  return (
    <div className="realtive flex min-h-[calc(100vh_-_58px)] w-full">
      <main className="mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between px-6 md:px-24">
        <Intro />

        <Quote
          by="Carl rogers"
          quote="The only person who is educated is the one who learned how to learn and change"
        />

        <About />
      </main>
    </div>
  );
}
