import { MouseEvent } from "react";
import Icon from "../icon";
import { cn } from "@/lib/utils";

type Props = {
  value: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
};

const Checkbox = ({ onClick, value }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-5 w-5 items-center justify-center overflow-hidden border",
        value
          ? "border-foreground/75 bg-foreground/75"
          : "border-foreground/20 bg-background",
      )}
    >
      {value ? (
        <Icon
          name="Check"
          className="text-[14px] text-background duration-300 animate-in slide-in-from-bottom-full"
        />
      ) : null}
    </button>
  );
};

export default Checkbox;
