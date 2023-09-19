"use client";

import { cn } from "@/lib/utils";
import NumberUp from "./animation/number-up";
import { useState } from "react";
import Link from "next/link";

interface Props {
  tech: {
    name: string;
    backdrop: string;
    border: string;
    color: string;
    date: string;
  };
}

const Tech = ({ tech: { backdrop, border, color, date, name } }: Props) => {
  const [showMonths, setShowMonths] = useState(false);

  return (
    <div className="relative flex">
      <div className={cn("absolute inset-0", backdrop)} />

      <div
        onClick={() => {
          setShowMonths((prev) => !prev);
        }}
        className={cn(
          "relative z-[1] w-full -translate-x-[3px] -translate-y-[3px] cursor-pointer border-4 bg-background p-4 py-3 transition-transform hover:-translate-x-1 hover:-translate-y-1 active:-translate-x-0 active:-translate-y-0",
          border,
          color,
        )}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            href=""
            onClick={(e) => e.stopPropagation()}
            className="font-medium hover:underline"
          >
            {name}
          </Link>
          {showMonths ? (
            <p className="flex font-medium duration-500 animate-in zoom-in-50">
              +
              <NumberUp
                minLen={2}
                key={"test"}
                duration={1000}
                number={Math.ceil(
                  (new Date().getTime() - new Date(date).getTime()) /
                    2629746000,
                )}
              />
              <span>&nbsp; months</span>
            </p>
          ) : (
            <p className="flex font-medium">
              <NumberUp
                minLen={4}
                number={new Date(date).getFullYear()}
                duration={1000}
              />
              ,&nbsp;
              <NumberUp
                minLen={2}
                number={new Date(date).getMonth() + 1}
                duration={1000}
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tech;
