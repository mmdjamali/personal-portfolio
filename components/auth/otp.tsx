import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className: string;
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  success?: boolean;
}

function Otp({ className, onChange, value, success = false }: Props) {
  const [index, setIndex] = useState<number>(0);

  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current?.focus();
  }, [inputRef, index]);

  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-evenly gap-2",
        className,
      )}
    >
      {value.map((value, idx, list) => (
        <input
          onFocus={() => {
            setIndex(idx);
          }}
          value={value}
          onChange={(e) => {
            const v = e.target.value.substring(e.target.value.length - 1);

            if (!new RegExp("^[0-9]+$").test(v) && v !== "") return;

            onChange((prev) => {
              const clone = [...prev];
              clone[idx] = v;
              return clone;
            });

            if (idx !== list.length - 1 && v !== "")
              setIndex((prev) => prev + 1);

            if (idx > 0 && v === "") setIndex((prev) => prev - 1);
          }}
          onKeyDown={(e) => {
            const key = e.key;

            if (key === "Backspace" && !value && idx > 0) {
              setIndex((prev) => prev - 1);
              return;
            }

            if (key === "ArrowRight" && index < list.length - 1) {
              setIndex((prev) => prev + 1);
              e.preventDefault();
              return;
            }

            if (key === "ArrowLeft" && idx > 0) {
              setIndex((prev) => prev - 1);
              e.preventDefault();
              return;
            }
          }}
          ref={idx === index ? inputRef : undefined}
          key={idx}
          className={cn(
            "aspect-square h-10 w-10 border border-foreground/25 bg-background p-0 text-center !outline-none hover:border-foreground/40 focus:border-foreground/75",
            success ? "border-success" : "",
          )}
        />
      ))}
    </div>
  );
}

export default Otp;
