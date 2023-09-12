"use client";

import { cn } from "@/lib/utils";
import NumberUp from "./animation/number-up";
import { useState } from "react";
import Icon from "./icon";
import { IconKeyType } from "@/types";

interface Props {
  language: {
    name: string;
    backdrop: string;
    border: string;
    color: string;
    icon: IconKeyType;
  };
}

const Language = ({
  language: { backdrop, border, color, icon, name },
}: Props) => {
  return (
    <div className="relative flex">
      <div className={cn("absolute inset-0", backdrop)} />

      <div
        className={cn(
          "relative z-[1] w-full -translate-x-[3px] -translate-y-[3px] cursor-pointer border-2 bg-background p-4 py-3 transition-transform hover:-translate-x-1 hover:-translate-y-1 active:-translate-x-0 active:-translate-y-0",
          border,
          color,
        )}
      >
        <div className="flex w-full items-center justify-between">
          <p className="font-medium">{name}</p>

          <Icon name={icon} className="h-[21px]" />
        </div>
      </div>
    </div>
  );
};

export default Language;
