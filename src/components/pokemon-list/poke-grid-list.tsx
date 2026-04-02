"use client";

import { forwardRef, HTMLAttributes } from "react";

export const PokeGridList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ style, children, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    style={{
      ...style,
      paddingBottom: "4rem",
    }}
    className="flex flex-wrap justify-center gap-8"
  >
    {children}
  </div>
));

PokeGridList.displayName = "PokeGridList";
