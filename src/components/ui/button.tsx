"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";
import Icon from "../icon";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  loading?: boolean;
}

// const buttonVariants = tv({
//     base : "font-medium flex items-center justify-center",
//     variants : {
//         size : {
//             "md" : "h-10 text-sm px-5"
//         },
//         colors
//     }
// })

const Button = React.forwardRef<React.ComponentRef<"button">, ButtonProps>(
  ({ className, loading, children, onClick, ...props }, ref) => (
    <button
      onClick={(e) => {
        if (loading) return;
        onClick?.(e);
      }}
      ref={ref}
      className={cn(
        "h-10 px-5 font-medium",
        className,
        loading ? "pointer-events-none opacity-75" : "",
      )}
      {...props}
    >
      {children}
      {loading ? (
        <Icon name="Spinner" className="animate-spin text-[21px]" />
      ) : null}
    </button>
  ),
);

Button.displayName = "button";

export default Button;
