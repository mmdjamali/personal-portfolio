import AddTechnology from "@/components/technology/add-form";

const Page = () => {
  return (
    <main className="grid min-h-[calc(100svh_-_54px)] w-full gap-4 bg-foreground/5 p-4 md:grid-cols-[320px_1fr] lg:gap-8 lg:p-8">
      <AddTechnology />
    </main>
  );
};

export default Page;
