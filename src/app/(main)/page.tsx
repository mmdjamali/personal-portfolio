import Quote from "@/components/quote";
import About from "@/components/sections/about";
import ContactMe from "@/components/sections/contact-me";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import { env } from "@/env";
import { ApiResponse } from "@/types/api";
import { TechnologyEntity } from "@/types/entity";

const fetchOftenUsedTechnologies = async () => {
  let error;
  let data;
  try {
    const res: ApiResponse<{ rows: TechnologyEntity[] }> = await fetch(
      env.NEXT_PUBLIC_BACKEND_URL + "/api/used-often",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((res) => res?.json());

    if (!res?.success) throw "Request was not successfull";

    data = res.data.rows;
  } catch (err) {
    error = err;
  }

  return {
    data,
    error,
  };
};

const fetchShowcaseProjects = async () => {
  let error;
  let data;
  try {
    const res: ApiResponse<{ rows: TechnologyEntity }> = await fetch(
      env.NEXT_PUBLIC_BACKEND_URL + "/api/technology/often-used",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((res) => res?.json());

    if (!res?.success) throw "Request was not successfull";

    data = res.data.rows;
  } catch (err) {
    error = err;
  }

  return {
    data,
    error,
  };
};

export default async function Home() {
  const { data: technologies, error: technologiesError } =
    await fetchOftenUsedTechnologies();

  return (
    <div className="realtive flex min-h-[calc(100svh_-_58px)] w-full">
      <main className="relative mx-auto flex w-full max-w-[1300px] flex-col items-start justify-between px-6 md:px-24">
        <Intro />

        <Quote
          by="Carl rogers"
          quote="The only person who is educated is the one who learned how to learn and change"
        />

        <About technologies={technologies ?? []} />

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
