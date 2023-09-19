import Icon from "@/components/icon";

const Loading = () => {
  return (
    <div className="grid h-full w-full place-items-center bg-background">
      <Icon
        name="Crown"
        className="h-[70px] text-foreground duration-500 animate-in slide-in-from-bottom-24"
      />
    </div>
  );
};

export default Loading;