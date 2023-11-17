"use client";

import { cn } from "@/lib/utils";
import { useState, PropsWithChildren, ReactNode, useEffect } from "react";

const AnimateInOut = ({ children }: PropsWithChildren) => {
  const [elements, setElements] = useState<
    { key: number; element: ReactNode }[]
  >([]);

  useEffect(() => {
    const test = [
      { element: children, key: Math.random() * 100000 },
      ...elements,
    ];

    setElements(test.slice(0, 2));

    /* eslint-disable */
  }, [children]);

  if (elements.length === 1) {
    return (
      <div
        className={cn(
          "w-fit text-inherit duration-500 animate-in slide-in-from-top-full",
        )}
      >
        {elements[0].element}
      </div>
    );
  }

  return (
    <div className="relative w-fit overflow-hidden text-inherit">
      {elements.map((node, idx) => {
        return (
          <div
            className={cn(
              "w-full text-inherit duration-500 animate-in slide-in-from-top-full",
              idx === 0 ? "" : "absolute top-full",
            )}
            key={node.key + idx}
          >
            {node.element}
          </div>
        );
      })}
    </div>
  );
};

export default AnimateInOut;
