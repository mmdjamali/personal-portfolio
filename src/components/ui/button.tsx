"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Spinner from "@/components/ui/spinner";

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
        "flex h-10 items-center justify-center gap-3 px-5 font-medium",
        className,
        loading ? "pointer-events-none opacity-75" : "",
      )}
      {...props}
    >
      {children}
      {loading ? <Spinner /> : null}
    </button>
  ),
);

Button.displayName = "button";

export default Button;
