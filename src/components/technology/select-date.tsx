"use client";

import * as Popover from "@radix-ui/react-popover";
import Button from "../ui/button";
import Icon from "../icon";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type DateDataType = {
  year: null | number;
  month: null | number;
};

type Props = {
  onChange: (v: DateDataType) => void;
  value: DateDataType;
};

const SelectDate = ({ onChange, value }: Props) => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button className="flex w-full items-center justify-between border border-foreground/10 px-3 text-start text-foreground/75">
          {value.month !== null
            ? `${value.year}-${
                value.month < 9
                  ? "0" + (value.month + 1).toString()
                  : value.month + 1
              }`
            : "Select"}
          <Icon name="Calender" className="text-[21px]" />
        </Button>
      </Popover.Trigger>

      <Popover.Content
        align="start"
        className="z-[999] flex flex-col gap-4 bg-background p-4 shadow-[0px_0px_30px_0px] shadow-foreground/10"
      >
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => {
              setYear((prev) => prev - 1);
            }}
          >
            <Icon name="ArrowLeftS" className="text-[18px]" />
          </button>

          <span className="font-normal">{year}</span>

          <button
            onClick={() => {
              setYear((prev) => prev + 1);
            }}
          >
            <Icon name="ArrowRightS" className="text-[18px]" />
          </button>
        </div>

        <div className="grid grid-cols-4">
          {Array.from({ length: 12 })
            .fill("")
            .map((_, idx) => {
              const now = new Date();
              return (
                <button
                  onClick={() => {
                    if (
                      year > now.getFullYear() ||
                      (now.getFullYear() === year && idx > now.getMonth())
                    )
                      return;

                    onChange({
                      month: idx,
                      year,
                    });
                  }}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center hover:bg-foreground/5",
                    value.year === year && value.month === idx
                      ? "bg-foreground text-background hover:bg-foreground"
                      : "",
                    year > now.getFullYear() ||
                      (now.getFullYear() === year && idx > now.getMonth())
                      ? "cursor-not-allowed opacity-75"
                      : "",
                  )}
                  key={idx}
                >
                  {idx + 1}
                </button>
              );
            })}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default SelectDate;
