"use client";

import { cn } from "@/lib/utils";
import { IconKeyType } from "@/types";
import React, { useId } from "react";
import Icon from "../icon";
interface props extends React.ComponentPropsWithoutRef<"input"> {
  inputClassName?: string;
  variant?: "outlined";
  color?: "primary" | "foreground";
  block?: boolean;
  error?: boolean | string;
  success?: boolean;
  actions?: React.ReactNode[];
  label?: string;
  description?: string;
  icon?: IconKeyType;
}

const Input = React.forwardRef<React.ElementRef<"input">, props>(
  (
    {
      inputClassName,
      className,
      variant = "outlined",
      color = "foreground",
      block = false,
      error = false,
      success = false,
      actions,
      label,
      required,
      description,
      icon,
      ...props
    },
    ref,
  ) => {
    const variants = {
      outlined: {
        shared: "focus-within:shadow-[0_0_0_2px]",
        primary: "focus-within:!border-primary focus-within:shadow-primary/25",
        foreground:
          "focus-within:!border-foreground focus-within:shadow-foreground/25",
        error: "focus-within:!border-error !border-error !shadow-error/25",
        success:
          "focus-within:!border-success !border-success !shadow-success/25",
      },
    };

    const ID = useId();

    return (
      <div
        className={cn("relative flex flex-col gap-1", block ? "w-full" : "")}
      >
        {label ? (
          <label
            htmlFor={ID}
            className="text-[14px] font-medium text-foreground"
          >
            {label}
            {required ? (
              <>
                {" "}
                <span className="text-[12px] text-error">{"*"}</span>
              </>
            ) : null}
          </label>
        ) : null}

        <div
          className={cn(
            "relative flex h-10 w-full items-center gap-3 border border-foreground/10 px-3 text-[14px] transition-all hover:border-foreground/50",
            variants[variant]["shared"],
            variants[variant][color],
            success ? variants[variant]["success"] : "",
            error ? variants[variant]["error"] : "",
            className,
          )}
        >
          {icon ? (
            <Icon className="h-[21px] shrink-0 text-[21px]" name={icon} />
          ) : null}

          <input
            id={ID}
            ref={ref}
            required={required}
            className={cn(
              "w-full flex-shrink bg-transparent text-foreground/75 outline-none",
              inputClassName,
            )}
            {...props}
          />
          {actions
            ? actions.map((action, idx) => (
                <React.Fragment key={idx}>{action}</React.Fragment>
              ))
            : ""}
        </div>

        {error && typeof error === "string" ? (
          <p className="text-sm text-error">{error}</p>
        ) : null}

        {description && typeof description === "string" ? (
          <p className="text-sm text-foreground/60">{description}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "@1stMmD/Input";

export default Input;
