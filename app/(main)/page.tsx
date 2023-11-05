import Quote from "@/components/quote";
import About from "@/components/sections/about";
import ContactMe from "@/components/sections/contact-me";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="realtive flex min-h-[calc(100vh_-_58px)] w-full">
      <main className="relative mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between px-6 md:px-24">
        <Intro />

        <Quote
          by="Carl rogers"
          quote="The only person who is educated is the one who learned how to learn and change"
        />

        <About />

        <Quote
          by="Carl rogers"
          quote="The only person who is educated is the one who learned how to learn and change"
        />

        <Projects />

        <Quote
          by="Carl rogers"
          quote="The only person who is educated is the one who learned how to learn and change"
        />

        <ContactMe />
      </main>
    </div>
  );
}
