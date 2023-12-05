"use client";

import { Toaster as ToasterPrimitive } from "sonner";

export function Toaster() {
  return (
    <ToasterPrimitive
      closeButton
      richColors
      position="top-right"
      className="relative z-[9999]"
      duration={5000}
    />
  );
}
