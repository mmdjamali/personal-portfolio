"use client";

import React from "react";

import * as DialogPrimitives from "@radix-ui/react-dialog";

import { cn } from "../../lib/utils";

const Drawer = DialogPrimitives.Root;

const DrawerTrigger = DialogPrimitives.Trigger;

const DrawerPortal = DialogPrimitives.Portal;

const DrawerClose = DialogPrimitives.Close;

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content> {
  side: "top" | "bottom" | "left" | "right";
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  DrawerContentProps
>(({ side, className, ...props }, ref) => {
  const variant = {
    top: "top-0",
    right:
      "right-0 inset-y-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
    bottom:
      "bottom-0 inset-x-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
    left: "left-0 inset-y-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",
  };

  return (
    <DialogPrimitives.Content
      ref={ref}
      className={cn(
        "animate-duration-200 animate-ease-linear fixed z-[999] h-full w-full overflow-auto data-[state=closed]:duration-500 data-[state=open]:duration-500",
        variant[side],
        className,
      )}
      {...props}
    />
  );
});

DrawerContent.displayName = "@1stmmd/drawer-content";

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Overlay
    ref={ref}
    className={cn(
      "bg-base-content/25 fixed inset-0 z-[50] h-full w-full backdrop-blur-[2px]",
      className,
    )}
    {...props}
  />
));

DrawerOverlay.displayName = "@1stmmd/drawer-overlay";

export {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerOverlay,
};
