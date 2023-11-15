import AddProject from "@/components/forms/add-project";

const Page = () => {
  return (
    <main className="grid min-h-[calc(100vh_-_54px)] w-full gap-8 bg-foreground/5 p-4 md:grid-cols-[320px_1fr] lg:p-8">
      <AddProject />
    </main>
  );
};

export default Page;
